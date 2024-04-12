import { Personagem } from "./Personagem";

let personagem: Personagem = new Personagem("", "", "");

beforeEach(() => {
    personagem = new Personagem("Lorenzo", "Human", "Rogue");
});

describe('Treinar Ataque', () => {
    it('Ataque não pode ser negativo', () => {
        const result: number = personagem.treinaAtaque(personagem.attack)
        expect(result).toBeGreaterThan(0);
    })
});

describe('Treinar Defesa', () => {
    it('Defesa não pode ser negativa', () => {
        const result: number = personagem.treinaDefesa(personagem.defense)
        expect(result).toBeGreaterThan(0);
    })
});

describe('Descansar', () => {
    it('De')
})
