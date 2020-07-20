const log = require("./util")
const _ = require("lodash")
const chalk = require("chalk")

console.log(process.argv)

function command(params) {
    //Setup de variaveis auxiliares
    const paramsCommands = params
    const name = process.argv[3]
    //Lista de comandos:
    const add = "ADD"
    const remove = "REMOVE"
    
    if (paramsCommands === undefined) {
        console.log(chalk.bold.red.inverse   ("    Command not found      "))
        console.log(`Comandos:\n ${add}(Para adicionar um tarefa)\n ${remove}(Remove uma tarefa)`)
        
    } else if (paramsCommands.toUpperCase() === add) {

        console.log(chalk.bold.green.inverse (`    Adding New Task --> ${name}        `))
        //console.log("Estou aqui: (paramsCommands == add) --> Adding New Task")

    } else if (paramsCommands.toUpperCase() === remove) {
        console.log(chalk.bold.yellow.inverse("    Removing a Task        "))
        //console.log("Estou aqui: (paramsCommands == remove) --> Removing a Task ")
    } else {
        console.log(chalk.bold.yellow.inverse("    Enter a valid command     "))
        //console.log("Estou aqui: Enter a valid command ")
    }
    
}

command(process.argv[2])