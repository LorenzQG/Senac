const prompt = require("prompt-sync")();
const fs = require("fs");

const poke = [];
const tipos = [];
const numero = [];
const shiny = [];

function incluirPokemon() {
  console.log("\nCapturar Pokemon");
  console.log("-".repeat(50));

  const x = prompt("Nome do pokemon...: ");
  const y = prompt("Tipo do pokemon...: ");
  const z = prompt("Tipo secundario...: ");
  const w = Number(prompt("Numero na pokedex.: "));
  const v = prompt("Shiny?(S/N)........ ");

  

  for(i = 0; i < numero; i++){
   if(x == poke[i]){
    console.log("Pokemon ja registrado")
    break

   } 
    else if(w == numero[i]){
      console.log("Numero da pokedex ja registrado")
      break
    }else{

      poke.push(x);

      if (z == "") {
        tipos.push([y]);
      } else {
        tipos.push([y, z]);
      }
      numero.push(w);
      shiny.push(v);
    
      console.log("Pokemon capturado com sucesso!!");
    }
  }
 
}
function listarPokemon() {
  console.log("\nAcessar sua box");
  console.log("-".repeat(50));

  console.log(
    "\nPokemon.........: Tipo.............: Numero na pokedex.........: Shiny...........:"
  );
  for (let i = 0; i < poke.length; i++) {
    console.log(
      poke[i].padEnd(18) +
        tipos[i].padEnd(20) +
        numero[i] +
        shiny[i].padStart(28)
    );
  }
}
function pesqTipo() {
  console.log("\nPesquisar por tipo");
  console.log("-".repeat(50));

  const pesq = prompt("Tipo a ser pesquisado: ");

  console.log(
    "\nPokemon.........: Numero na pokedex.........: Shiny...........:"
  );
  for(let i = 0; i < poke.length; i++){
    if (tipos[i].toUpperCase() == pesq.toUpperCase()) {
      console.log(poke[i].padEnd(20) + numero[i] + shiny[i].padStart(28));
    }
}
  }



function pesqNum() {
  console.log("\nPesquisar em intervalo de numeros da pokedex");
  console.log("-".repeat(50));

  const min = Number(prompt("Numero minimo: "));
  const max = Number(prompt("Numero maximo: "));

  ("\nPokemon.........: Tipo.............: Numero na pokedex.........: Shiny...........:");

  let contador;
  for (let i = 0; i < poke.length; i++) {
    if (numero[i] >= min && numero[i] <= max) {
      console.log(
        poke[i].padEnd(18) +
          tipos[i].padEnd(20) +
          numero[i] +
          shiny[i].padStart(28)
      );
      contador = contador + 1;
    }
  }
  if (contador == 0) {
    console.log("* Obs.: Não há pokemons neste limite de numeros...");
  }
}
function excluirPokemon(){
  console.log("\nLargar Pokemon");
  console.log("-".repeat(50));

  console.log("\nPokemon.........: Tipo.............: Numero na pokedex.........: Shiny...........:");
  for (let i = 0; i < poke.length; i++) {
      console.log(`${i}. ` +
        poke[i].padEnd(18) +
          tipos[i].padEnd(20) +
          numero[i] +
          shiny[i].padStart(28)
      );
  }
  const largar = Number(prompt("Digite o numero do pokemon que deseja excluir: "))

  poke.splice(largar)
  tipos.splice(largar)
  numero.splice(largar)
  shiny.splice(largar)

}
function alterarDados(){
  console.log("\nAlterar Dados");
  console.log("-".repeat(50));

  console.log("\nPokemon.........: Tipo.............: Numero na pokedex.........: Shiny...........:");
  for (let i = 0; i < poke.length; i++) {
      console.log(`${i}. ` +
        poke[i].padEnd(18) +
          tipos[i].padEnd(20) +
          numero[i] +
          shiny[i].padStart(28)
      );
  }
  const alterar = Number(prompt("Digite o numero do pokemon que deseja alterar: "))

  poke[alterar] = prompt("Nome do pokemon: ")
  tipos[alterar] = prompt("Tipo do pokemon: ")
  numero[alterar] = prompt("Numero do pokemon: ")
  shiny[alterar] = prompt("É shiny? ")
  
}

function gravaDados() {
  const pokemons = [];
  for (let i = 0; i < poke.length; i++) {
    pokemons.push(poke[i] + ";" + tipos[i] + ";" + numero[i] + ";" + shiny[i]);
  }
  // Salva dados em um arquivo de texto
  fs.writeFileSync("dados/pokemons.txt", pokemons.join("\n"));

  console.log("Dados salvos com sucesso...");
}

function carregaDados() {
  //Verifica se o arquivo existe
  console.log("Verificando se há um arquivo");
  console.log("-".repeat(50));
  if (fs.existsSync("dados/pokemons.txt")) {
    console.log("Carregando Arquivo...");
    // read (le) os dados do arquivo
    // e ja separa (split) pela ocorrencia do \n
    const pokemons = fs.readFileSync("dados/pokemons.txt", "utf8").split("\n");
    // percorre todas linhas do vetor
    for (let i = 0; i < pokemons.length; i++) {
      // separa pela ocorrencia do ";"
      const partes = pokemons[i].split(";");
      // adiciona nos vetores
      poke.push(partes[0]);
      tipos.push(partes[1]);
      numero.push(Number(partes[2]));
      shiny.push(partes[3]);
    }
  } else {
    console.log("Nenhum arquivo encontrado");
  }
}

carregaDados();
do {
  console.log("\nPokedex - Agenda pokemon");
  console.log("=".repeat(50));
  console.log("1. Capturar Pokemons");
  console.log("2. Acessar Box");
  console.log("3. Pesquisar por tipo");
  console.log("4. Pesquisa por numeros na pokedex");
  console.log("5. Largar pokemon")
  console.log("6. Alterar Dados")
  console.log("7. Finalizar");
  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluirPokemon();
  } else if (opcao == 2) {
    listarPokemon();
  } else if (opcao == 3) {
    pesqTipo();
  } else if (opcao == 4) {
    pesqNum();
  } else if(opcao == 5){
    excluirPokemon();
  } else if(opcao == 6){
    alterarDados()
  } else if (opcao == 7) {
    break;
  }
} while (true);

gravaDados();
