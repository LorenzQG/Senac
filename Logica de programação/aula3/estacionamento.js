const prompt = require("prompt-sync")()

const horaE = Number(prompt("Insira a hora de entrada: "))
const horaS = Number(prompt("Insira a hora de saida: "))

const tempo = Math.ceil(horaS - horaE)

const valor = 5

const valorHora = valor * tempo

console.log(`Cobrar: ${tempo}Hrs, Valor: ${valorHora}R$`)