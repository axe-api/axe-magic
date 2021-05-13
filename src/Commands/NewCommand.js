import shell from "shelljs";
import "colors";
import rimraf from "rimraf";

export default async function (options, args) {
  let customName = "axe-magic-api";
  let errors = null;
  const fs = require("fs");

  if (args[3]) {
    customName = args[3];
    console.log(`Directory name would be: ${customName}`.green);
  }

  console.log("Pulling example Axe API project...".yellow);
  await shell.exec(
    `git clone https://github.com/axe-api/axe-api-template.git ${customName}`
  );

  errors = shell.error();
  if (errors !== null) {
    console.log("Some errors have occured!".red);
    shell.exit(0);
  }

  console.log("Creating .env file");

  await fs.renameSync(`${customName}/.env.example`, `${customName}/.env`);
  await rimraf.sync(`${customName}/.git`);
  console.log(`The project has been created!`.green);
  console.log(`
Usage:

  $ cd ${customName}
  $ npm install & npm run start:dev
`);
}
