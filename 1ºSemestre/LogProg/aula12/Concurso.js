const prompt = require("prompt-sync")()

const nomes = []
const pontos = []
const verifica = []

console.log("Insira o nome e a pontuação ou `fim` para sair")
do{

    let z
    const x = prompt("Nome: ")

    if(x.toUpperCase() == "FIM"){
        break
    }

    const y = Number(prompt("Pontuação: "))

    if(y < 30){
        z = "Reprovado(a)"
    }else{
        z = "Aprovado(a)"
    }

    nomes.push(x)
    pontos.push(y)
    verifica.push(z)

}while(true)

console.log()
console.log("Resultado do concurso")
console.log("-".repeat(50))

for(let i = 0; i < nomes.length; i++){

    console.log(`${nomes[i]} - ${pontos[i]} acertos - ${verifica[i]}`)

}