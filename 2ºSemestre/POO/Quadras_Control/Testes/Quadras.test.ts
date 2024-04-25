
import prisma from "../Classes/Cliente";
import { Quadras } from "../Classes/Quadras";
import Prompt from "prompt-sync";

let quadras: Quadras = new Quadras();
let teclado = Prompt()

jest.mock('@prisma/client', () => {
    const originalModule = jest.requireActual('@prisma/client');
  
    return {
      __esModule: true,
      ...originalModule,
      PrismaClient: jest.fn().mockImplementation(() => {
        return {
          quadra: {
            create: jest.fn(),
          },
          $queryRaw: jest.fn().mockImplementation(async () => [
            {
              id: 1,
              name: 'Quadra 1',
              tipo: 'Futebol',
              isLocate: 'Disponivel'
            },
            {
              id: 2,
              name: 'Quadra 2',
              tipo: 'Basquete',
              isLocate: 'Disponivel'
            }
          ]),
        };
      }),
    };
  });

beforeEach(() => {
    quadras = new Quadras();
})

describe(('Registrar Quadra'), () => {
    it('Deve registrar uma quadra', async () => {
        await quadras.registraQuadra("Quadra 1", "Futebol");

        expect(quadras.nome).toBe("Quadra 1");
        expect(quadras.tipo).toBe("Futebol");

        expect(prisma.quadra.create).toHaveBeenCalledWith({
            data: {
                name: "Quadra 1",
                tipo: "Futebol",
                isLocate: "Disponivel"
            }
        }
        )
    })
})

describe(('Listar Quadras'), () => {
    it('Deve listar as quadras', async () => {

        const quadrasListadas = await quadras.listaQuadra();
      
        expect(quadrasListadas).toEqual([
            {
                id: 1,
                name: 'Quadra 1',
                tipo: 'Futebol',
                isLocate: 'Disponivel'
            },
            {
                id: 2,
                name: 'Quadra 2',
                tipo: 'Basquete',
                isLocate: 'Disponivel'
            }
        ])
         expect(prisma.$queryRaw).toHaveBeenCalled()
    })
})
