const prompt = require("prompt-sync")()

const distancia = Number(prompt("Insira a distancia percorrida: "))

const km = distacia / 1000
const metros = distancia % 1000

console.log(`A distancia percorrida é de ${distancia}km e ${metros}m`)