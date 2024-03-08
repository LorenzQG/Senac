const prompt = require("prompt-sync")()

const produtos = []
const precos = []

console.log("Informe o nome do produto ou ´fim´ para sair")

do{
    const x = prompt("Produto: ")
    if(x.toUpperCase()== "FIM"){
        break
    }
    const y = Number(prompt("Preço R$: "))

//e, após, adiciona os vetores

produtos.push(x)
precos.push(y)

}while(true)

//lista o conteudo dos vetores
console.log()
console.log("-".repeat(50))

let total = 0

for(let i = 0; i < produtos.length; i++) {
    console.log(`${produtos[i].padEnd(20)} - R$: ${precos[i].toFixed(2).padStart(6)}`)
    total = total + precos[i]
}

console.log("-".repeat(50))
console.log(`Total das compras... R$: ${total.toFixed(2).padStart(6)}`)