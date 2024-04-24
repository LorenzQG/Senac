import Prompt from "prompt-sync";
import prisma from "./Cliente";
export class Reserva {

    async reservaQuadra() {
        const teclado = Prompt()
        let idQuadra = +teclado("Digite o codigo da quadra que deseja reservar: ")
        let idUser = teclado("Digite o codigo do usuario que deseja reservar: ")

        await prisma.reserva.create({
            data: {
                client_id: idUser,
                quadra_id: idQuadra
            }
        })

        await prisma.quadra.update({
            where: {
                id: idQuadra
            },
            data: {
                isLocate: "Reservado"
            }
        })
    }
    async listaReservas() {
        const reservas = await prisma.$queryRaw`SELECT client.name as Cliente, client.cpf as CPF, quadra.name as Quadra, quadra.tipo as Tipo, reserva.dataHora as Horario FROM reserva INNER JOIN client ON reserva.client_id = client.cpf INNER JOIN quadra ON reserva.quadra_id = quadra.id`
        return reservas
    }
    async desfazerReserva() {
        const teclado = Prompt()
        let idReserva = +teclado("Digite o codigo da quadra que deseja desfazer a reserva: ")

        await prisma.reserva.delete({
            where: {
                quadra_id: idReserva
            }
        })
        await prisma.quadra.update({
            where: {
                id: idReserva
            },
            data: {
                isLocate: "Disponivel"
            }
        })
        }
    }
export default Reserva