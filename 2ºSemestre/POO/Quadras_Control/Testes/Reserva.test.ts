
import prisma from "../Classes/Cliente";
import { Reserva } from "../Classes/Reserva";
import Prompt from "prompt-sync";

let reserva: Reserva = new Reserva();
let teclado = Prompt()

jest.mock('@prisma/client', () => {
    const originalModule = jest.requireActual('@prisma/client');

    return {
        __esModule: true,
        ...originalModule,
        PrismaClient: jest.fn().mockImplementation(() => {
            return {
                reserva: {
                    create: jest.fn(),
                    delete: jest.fn(),
                },
                quadra: {
                    update: jest.fn(),
                    findFirst: jest.fn(),
                },
                $queryRaw: jest.fn().mockImplementation(async () => [
                    {
                        client_id: '12345678910',
                        quadra_id: 1,
                    },
                    {
                        client_id: '12345678911',
                        quadra_id: 2,
                    }
                ]),
            };
        }),
    };
});

beforeEach(() => {
    reserva = new Reserva();
})

describe(('Faz uma reserva'), () => {
    it('Deve fazer uma reserva', async () => {
        await reserva.reservaQuadra(1, "12345678910");

        expect(reserva.idQuadra).toBe(1);
        expect(reserva.idUser).toBe("12345678910");

        expect(prisma.reserva.create).toHaveBeenCalledWith({
            data: {
                client_id: "12345678910",
                quadra_id: 1
            }
        }
        )
        expect(prisma.quadra.update).toHaveBeenCalledWith({
            where: {
                id: 1
            },
            data: {
                isLocate: "Reservado"
            }
        })
    })
})
describe(('Listar Reservas'), () => {
    it('Deve listar reservas', async () => {
        const reservasListadas = await reserva.listaReservas();

        expect(reservasListadas).toEqual([
            {
                client_id: '12345678910',
                quadra_id: 1,
            },
            {
                client_id: '12345678911',
                quadra_id: 2,
            }
        ])
        expect(prisma.$queryRaw).toHaveBeenCalled()
    })
})
describe(('Desfazer Reserva'), () => {
    it('Deve desfazer uma reserva', async () => {

        await reserva.desfazerReserva(1);

        expect(prisma.reserva.delete).toHaveBeenCalledWith({
            where: {
                quadra_id: 1
            }
        })
        expect(prisma.quadra.update).toHaveBeenCalledWith({
            where: {
                id: 1
            },
            data: {
                isLocate: "Disponivel"
            }
        })
    })
})