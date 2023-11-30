const prompt = require("prompt-sync")()

const idade = parseInt(prompt("Idade: "))

if (idade >= 5 && idade <= 7){
    console.log(`Idade: ${idade} - Infantil 1`)
}
else if (idade >= 8 && idade <= 10){
    console.log(`Idade: ${idade} - Infantil 2`)
}
else if (idade >= 11 && idade <= 13){
    console.log(`Idade: ${idade} - Juvenil 1`)
}
else if (idade >= 14 && idade <= 17){
    console.log(`Idade: ${idade} - Juvenil 2`)
}
else if (idade >= 18){
    console.log(`Idade: ${idade} - Adulto`)
}