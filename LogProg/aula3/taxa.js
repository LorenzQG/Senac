const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor do jantar R$: "))

const taxaG = valor * 0.10 
// const garcom = valor / 10
const total = valor + taxaG

console.log(`Taxa do Garçom R$: ${taxaG}`)
console.log(`Total a pagar R$: ${total}`)
