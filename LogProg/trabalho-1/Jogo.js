const prompt = require("prompt-sync")()

const time1 = prompt("Nome da 1ª equipe: ")
const gols1 = Number(prompt("Numero de gols marcados pela 1ª equipe: "))

const time2 = prompt("Nome da 2ª equipe: ")
const gols2 = Number(prompt("Numero de gols marcados pela 2ª equipe: "))

totalGols = gols1 + gols2

if(gols1 > gols2){
    console.log(`O vencedor foi o ${time1}`)
}else if(gols2 > gols1){
    console.log(`O vencedor foi o ${time2}`)
}else{
    console.log(`Houve um empate`)
}

if(totalGols > 0){
    console.log(`A partida teve ${totalGols} gols`)
}