const prompt = require("prompt-sync")()

const num1 = Number(prompt("Digite o primeiro numero: "))
const num2 = Number(prompt("Digite o segundo numero: "))

console.log(`Entre ${num1} e ${num2}`)
for(i = num1; i <= num2; i++){
    console.log(`${i}`)
}
