const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))
process.stdout.write(`Divisores do ${num}: `)
for(let i = 1; i <= 15; i++){
    const verifica = num % i
    if(i < 15){
    if(verifica == 0){
        process.stdout.write(" " + i + ",")
    }
}else{
    console.log(" " + i + ".")
}
}