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
    async registraUsuario(nome: string, cpf: string, tel: number) {
        this.nome = nome
        this.cpf = cpf
        this.tel = tel
        await prisma.client.create({
            data: {
                name: this.nome,
                cpf: this.cpf,
                tel: this.tel
            }
        });
    }
    async listaUsuarios() {
        const usuarios = await prisma.$queryRaw
            `SELECT name as Nome, cpf as CPF, tel as
          Telefone FROM client`;
        return usuarios
    }

}
export default Usuarios
