const prompt = require("prompt-sync")()

const numero = Number(prompt("Informe o numero: "))

const raizQ = Math.sqrt(numero)

if(Number.isInteger(raizQ)){

    console.log(`Número: ${numero}`)
    console.log(`Raiz: ${raizQ}`)
}else{
    console.log(`Número: ${numero}`)
    console.log(`${numero} Não possui raiz exata`)
}
