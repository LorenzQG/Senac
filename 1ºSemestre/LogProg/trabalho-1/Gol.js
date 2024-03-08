const prompt = require("prompt-sync")()

const name = prompt("Nome do jogador: ")

const gols = Number(prompt("Numero de gols: "))

const valor = gols * 3000

console.log(`${name}, você irá receber um extra de R$ ${valor}`)