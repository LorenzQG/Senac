const prompt = require ("prompt-sync")()

const num1 = parseInt(prompt("1º Numero: "))
const num2 = parseInt(prompt("2º Numero: "))

if((num1 % num2) == 0){
    console.log("São multiplos")
}else{
    console.log("Não são multiplos")
}