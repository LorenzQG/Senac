import { Calculadora } from "./Calculadora";

let calculadora: Calculadora = new Calculadora();

beforeEach(() => {
    console.log('Antes de cada');
    calculadora = new Calculadora();
});
beforeAll(() => {
    console.log('Antes de tudo')
});

describe('Soma', () => {
    it('Deve retornar 4 quando 2 + 2', () => {
        const resultado: number = calculadora.somar(2, 2);
        expect(resultado).toBe(4);
    });
});

describe('Divisão', () => {
    it('Deve retornar 2 quando 4 / 2', () => {
        const resultado: number = calculadora.dividir(4, 2);
        expect(resultado).toBe(2);
    });
    it('Não deve ser possivel dividir por zero', () => {
        expect(() => calculadora.dividir(4, 0)).toThrow();
    })
    it('Quando dividir por ero deve lançar uma mensagem de erro', () => {
        expect(() => calculadora.dividir(4, 0)).toThrow("Não é possivel dividir por zero");
    })
});
