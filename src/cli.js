const { Command } = require("commander");
const program = new Command();
const newCommand = require("./Commands/NewCommand");

program.name("axe-magic").description("AXE API CLI tool").version("2.0.0");

program
  .command("new")
  .description("Create a new Axe API project.")
  .argument("<project-name>", "The name of the project")
  .action(newCommand);

module.exports = {
  cli: () => program.parse(),
};
