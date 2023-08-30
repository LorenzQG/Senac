const prompt = require("prompt-sync")()

// Entrada de Dados
const nota1 = Number(prompt("1ª nota: "))
const nota2 = Number(prompt("2ª nota: "))

// Processamento
const media = (nota1 + nota2)/2

// Saída
console.log(`A media é: ${media}`)