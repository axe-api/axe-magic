import Handlers from "./Handlers";

export default function (modelName, options) {
    let isHandlerOptionExist = options.includes(Handlers);
    return `import { Model${isHandlerOptionExist ? ", HANDLERS" : ""} } from "axe-api";${isHandlerOptionExist ? "\nconst { INSERT, SHOW, UPDATE, PAGINATE } = HANDLERS;" : ""}\n\nclass ${modelName} extends Model {\n${options.join('\n\n')}\n}\n\nexport default ${modelName};`
}