const prompt = require("prompt-sync")()

const num = Number(prompt("Digite o numero: "))

console.log("contagem regressiva:")
for(i = num; i >=1; i = i - 1){
    console.log(`${i}`)
}

console.log("Fogo!!")