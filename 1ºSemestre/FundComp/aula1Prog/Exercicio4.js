const prompt = require ("prompt-sync")()

const nota1 = parseFloat(prompt("Nota 1: "))
const nota2 = parseFloat(prompt("Nota 2: "))
const nota3 = parseFloat(prompt("Nota 3: "))

const media = ((4 * nota1) + (3 * nota2) + (3 * nota3)) / (4 + 3 + 3)
let resultado


if(media >= 7){
    resultado = "Aprovado"
}else {
    resultado = "Reprovado"
}

console.log(resultado)