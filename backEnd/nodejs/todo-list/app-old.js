const log = require("./util")
const _ = require("lodash")
const chalk = require("chalk")
console.log(chalk.bold.yellow.inverse("app.js"))
log("Log de mensagem")


const meuArry = [1, 2, 3, 4, 5, 1, 7, 2, 9]

const meuNovoArray = _.chunk(meuArry, 3)

const primeiraMensagem = chalk.bold.green.inverse("Array Inicial")
console.log(primeiraMensagem)
console.log(chalk.blue(meuArry))

// const segundaMensagem = chalk.red("Meu Novo Array")
console.log(chalk.bold.red.inverse("Meu Novo Array"))
console.log(meuNovoArray)

const diferencaLadoA = _.difference(meuNovoArray[0], meuNovoArray[1])
console.log(diferencaLadoA)

const diferencaLadoB = _.difference(meuNovoArray[1], meuNovoArray[0])
console.log(diferencaLadoB)

const comum = _.isEqual(meuNovoArray[0], meuNovoArray[1])
console.log(comum)

console.log(_.indexOf(meuArry,9))
console.log(_.indexOf(meuArry, 10))
