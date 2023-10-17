const prompt = require("prompt-sync")()

const num = Number(prompt("Insira o numero: "))

process.stdout.write(`Numeros pares entre ${num} e 1: `)
for(let i = num; i > 1; i--){
    let verifica = i % 2
    if(verifica == 0){
    process.stdout.write(i + " ")
    }
}