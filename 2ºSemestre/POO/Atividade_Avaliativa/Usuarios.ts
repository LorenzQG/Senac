import Prompt from "prompt-sync";
import prisma from "./Cliente";
export class Usuarios {
    nome: string
    cpf: string
    tel: number
    constructor() {
        this.nome = "";
        this.cpf = "";
        this.tel = 0;
    }
    async registraUsuario() {
        const teclado = Prompt();
        this.nome = teclado("Digite o nome do usuário: ");
        this.cpf = teclado("Digite o CPF do usuário: ");
        this.tel = +teclado("Digite o telefone do usuário: ");
        await prisma.client.create({
            data: {
                name: this.nome,
                cpf: this.cpf,
                tel: this.tel
            }
        });
    }
    async listaUsuarios() {
        const usuarios = await prisma.$queryRaw `SELECT name as Nome, cpf as CPF, tel as Telefone FROM client`;
        return usuarios
    }

}
export default Usuarios
