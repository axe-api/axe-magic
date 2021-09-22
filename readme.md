# axe-magic

This is a simple cli tool to manage Axe API projects easily.

## Usage

```
$ npm install -g axe-magic
$ axe-magic --version
```

## Commands

### new

To create a new project, you may use following command;

```
$ axe-magic new my-api
```

### generate:model

To generate a new model, you may use following command;

```
$ axe-magic generate:model <name> [options]
```
**Options**
+ `--table`: You can define which name is using in the database table.
+ `--primaryKey`: You can define the name of the primary key in the database.
+ `--fillable`: If you want to allow what kind of data can be filled, you should use it.
+ `--validations`: Validate form.
+ `--hiddens`: Hide some sensitive information from client.
+ `--serialize`: Hide some values or to create some computed results.
+ `--handlers`: You can decide what route should be generated.
+ `--middlewares`: Set middleware.
+ `--ignore`: In case you don't want to create routes for a model, Axe API provides ignore getter.

## License

[MIT License - Özgür Adem Işıklı](LICENSE)
