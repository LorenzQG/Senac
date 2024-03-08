const prompt = require("prompt-sync")()

const num1 = parseInt(prompt("Numero 1: "))
const num2 = parseInt(prompt("Numero 2: "))
const num3 = parseInt(prompt("Numero 3: "))

const media = (num1 + num2 + num3)/3

console.log(`Media entre os 3: ${media}`)