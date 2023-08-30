const prompt = require("prompt-sync")()

const name = prompt("Qual seu nome? ")
const nasc = Number(prompt("Qual seu ano de nascimento? "))


const idade = 2023 - nasc

if (idade <18){
    console.log(`Idade: ${idade}`)
    console.log(`${name}, Você é menor de idade`)
}else{
    console.log(`Idade: ${idade}`)
    console.log(`${name}, Você é maior de idade`)
}