import { Cachorro } from "./Cachorro";
import Prompt from "prompt-sync";

const teclado = Prompt();

const pet: Cachorro = new Cachorro(teclado('Digite o nome do cachorro:'));
pet.porte = teclado('Digite o porte do cachorro:');
pet.raca = teclado('Digite a raça do cachorro:');


while (true) {
    console.log("+---------------------------+");
    console.log("| 1. Comer                  |");
    console.log("| 2. Brincar                |");
    console.log("| 3. Dormir                 |");
    console.log("| 4. Latir                  |");
    console.log("| 5. Mostrar informações    |");
    console.log("| 0. Sair                   |");
    console.log("+---------------------------+");
    let opcao: number = +teclado('Digite uma opção:');

    if (opcao == 0) {
        break;
    }
    switch (opcao) {
        case 1:
            pet.comer();
            break;
        case 2:
            const tempoBrincar: number = +teclado('Digite o tempo de brincadeira:');
            pet.brincar(tempoBrincar);
            break;
        case 3:
            const tempoDormir: number = +teclado('Digite o tempo de sono:');
            pet.dormir(tempoDormir);
            break;
        case 4:
            const numeroDeLatidos: number = +teclado('Digite o número de latidos:');
            const saida = pet.latir(numeroDeLatidos);
            console.log(saida);
            break;
        case 5:
            console.table(pet);
            break;

        default:
            break;
    }

}




