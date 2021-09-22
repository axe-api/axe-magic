import fs from 'fs';
import shell from "shelljs";

import "colors";

export default async function (options, args) {
  // remove env, pwd and first command
  args = args.slice(3);
  args = args.map(option => option.replace('--', ''));
  const modelName = args[0][0].toUpperCase() + args[0].slice(1).toLowerCase();
  const functions = {
    table: `  get table() {\n    return \"${modelName}\";\n  }`,
    fillable: `  get fillable() {\n    // Set fillable fields\n    // return [\"email\", \"name\", \"surname\", \"age\"];\n    return [];\n  }`,
    primaryKey: `  get primaryKey() {\n    // return \"uuid\";\n    return \"\";\n  }`,
    validations: "  get validations() {\n   /* Set valiation rules using \"validator.js\" \n    return {\n      email: \"required|email\",\n      name: \"required|max:50\",\n      age: \"max:100\",\n    };*/\n    return {};\n  }",
    hiddens: `  get hiddens() {\n    // Hide secret fields.\n    // return [\"password\", \"password_hash\"];\n    return [];\n  }`,
    serialize: '  serialize(items) {\n    // Change key name or add virtual fields.  \n    // return {\n    //   ...item,\n    //   fullname: `${item.name} ${item.surname}`,\n    // };\n    return {\n      ...items,\n    };\n  }',
    handlers: "  get handlers() {\n    //  You can decide what route should be generated.\n    // return [INSERT, SHOW, UPDATE, PAGINATE];\n    return [];\n  }",
    middlewares: "  get middlewares() {\n    return [\n      (req, res, next) => {\n        // Check anything you want here.\n        next();\n      },\n    ];\n  }",
    ignore: "  get ignore() {\n    // In case you don't want to create routes for a model, Axe API provides ignore getter.\n    return true;\n  }",
  }

  const template = `import { Model } from "axe-api";\n\nclass ${modelName} extends Model {\n${args.slice(1).map(option => functions[option]).join('\n\n')}\n}\n\nexport default ${modelName};`
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