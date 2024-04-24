import { Quadras } from "./Quadras";
import prisma from "./Cliente";
import Prompt from "prompt-sync";

let quadras: Quadras = new Quadras();
let teclado = Prompt()
beforeEach(() => {
    quadras = new Quadras();
})

describe(('Registrar Quadra'), () => {
    it('Deve registrar uma quadra', () => {
        quadras.registraQuadra("Quadra de Fute", "Futebol");
        expect(quadras.nome).toBe("Quadra de Fute");
        expect(quadras.tipo).toBe("Futebol");
    })
}
)
describe(('Listar Quadra'), () => {
    it('Deve listar as quadras', () => {
        quadras.listaQuadra();
        expect(quadras.listaQuadra()).toStrictEqual(quadras.listaQuadra());
    })
}
)
