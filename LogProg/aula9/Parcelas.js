const prompt = require("prompt-sync")()

const prod = prompt("Nome do produto: ")
const preco = Number(prompt("Insira o preço: "))

console.log("Opções de pagamento")
console.log("-".repeat(30))

for(let i = 1; i <= 10; i = i + 1){
   console.log(`${i} x ${(preco/i).toFixed(2)}`)
    
}