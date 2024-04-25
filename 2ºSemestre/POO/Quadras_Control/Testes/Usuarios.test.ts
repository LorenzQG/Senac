
import prisma from "../Classes/Cliente";
import { Usuarios } from "../Classes/Usuarios";
import Prompt from "prompt-sync";

let usuario: Usuarios = new Usuarios();
let teclado = Prompt()

jest.mock('@prisma/client', () => {
    const originalModule = jest.requireActual('@prisma/client');
  
    return {
      __esModule: true,
      ...originalModule,
      PrismaClient: jest.fn().mockImplementation(() => {
        return {
          client: {
            create: jest.fn(),
          },
          $queryRaw: jest.fn().mockImplementation(async () => [
            {
                name: 'Gabriel',
                cpf: '12345678910',
                tel: 123456789
            },
            {
                name: 'Joao',
                cpf: '12345678911',
                tel: 123456788
            }
        ]),
        };
      }),
    };
  });

beforeEach(() => {
    usuario = new Usuarios();
})

describe(('Registrar Usuario'), () => {
    it('Deve registrar um usuario', async () => {
        await usuario.registraUsuario("Gabriel", "12345678910", 123456789);

        expect(usuario.nome).toBe("Gabriel");
        expect(usuario.cpf).toBe("12345678910");
        expect(usuario.tel).toBe(123456789);

        expect(prisma.client.create).toHaveBeenCalledWith({
            data: {
                name: "Gabriel",
                cpf: "12345678910",
                tel: 123456789
            }
        }
        )
    })     
})
describe(('Listar Quadras'), () => {
    it('Deve listar usuarios', async () => {
        const usuariosListados = await usuario.listaUsuarios();
      
        expect(usuariosListados).toEqual([
            {
                name: 'Gabriel',
                cpf: '12345678910',
                tel: 123456789
            },
            {
                name: 'Joao',
                cpf: '12345678911',
                tel: 123456788
            }
        ])
         expect(prisma.$queryRaw).toHaveBeenCalled()
    })      
    })
