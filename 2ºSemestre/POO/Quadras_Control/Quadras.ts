import Prompt from "prompt-sync";
import prisma from "./Cliente";

export class Quadras {
    nome: string
    tipo: string


    constructor() {
        this.nome = "";
        this.tipo = "";
    }

    async registraQuadra(name:string, type: string) {
        this.nome = name
        this.tipo = type

        await prisma.quadra.create({
            data: {
                name: this.nome,
                tipo: this.tipo,
                isLocate: "Disponivel"
            }
        })
    }
    async listaQuadra() {
        const quadras = await prisma.$queryRaw`SELECT id as 'Codigo da Quadra', name as Nome, tipo as Tipo, isLocate as Disponibilidade FROM quadra`
        return quadras
    }
}

export default Quadras

