const prompt = require("prompt-sync")()

const numero = Number(prompt("Numero: "))

for(let i = 1; i <= 15; i++){
    const verifica = num % i
    
    if(verifica == 0){
        process.stdout.write(" " + i + ",")
    }
    
}