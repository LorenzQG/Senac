function bomdia(){
    console.log("Bom dia!")
    console.log("-".repeat(30))
}

bomdia()

function aviso(texto){
    console.log(texto)
    console.log("=".repeat(30))
}

aviso("Aula de programação web")
aviso("Dia 19/03")

function analisa_idade(nome, idade){
    if (idade >=18) {
        console.log(`${nome} voce é maior de idade`)
    }else{
        console.log(`${nome} você é maior de idade`)
    }
}

analisa_idade("Ana", 25)
analisa_idade("Pedro", 17)