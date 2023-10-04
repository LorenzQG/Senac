const prompt = require("prompt-sync")()

const num = Number(prompt("Digite o numero: "))

for(let i = 1; i <= num; i++){
    let verifica = i % 5;
    if(verifica == 0){
        console.log(`${i}`)
    }
    
}