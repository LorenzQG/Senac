const prompt = require("prompt-sync")()


const nivel = Number(prompt("Nivel maximo em quantas fases? "))
const novato = prompt("Você é novato?(S/N) ")
const item = prompt ("Encontrou um item raro?(S/N) ")

if ((nivel >= 3) || (novato.toUpperCase() == "S" && item.toUpperCase() == "S")){
    console.log("Power-up ativado, Mostre o seu poder!!")

}else{
    console.log("Ops, você vai precisar de mais habilidade. Continue treinando!")
}