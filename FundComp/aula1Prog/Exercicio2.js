const prompt = require("prompt-sync")()

const nome = prompt("Insira o nome: ")
const nasc = parseInt(prompt("Insira a sua data de nascimento: "))

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()

const idade = anoAtual - nasc

console.log(`Idade: ${idade}`)
if(idade >= 18){
    console.log(nome + ", Você é maior de idade")
}else {
    console.log(nome + ", Você é menor de idade")
}