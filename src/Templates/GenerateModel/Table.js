export default function(modelName){
    return `  get table() {\n    return \"${modelName}\";\n  }`
}