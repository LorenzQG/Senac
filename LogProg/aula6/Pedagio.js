const prompt = require("prompt-sync")()

const numP = Number(prompt("Quantidade de pessoas: "))
const valPed = Number(prompt("Valor do pedagio: "))

const carros = Math.ceil(numP / 5)

const pedTotal = (carros * valPed) * 2

console.log(`Numero de carros: ${carros}`)
console.log(`Total de pedagio: ${pedTotal}`)