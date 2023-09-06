const prompt = require("prompt-sync")()

const horaB = Number(prompt("Digite a hora: "))

const horaF = (horaB + 5) - 24

console.log(`Hora no Brasil: ${horaB}`)
console.log(`Hora na França: ${horaF}`)