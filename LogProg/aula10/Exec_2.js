const prompt = require("prompt-sync")()

const simb1 = prompt("insira um simbolo: ")
const simb2 = prompt("insira outro simbolo:")

const num = Number(prompt("Insira o numero de vezes: "))


for(i = 1; i <= num; i++){
    const verifica = i % 2
    if(verifica == 0){
    process.stdout.write(simb1)
    }else{
    process.stdout.write(simb2)
    }

}