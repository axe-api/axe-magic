import parser from './Core/CommandParser'
import selector from './Core/CommandSelector'

export async function cli(args) {
  let options = null;
  try {
    options = parser(args)
  } catch (error) { // Handle option parsing error then select UsageCommand
    options = { help: true, template: undefined }
    console.log(`error: unknown option '${args.splice(2).join(' ')}'`)
  }
  selector(options)(options, args)
}