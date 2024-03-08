const prompt = require("prompt-sync")()

const name = prompt("Nome da criança: ")
const peso = Number(prompt("Peso: "))

const variavel = Math.floor(peso / 1)

const gotas = variavel * 2

if (peso > 30){
    console.log(`A dose não pode ultrapassar 30 gotas`)
}else{
    console.log(`${name} deve tomar ${gotas} gotas`)
}