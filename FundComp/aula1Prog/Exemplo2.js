const prompt = require("prompt-sync")()

const num1 = parseInt(prompt("Insira o primeiro numero: "))
const num2 = parseInt(prompt("Insira o segundo numero: "))
const num3 = parseInt(prompt("Insira o terceiro numero: "))

let soma

if (num1 > num2 && num2 > num3) {
    soma = num1 + num2

} else if (num1 < num2 && num1 < num3) {
    soma = num2 + num3

} else {
    soma = num1 + num3
}

console.log(`Soma dos 2 maiores é: ${soma}`);