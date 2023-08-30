const prompt = require("prompt-sync")()

const nome = prompt("Nome do Aluno: ")
const nota1 = Number(prompt("1ª Nota: "))
const nota2 = Number(prompt("2ª Nota: "))

const media = (nota1 + nota2) / 2

console.log(`Media é ${media.toFixed(1)}`)

if(media < 4){
    console.log("Você foi reprovado")
}else if(media < 7){
    console.log("Você esta em exame")
}else{
    console.log("Você foi aprovado")
}