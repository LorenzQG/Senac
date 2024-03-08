const prompt = require("prompt-sync")()

const saque = Number(prompt("Valor do saque: "))

const verifica = saque % 10

console.log(`Valor do Saque R$: ${saque}`)

if (verifica > 0){
     console.log(`Não é possivel pagar ${saque} com notas de R$ 10`)
   
}else if(verifica == 0){

    const quantidade = saque / 10
    console.log(`pago em ${quantidade} notas de R$ 10`)

}