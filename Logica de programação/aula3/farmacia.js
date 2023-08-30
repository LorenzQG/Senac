const prompt = require("prompt-sync")()

const produto = prompt("Nome do produto")
const valorP = Number(prompt("Valor do produto"))
const promocao = Math.floor(valorP) * 2
    console.log(`Sua compra ficou: ${promocao}`)


