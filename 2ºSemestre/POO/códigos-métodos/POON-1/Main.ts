import { Personagem } from "./Personagem";
import Prompt from "prompt-sync";

const teclado = Prompt();

let heroi: Personagem = new Personagem(teclado("Digite o nome do seu personagem: "));

console.log(`Bem-vindo ao jogo de RPG, ${heroi.nome}!`);
// console.log("Digite a raça do seu personagem: ");
heroi.raca = teclado("Digite a raça do seu personagem: ");
// console.log("Digite a classe do seu personagem: ");
heroi.classe = teclado("Digite a classe do seu personagem: ");

while(true){

console.log("+------------------------+");
console.log("| 1 - Treinar ataque     |");
console.log("| 2 - Treinar defesa     |");
console.log("| 3 - Descansar          |");
console.log("| 4 - Entrar em combate  |");
console.log("| 0 - Sair               |");
console.log("+------------------------+");

let opcao: number = +teclado("Escolha uma ação: ");
}

