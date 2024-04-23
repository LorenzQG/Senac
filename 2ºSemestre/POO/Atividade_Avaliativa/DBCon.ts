import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function adicionarItens(nome:string, tipo:string){
    
    const allItens = await prisma.quadra.create({
        data: {
            name: nome,
            tipo: tipo
        }
    })
}
export = {addItem: adicionarItens}