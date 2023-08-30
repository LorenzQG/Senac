const prompt = require("prompt-sync")()

const minutos = Number(prompt("Quantos minutos tem o filme? "))

const duracao = minutos / 60

console.log(`A duração do filme em minutos é: ${duracao.toFixed(2)}`)