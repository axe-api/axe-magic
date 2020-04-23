const shell = require('shelljs')

export default async function (command) {
  shell.exec(command)
  // return new Promise((resolve) => {
    
  //   exec(command, (error, stdout, stderr) => {
  //     if (error) {
  //       console.log(`error: ${error.message}`)
  //       return
  //     }

  //     if (stderr) {
  //       console.log(`stderr: ${stderr}`)
  //       console.log(stderr)
  //       return
  //     }

  //     resolve(stdout)
  //   })  
  // })
}
