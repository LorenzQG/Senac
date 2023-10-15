const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))

process.stdout.write(`Numeros seguintes ao ${num}: `)
for(i = i; i <= 10; i++){
      if(i < 10){
        process.stdout.write((num - i) + ", ")
      }else{
        console.log((num - i) + ".") 
      }
}