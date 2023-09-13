const prompt = require("prompt-sync")()

const horaInicial = Number(prompt("Horario de inicio do jogo: ")) 
const horaFinal = Number(prompt("Horario de termino do jogo: "))

let horaTotal 

if (horaInicial > horaFinal){
    horaTotal = ((horaInicial * 24) * -1) + horaFinal
}else{
    horaTotal = horaFinal - horaInicial
}
if(horaTotal > 24){
    console.log(`Erro`)
}else{
  console.log(`Duração de ${horaTotal}hrs`)
}