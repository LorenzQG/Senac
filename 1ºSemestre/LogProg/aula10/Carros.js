const prompt = require("prompt-sync")()
let carroS = 0
let continua
do{
const model = prompt("Modelo do carro: ")
const preco = Number(prompt("Preço R$: "))
const desconto = preco - (preco * 0.10)

if(preco > 30000){
    carroS++
   }

console.log(`Com desconto R$: ${desconto}`)

continua = prompt("Deseja continuar (S/N)? ").toUpperCase()
}while(continua == "S")

if(carroS == 0){
    console.log("Só carros baratinhos... :)")
}else{
    console.log(`Carros com preço superior a 30.000: ${carroS}`)
}
