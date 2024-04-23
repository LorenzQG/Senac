import Prompt from "prompt-sync";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function addQuadra(nome?:string, tipo?:string){
        await prisma.quadra.create({
        data: {
            name: nome,
            tipo: tipo
        }
    })
}


export class Quadras {
    nome: string
    tipo: string
    isLocate: Boolean



    constructor() {
        this.nome = "";
        this.tipo = "";
        this.isLocate = false;
    }

    async registraQuadra() {
        
        const teclado = Prompt();
        this.nome = teclado("Digite o nome da quadra: ")
        this.tipo = teclado("Digite o tipo da quadra: ")
        
        addQuadra(this.nome, this.tipo)
        
    }
    async listaQuadra() {


       
    }
    
}

