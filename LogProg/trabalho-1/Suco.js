const prompt = require("prompt-sync")()

const laranjas = Number(prompt("Numero de laranjas: "))

const copos = Math.floor(laranjas / 6)

const sobra = laranjas % 6

console.log(`Copos de suco: ${copos}`)
console.log(`Sobram: ${sobra} laranjas`)