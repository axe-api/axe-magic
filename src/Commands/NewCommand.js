import shell from 'shelljs'
import colors from 'colors'

export default async function (options, args) {
  let customName = 'adonisx-example'
  if (args[3]) {
    customName = args[3]
    console.log(`Directory name would be: ${customName}`.green)
  }

  console.log('Pulling AdonisX project...'.yellow)
  await shell.exec(`git clone git@github.com:adonisx/adonisx-example.git ${customName}`)

  console.log('Creating .env file')
  await shell.exec(`mv ${customName}/.env.example ${customName}/.env`)

  console.log(`The project has been created!`.green)
  console.log(`
Usage:

  $ cd ${customName}
  $ yarn & yarn serve
`)
}