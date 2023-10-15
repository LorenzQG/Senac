 const prompt = require("prompt-sync")()

 let numDig = 0
 let pares = 0
 let impares = 0
 let soma = 0
 let num
 do{
    num = Number(prompt("Numero: "))

    if(num != 0){
    numDig++
    soma += num
    let verifica = num % 2
    if(verifica == 0){
       pares++
    }else{
       impares++
    }
    
    }

 }while(num != 0)
 console.log("-".repeat(30))
 console.log(`Numeros digitados: ${numDig}`)
 console.log(`Soma dos numeros: ${soma}`)
 console.log(`Quant. Pares: ${pares}`)
 console.log(`Quant. Impares: ${impares}`)