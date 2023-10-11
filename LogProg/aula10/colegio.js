const prompt = require("prompt-sync")()
let aprovados = 0
let reprovados = 0

let continua
do{
const nome = prompt("Nome do Aluno: ")

const nota1 = Number(prompt("1ª Nota: "))
const nota2 = Number(prompt("2ª Nota: "))

const media = (nota1 + nota2) / 2

console.log(`media do aluno ${nome}: ${media.toFixed(1)}`)

if(media >= 7){
    aprovados++;
}else{
    reprovados++;
}

continua = prompt("Você deseja continuar (S/N): ").toUpperCase()
} while(continua == "S")

console.log(`Aprovados: ${aprovados}`)
console.log(`Reprovados: ${reprovados}`)
