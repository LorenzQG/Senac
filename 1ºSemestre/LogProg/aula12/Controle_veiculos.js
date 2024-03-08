const prompt = require("prompt-sync")()
const fs = require("fs")   //File System(Sistema de arquivos do node)

const modelos = []
const marcas = []
const precos = []

function incluir(){
    console.log("\nInclusão de Veiculos")
    console.log("-".repeat(50))
    
    const x = prompt("Modelo do Veiculo: ")
    const y = prompt("Marca............: ")
    const z = prompt("Preço............: ")

    modelos.push(x)
    marcas.push(y)
    precos.push(z)
    console.log("Ok! Veiculo cadastrado com sucesso")

}

function listar(){
    console.log("\nListagem dos Veiculos Cadastrados")
    console.log("-".repeat(50))
    
    console.log("\nModelo...............: Marca............: Preço R$: ")
    for(let i = 0; i < modelos.length; i++){
        console.log(`${modelos[i].padEnd(20)} ${marcas[i].padEnd(20)} ${precos[i]}`)

    }
}

function pesq_marca(){
    console.log("\n Pesquisa por Marca")
    console.log("-".repeat(50))
}

function pesq_preco(){
    console.log("\n Pesquisar por Preço")
    console.log("-".repeat(50))
}

function gravaDados(){
    const carros = []
    for (let i = 0; i < modelos.length; i++){
        carros.push(modelos[i] + ";" + marcas[i] + ";" + precos[i])
    }
    // Salva dados em um arquivo de texto
    fs.writeFileSync("dados/carros.txt", carros.join("\n"))

    console.log("Dados salvos com sucesso...")
}

function carregaDados(){
    //Verifica se o arquivo existe
    console.log("Verificando se há um arquivo")
    console.log("-".repeat(50))
    if (fs.existsSync("dados/carros.txt")){
        console.log("Carregando Arquivo...")
        // read (le) os dados do arquivo
        // e ja separa (split) pela ocorrencia do \n
        const carros = fs.readFileSync("dados/carros.txt", "utf8").split("\n")
        // percorre todas linhas do vetor
        for(let i = 0; i < carros.length; i++){
            // separa pela ocorrencia do ";"
            const partes = carros[i].split(";")
            // adiciona nos vetores
            modelos.push(partes[0])
            marcas.push(partes[1])
            precos.push(Number(partes[2]))
        }

    }else{
        console.log("Nenhum arquivo encontrado")
    }
}

carregaDados()

do {
    console.log("\nRevenda Avenida - Controle de Veiculos")
    console.log("=".repeat(50))
    console.log("1. Incluir Veiculos")
    console.log("2. Listar Veiculos")
    console.log("3. Pesquisar por marca")
    console.log("4. Pesquisa por intervalo de preços")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {
        incluir()
      
    }else if(opcao == 2){
        listar()
    
    }else if(opcao == 3){
        pesq_marca()
    
    }else if(opcao == 4){
        pesq_preco()
            
    } else if (opcao == 5) {
        break
    }


} while (true)

gravaDados()

