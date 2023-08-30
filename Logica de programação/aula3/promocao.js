const prompt = require("prompt-sync")()

const valorV = Number(prompt("Valor do veiculo: "))

const entrada = valorV * 0.50
const parcelas = entrada / 12

console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`Mais 12x de R$: ${parcelas.toFixed(2)}`)
