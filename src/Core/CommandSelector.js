import VersionCommand from './../Commands/VersionCommand'
import NewCommand from './../Commands/NewCommand'
import UsageCommand from './../Commands/UsageCommand'

const map = {
  version: VersionCommand,
  new: NewCommand
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
    return UsageCommand
  }

  return action
}
