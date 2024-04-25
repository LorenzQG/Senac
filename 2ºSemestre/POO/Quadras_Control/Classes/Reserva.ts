
import prisma from "./Cliente";
export class Reserva {
    idQuadra: number
    idUser: string

    constructor() {
        this.idQuadra = 0
        this.idUser = ""
    }

    async reservaQuadra(idQuadra: number, idUser: string) {
        this.idQuadra = idQuadra
        this.idUser = idUser

        if (await prisma.quadra.findFirst({
            where: {
                id: this.idQuadra,
                isLocate: "Reservado"
            }
        })) 
        {
            console.log("Quadra já reservada")
        } else {
            await prisma.reserva.create({
                data: {
                    client_id: this.idUser,
                    quadra_id: this.idQuadra
                }
            })

            await prisma.quadra.update({
                where: {
                    id: this.idQuadra
                },
                data: {
                    isLocate: "Reservado"
                }
            })
        }
    }
    async listaReservas() {
        const reservas = await prisma.$queryRaw`SELECT client.name as Cliente, client.cpf as CPF, quadra.name as Quadra, quadra.tipo as Tipo, reserva.dataHora as Horario FROM reserva INNER JOIN client ON reserva.client_id = client.cpf INNER JOIN quadra ON reserva.quadra_id = quadra.id`
        return reservas
    }
    async desfazerReserva(idQuadra: number) {

        await prisma.reserva.delete({
            where: {
                quadra_id: idQuadra
            }
        })
        await prisma.quadra.update({
            where: {
                id: idQuadra
            },
            data: {
                isLocate: "Disponivel"
            }
        })
    }
}
export default Reserva