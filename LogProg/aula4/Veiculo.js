const prompt = require("prompt-sync")()

const modelo = prompt("Modelo do veiculo: ")
const marca = prompt("Marca do veiculo: ")
const preco = Number(prompt("Preço do produto: "))

console.log(`Modelo: ${modelo}`)
console.log(`Marca: ${marca}`)
console.log(`Preço: ${preco}`)

let desconto

//toUpperCase converte a string para maiuscula 
if(marca.toUpperCase() == "FIAT") {

    desconto = preco * 0.10
    const precVist = preco - desconto
    console.log(`Desconto ${desconto}`)
    console.log(`Preço à vista: ${precVist}`)


}else{

    desconto = preco * 0.20
    const precVist = preco - desconto
    console.log(`Desconto ${desconto}`)
    console.log(`Preço à vista: ${precVist}`)

}