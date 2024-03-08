const prompt = require("prompt-sync")()

const nome = prompt("Nome do jogador: ")
const numG = Number(prompt("Quantidade de gols: "))

if(numG == 0){
    console.log(`${nome} não fez nenhum gol`)

}else if(numG == 1){
    console.log(`${nome} fez um gol`)
}else if(numG > 1){
    console.log(`${nome} fez ${numG} gols, parabéns`)
}