import { Quadras } from "./Quadras";
import Prompt from "prompt-sync"

const teclado = Prompt();
let quadra: Quadras = new Quadras()

while (true) {
    console.log("*".repeat(25));
    console.log("| 1 - Registrar Quadra    |");
    console.log("| 2 - Listar Quadras      |");
    console.log("| 0 - Sair                |");
    console.log("*".repeat(25));

    let opcao: number = +teclado("Escolha uma ação: ");

    if (opcao == 1) {
        quadra.registraQuadra();
    }
    if (opcao == 2) {
        quadra.listaQuadra();
    }
    if (opcao == 0) {
        break;
    }
}