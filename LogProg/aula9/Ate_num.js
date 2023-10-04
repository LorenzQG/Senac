const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))

console.log(`\nPares entre 1 e ${num}`)
console.log("-".repeat(30))

for (let i = 1; i <= num; i = i + 1){
    const verifica = i % 2
    if(verifica == 0){
        console.log(i)
    }
}