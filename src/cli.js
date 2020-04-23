import parser from './Core/CommandParser'
import selector from './Core/CommandSelector'

export async function cli(args) {
  let options = parser(args)
  selector(options)(options, args)
}