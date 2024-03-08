const prompt = require("prompt-sync")()

const horaB = Number(prompt("Digite a hora: "))

let horaF

console.log(`Hora no Brasil: ${horaB}`)


if(horaB < 19){

    horaF = horaB + 5
    console.log(`Hora na França: ${horaF}`)

}else{
    horaF = (horaB + 5) - 24
    console.log(`Hora na França: ${horaF}`)
}
