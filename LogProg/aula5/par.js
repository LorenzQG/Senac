const prompt = require("prompt-sync")()

const numero = Number(prompt("Insira o numero: "))
const verifica = numero % 2
let parS
if (verifica > 0){
     parS = numero + 1
}else if(verifica == 0){
    parS = numero + 2
}

console.log(`Numero: ${numero}`)
console.log(`Par seguinte: ${parS}`)