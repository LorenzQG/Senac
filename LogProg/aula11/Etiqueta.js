const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const num = Number(prompt("Nº de etiquetas: "))

console.log("Etiquetas")

console.log("-".repeat(30))

for(let i = 1; i <= num; i++){
    if(i % 2 == 1){
        process.stdout.write(produto + "        ")
}else{
    console.log(produto)
}
}
console.log(" ")
console.log("-".repeat(30))
