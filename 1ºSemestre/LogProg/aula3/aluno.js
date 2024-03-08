const prompt = require("prompt-sync")()

const name = prompt("Nome do Aluno: ")
const idade = Number(prompt("Idade: "))

const anoNasc = 2023 - idade

console.log (`${name}, você nasceu em ${anoNasc}`)
