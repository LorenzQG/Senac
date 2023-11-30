
const prompt = require("prompt-sync")()

const nome = prompt("Insira o nome: ")
const nasc = parseInt(prompt("Insira a sua data de nascimento: "))
const anoTrab = parseInt(prompt("Insira o ano que começou a trabalhar: "))

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

const idade = anoAtual - nasc

const tempServ = anoAtual - anoTrab

console.log(`Idade: ${idade}`)
console.log(`Tempo de Serviço: ${tempServ}`)

if(idade >= 60 || tempServ >= 25 || (idade >= 55 && tempServ >= 20)){
    console.log(`${nome}, você pode requerer aposentadoria`)
    
}else{
    console.log(`${nome}, você não pode requerer aposentadoria`)
}