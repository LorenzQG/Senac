const prompt = require("prompt-sync")()

const quantComp = Number(prompt("Informe a quantidade de compras: "))
const cliente = prompt("É um novo cliente?(S/N) ")
const cupom = prompt("Possui cupom?(S/N) ")

if(quantComp >= 5 || (cliente.toUpperCase() == "S" && cupom.toUpperCase() == "S")){
    console.log("Desconto garantido. Vem que tem!")

}else{
   console.log("Chora, trouxa")
}
