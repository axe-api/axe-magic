import arg from 'arg'

export default function (rawArgs) {
  const args = arg(
    {
      '--version': Boolean,
      '-v': '--version',
      '--help': Boolean,
      '-h': '--help',
    },
    {
      argv: rawArgs.slice(2)
    }
  )
  return {
    version: args['--version'] || false,
    help: args['--help'] || false,
    template: args._[0]
  }
}
