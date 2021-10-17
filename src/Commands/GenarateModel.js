import fs from 'fs';
import shell from "shelljs";
import Options from "../Templates/GenerateModel";

import "colors";

export default async function (options, args) {
  // remove env, pwd and first command
  args = args.slice(3);
  args = args.map(option => option.replace('--', ''));
  const modelName = args[0][0].toUpperCase() + args[0].slice(1).toLowerCase();
  const selectedOptions =  args.slice(1).map(option => {
    option = option[0].toUpperCase() + option.substr(1); // Upper first latter;
    let selected = Options[option];
    return typeof selected === "function" ? selected(modelName) : selected; // "Table" option return dynamically string.   
  });
  const template = Options.Model(modelName, selectedOptions);

  // Get top level of project then append "/app/Models/ModelName.js"
  let path = await shell.exec("git rev-parse --show-toplevel", { silent: true }).replace('\n', `/app/Models/${modelName}.js`);

  await fs.writeFileSync(path, template);
  const errors = shell.error();
  if (errors !== null) {
    console.log("Some errors have occured!".red);
    shell.exit(0);
  }

  console.log(`Models/${modelName}.js has been created!`.green);
}