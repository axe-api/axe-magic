import executer from './../Core/Executer'
import colors from 'colors'

export default async function (options, args) {
  let customName = 'adonisx-example'
  if (args[3]) {
    customName = args[3]
    console.log(`Directory name would be: ${customName}`.green)
  }

  console.log('Pulling AdonisX project...'.yellow)
  await executer(`git clone git@github.com:adonisx/adonisx-example.git ${customName}`)
  console.log(`The project has been created!`.green)
  console.log(`
Usage:

  $ cd ${customName}
  $ yarn & yarn serve
`)
}