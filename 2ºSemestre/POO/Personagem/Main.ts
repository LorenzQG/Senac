
import Prompt from "prompt-sync";
import { Personagem } from "./Personagem";

const teclado = Prompt();
let heroi: Personagem = new Personagem(teclado("Digite o nome do seu personagem: "), teclado("Digite a raça do seu personagem: "), teclado("Digite a classe do seu personagem: "));
console.log('Bem vindo ao jogo de RPG, ' + heroi.name);



        
if(heroi.defense == 100 && heroi.attack == 100){
    while (true) {
        console.log("*".repeat(25));
        console.log("| 1 - Treinar ataque    |");
        console.log("| 2 - Treinar defesa    |");
        console.log("| 3 - Descansar         |");
        console.log("| 4 - Entrar em combate |");
        console.log("| 5 - Ver Status        |");
        console.log("| 6 - Transcender       |");
        console.log("| 0 - Sair              |");
        console.log("*".repeat(25));
    
        let opcao: number = +teclado("Escolha uma ação: ");
    
        if (opcao == 1) {
            heroi.treinaAtaque();
        }
        if (opcao == 2) {
            heroi.treinaDefesa();
        }
        if (opcao == 3) {
            const tempo = +teclado("Digite o tempo de descanso em minutos: ")
            heroi.descansar(tempo);
        }
        if (opcao == 4) {
            heroi.entrarEmCombate();
        }
        if (opcao == 5) {
            console.table(heroi);
        }
        if (opcao == 6){
            heroi.transcender();
        }
        if (opcao == 0) {
            break;
        }
    }
}else {
    while (true) {
        console.log("*".repeat(25));
        console.log("| 1 - Treinar ataque |");
        console.log("| 2 - Treinar defesa |");
        console.log("| 3 - Descansar |");
        console.log("| 4 - Entrar em combate |");
        console.log("| 5 - Ver Status");
        console.log("| 0 - Sair |");
        console.log("*".repeat(25));
    
        let opcao: number = +teclado("Escolha uma ação: ");
    
        if (opcao == 1) {
            heroi.treinaAtaque();
        }
        if (opcao == 2) {
            heroi.treinaDefesa();
        }
        if (opcao == 3) {
            const tempo = +teclado("Digite o tempo de brincadeira em minutos: ")
            heroi.descansar(tempo);
        }
        if (opcao == 4) {
            heroi.entrarEmCombate();
        }
        if (opcao == 5) {
            console.table(heroi);
            
        }
        if (opcao == 0) {
            break;
        }
    }

}


