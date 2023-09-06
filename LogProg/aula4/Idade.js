const prompt = require("prompt-sync")()

const name = prompt("Qual seu nome? ")
const nasc = Number(prompt("Qual seu ano de nascimento? "))

const data = new Date()
const ano = data.getFullYear();

const anoInt = parseInt(ano)

const idade = anoInt - nasc


if (idade <18){
    console.log(`Idade: ${idade}`)
    console.log(`${name}, Você é menor de idade`)
}else{
    console.log(`Idade: ${idade}`)
    console.log(`${name}, Você é maior de idade`)
}