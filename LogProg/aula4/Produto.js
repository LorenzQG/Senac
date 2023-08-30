const prompt = require("prompt-sync")()

const name = prompt("Nome do produto: ")
const preco = Number(prompt("Preço do produto: "))

console.log(`Produto: ${name}`)
console.log(`Preço: ${preco}`)

if(preco < 100){
    console.log("Somente à vista")
}else{
    const parcela = preco / 3
    console.log(`Pode pagar em 3x de ${parcela.toFixed(2)}`)
}