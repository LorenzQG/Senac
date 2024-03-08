const prompt = require("prompt-sync")()

const nome = prompt("Informe o nome: ")
const sexo = prompt("Informe o sexo: ")
const altura = Number(prompt("Informe a altura: "))

let pesoIdeal

console.log(`Nome: ${nome}`)
console.log(`Sexo (M/F): ${sexo}`)
console.log(`Altura: ${altura}`)

    if(sexo.toUpperCase() == "M"){
        pesoIdeal = (72.7 * altura)-58
        console.log(`Peso Ideal: ${pesoIdeal}`)
    }else if(sexo.toUpperCase() == "F"){
        pesoIdeal = (62.1 * altura) - 44.7
        console.log(`Peso Ideal: ${pesoIdeal}`)
    }

    
