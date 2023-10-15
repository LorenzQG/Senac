const prompt = require("prompt-sync")()

const name = prompt("Nome: ")
const num = Number(prompt("Número: "))

for(i = 1; i < num; i++){
    process.stdout.write("*")
}
process.stdout.write(" " + name + " ")

for(i = 1; i < num; i++){
    process.stdout.write("*")
}
console.log(" ")
console.log("-".repeat(30))

process.stdout.write("*".repeat(num) + " " + name + " " + "*".repeat(num))