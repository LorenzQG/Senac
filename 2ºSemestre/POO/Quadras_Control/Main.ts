
import prisma from "./Cliente";
import { Quadras } from "./Quadras";
import Prompt from "prompt-sync"
import { Usuarios } from "./Usuarios";
import { Reserva } from "./Reserva";

const teclado = Prompt();
let quadra: Quadras = new Quadras()
let clientes: Usuarios = new Usuarios()
let reservas: Reserva = new Reserva()

async function main() {
    while (true) {
        console.log("*".repeat(25));
        console.log("| 1 - Registrar Quadra    |");
        console.log("| 2 - Listar Quadras      |");
        console.log("| 3 - Registrar Clientes  |");
        console.log("| 4 - Listar Clientes     |");
        console.log("| 5 - Registrar Locação   |");
        console.log("| 6 - Listar Locações     |");
        console.log("| 7 - Desfazer Reserva    |");
        console.log("| 0 - Sair                |");
        console.log("*".repeat(25));

        let opcao: number = +teclado("Escolha uma ação: ");

        if (opcao == 1) {
            await quadra.registraQuadra(teclado("Nome da Quadra: "), teclado("Tipo da Quadra: "));
        }
        if (opcao == 2) {
            let quadras = await quadra.listaQuadra();
            console.table(quadras);
        }
        if (opcao == 3) {
            await clientes.registraUsuario();
        }
        if (opcao == 4) {
            let usuarios = await clientes.listaUsuarios();
            console.table(usuarios);
        }
        if (opcao == 5) {
            await reservas.reservaQuadra();
        }
        if (opcao == 6) {
            let saida = await reservas.listaReservas();
            console.table(saida)
        }
        if (opcao == 7) {
            await reservas.desfazerReserva();
        }
        if (opcao == 0) {
            break;
        }
    }
}
main().then(() => {
    prisma.$disconnect()
})
