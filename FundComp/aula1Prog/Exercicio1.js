const prompt = require("prompt-sync")()

const num1 = parseFloat(prompt("Insira o primeiro numero: "))
const num2 = parseFloat(prompt("Insira o segundo numero: "))
const num3 = parseFloat(prompt("Insira o terceiro numero: "))

if(num1 > num2 && num1 > num3){
    console.log("Maior dentre os 3: " + num1)
}else if(num2 > num1 && num2 > num3){
    console.log("Maior dentre os 3: " + num2)
}else if(num3 > num1 && num3 > num2){
    console.log("Maior dentre os 3: " + num3)
}else {
    console.log("Todos tem o mesmo valor!!")
}

