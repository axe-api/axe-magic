import arg from 'arg'

export default function (rawArgs) {
  const args = arg(
    {
      '--version': Boolean,
      '-v': '--version'
    },
    {
      argv: rawArgs.slice(2)
    }
  )
  return {
    version: args['--version'] || false,
    template: args._[0]
  }
}
