const prompt = require("prompt-sync")()

const destino = prompt("Insira o destino: ")
const dias = Number(prompt("Insira quantos dias de viagem: "))
const horas = Number(prompt("Insira quantas horas de viagem: "))

const duracao = (dias * 24) + horas

console.log(`A viagem para ${destino} dura ${duracao} Horas`)