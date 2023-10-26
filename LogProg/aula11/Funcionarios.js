const prompt = require("prompt-sync")()

const numFun = Number(prompt("Nº de funcionarios em 2023: "))

console.log("Previsão para os proximos 5 anos")
console.log("-".repeat(30))
let calcula = numFun
for(let i = 1; i <= 5; i++){

    calcula = calcula * 2 

    console.log("Em: " + (2023 + i) + " " + calcula + " Funcionarios")

}