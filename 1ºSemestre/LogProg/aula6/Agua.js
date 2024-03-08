const prompt = require("prompt-sync")()

const litrosD = Number(prompt("Litros de aguá por dia: "))
const dias = Number(prompt("Quantos dias: "))

const precisa = litrosD * dias 

const garrafas = precisa * 2

console.log(`Você precisa comprar: ${precisa}`)
console.log(`Portanto ${garrafas} garrafas de 500ml`)