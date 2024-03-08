const prompt = require("prompt-sync")()

const nota1 = parseFloat(prompt("1ª nota: "))
const nota2 = parseFloat(prompt("2ª nota: "))
const nota3 = parseFloat(prompt("3ª nota: "))
const nota4 = parseFloat(prompt("4ª nota: "))

const media = (nota1 + (nota2 * 2) + (nota3 * 3) + nota4)

if(media == 9 && media <= 10){
    conceito = "A"
    resultado = "Aprovado"

}
else if(media == 8 && media < 9){
    conceito = "B"
    resultado = "Aprovado"
}
else if(media == 6 && media < 7){
    conceito = "C"
    resultado = "Aprovado"
}
else if(media == 4 && media < 5){
    conceito = "D"
    resultado = "Aprovado"
}
else if(media < 4){
    conceito = "E"
    resultado = "Reprovado"
}

console.log(`Conceito: ${conceito}, ${resultado}`)