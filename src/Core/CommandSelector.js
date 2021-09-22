import VersionCommand from './../Commands/VersionCommand'
import NewCommand from './../Commands/NewCommand'
import UsageCommand from './../Commands/UsageCommand'
import GenerateModel from './../Commands/GenarateModel'

const map = {
  version: VersionCommand,
  new: NewCommand,
  help: UsageCommand,
  "generate:model": GenerateModel,
}

export default function (options) {
  if (options.template && map[options.template]) {
    return map[options.template]
  }

  let action = null
  for (const key in options) {
    if (options[key] && map[key]) {
      action = map[key]
      break;
    }
  }

  if (action === null) {
    options.template && console.log(`axe-magic: '${options.template}' is not a axe-magic command.`);
    return UsageCommand
  }

  return action
}
