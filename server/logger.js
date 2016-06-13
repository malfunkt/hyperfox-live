const chalk = require('chalk')
const divider = chalk.gray('\n-----------------------------------')
const logger = {
  error: err => {
    console.error(chalk.red(err))
  },

  appStarted: (port) => {
    console.log(`Server started ${chalk.green('✓')}`)
    console.log(`${divider}\nLocalhost: ${chalk.magenta(`http://localhost:${port}`)}${divider}`)
  }
}

module.exports = logger
