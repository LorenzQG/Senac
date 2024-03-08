const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um numero: "))

const verificar = numero % 2

if(verificar == 0){
    console.log(`${numero} é Par`)
}else{
    console.log(`${numero} é Impar`)
}