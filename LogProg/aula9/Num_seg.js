const prompt = require("prompt-sync")()

const num = Number(prompt("Insira o numero: "))

console.log(`Numeros seguintes ao ${num}`)
console.log("-".repeat(30))
for(i = 1; i <= 10; i++){
console.log(`${num+i}`)
}