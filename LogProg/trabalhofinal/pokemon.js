const prompt = require("prompt-sync")()

const poke = []
const tipos = []
const numero = []
const shiny = []

function incluirPokemon(){
    console.log("\nCapturar Pokemon")
    console.log("-".repeat(50))

    const x = prompt("Nome do pokemon...: ")
    const y = prompt("Tipo do pokemon...: ")
    const z = prompt("Tipo secundario...: ")
    const w = Number(prompt("Numero na pokedex.: "))
    const v = prompt("Shiny?(S/N)........ ")

    poke.push(x)
    if (z == ""){
        tipos.push([y])
    }else{
        tipos.push([y, z])
    }
    numero.push(w)
    shiny.push(v)

    console.log("Pokemon capturado com sucesso!!")

}
function listarPokemon(){
    console.log("\nAcessar sua box")
    console.log("-".repeat(50))

    console.log("\nPokemon.........: Tipo.............: Numero na pokedex.........: Shiny...........:")
    for(let i = 0; i < poke.length; i++){
        console.log(poke[i].padEnd(18) + tipos[i] + numero[i].padStart(9) + shiny[i].padStart(28))

    }
}
function pesqTipo() {
    console.log("\nPesquisar por tipo")
    console.log("-".repeat(50))

    const pesq = prompt("Tipo a ser pesquisado: ")

    console.log("\nPokemon.........: Numero na pokedex.........: Shiny...........:")
    for(let i = 0; i < poke.length; i++){

        if(tipos[i][i] == pesq){
            console.log(poke[i].padEnd(18) + numero[i] + shiny[i].padStart(28))
        }
    
    }
}


do{
    console.log("\nPokedex - Agenda pokemon")
    console.log("=".repeat(50))
    console.log("1. Capturar Pokemons")
    console.log("2. Acessar Box")
    console.log("3. Pesquisar por tipo")
    console.log("4. Pesquisa por numeros na pokedex")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if(opcao == 1){
        incluirPokemon()

    }else if(opcao == 2){
        listarPokemon()

    }else if(opcao == 3){
        pesqTipo()

    }else if (opcao == 5){
        break
    }


}while(true)