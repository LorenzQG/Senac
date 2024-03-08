const prompt = require("prompt-sync")()

const numero = Number(prompt("Numero: "))
let contador = 0

for(let i = 1; i <= numero; i++){
    const verifica = numero % i
       
    if(verifica == 0){
      contador++    
    }
}
    if(contador == 2){
        console.log(`${numero} é primo`)
      }else{
        console.log(`${numero} Não é primo`)
      }
    
