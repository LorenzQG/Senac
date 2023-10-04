const prompt = require("prompt-sync")()

const name = prompt("Nome do aluno: ")
const alunos = Number(prompt("Numeros de alunos na turma: "))
const mensagens = Number(prompt("Numero de mensagens: "))

const verifica = alunos / 2

if(mensagens < verifica){
    console.log(`${name}, Temos que melhorar sua popularidade`)
    
}else{
    console.log(`Parabéns ${name}! Você é bem popular na turma`)
}