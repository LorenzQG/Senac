const prompt = require("prompt-sync")()

const num = Number(prompt("Digite o numero: "))

if(num  >= 5){
for(let i = 1; i <= num; i++){
    let verifica = i % 5;
    if(verifica == 0){
        console.log(`${i}`)
    }
    
}
}else{
    console.log("Numero tem que ser 5 ou maior")
}