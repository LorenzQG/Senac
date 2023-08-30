const prompt = require("prompt-sync")()

const numero = Number(prompt("Numero: "))
const vizinhoAnt = numero - 1
const vizinhoPost = numero + 1

console.log(`Vizinhos do ${numero}: ${vizinhoAnt} e ${vizinhoPost}`)
