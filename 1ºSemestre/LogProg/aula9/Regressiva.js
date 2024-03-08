const prompt = require("prompt-sync")()

const num = Number(prompt("Digite o numero: "))

process.stdout.write("contagem regressiva....: ")
for(i = num; i >=1; i = i - 1){
process.stdout.write(i + " ")
}

console.log("Fogo!!")