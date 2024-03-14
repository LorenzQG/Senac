
import Prompt from "prompt-sync";
import { Personagem } from "./Personagem";

const teclado = Prompt();


let heroi: Personagem = new Personagem(teclado("Digite o nome do seu personagem: "), teclado("Digite a raça do seu personagem: "), teclado("Digite a classe do seu personagem: "));
console.log('Bem vindo ao jogo de RPG, ' + heroi.name);

while(true){
console.log("*".repeat(50));
console.log("| 1 - Treinar ataque |");
console.log("| 2 - Treinar defesa |");
console.log("| 3 - Descansar |");
console.log("| 4 - Entrar em combate |");
console.log("| 0 - Sair |");
console.log("*".repeat(5));

let opcao: number = +teclado("Escolha uma ação")
}
