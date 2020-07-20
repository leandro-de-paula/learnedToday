const log = require("./util")
const _ = require("lodash")
const chalk = require("chalk")

console.log(process.argv)


//const command = process.argv[2].toUpperCase()
const command = process.argv[2]
const name  = process.argv[3]

if(command === "ADD"){
    console.log(chalk.bold.green.inverse (`    Adding New Task --> ${name}        `))
} else if(command === "REMOVE"){
    console.log(chalk.bold.yellow.inverse("    Removing a Task        "))
} else {
    console.log(chalk.bold.red.inverse   ("    Command not found      "))
}
console.log("Hello")