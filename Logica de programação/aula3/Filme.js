const prompt = require("prompt-sync")()

const duracao = Number(prompt("Insira a duração do filme em minutos: "))

const horas = Math.floor(duracao / 60)
const minutos = duracao % 60

console.log(`A duração do filme é de ${horas}Hrs e ${minutos}Min`)