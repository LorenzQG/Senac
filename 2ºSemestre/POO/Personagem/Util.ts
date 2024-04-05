import { Personagem } from "./Personagem";

export class Util {
    static randomizar(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static validaStatus(personagem: Personagem): void {
        const isStrong = personagem.attack > 100;
        if (isStrong) {
            personagem.attack = 100;
        }

        const isHard = personagem.defense > 100;
        if (isHard) {
            personagem.defense = 100;
        }

        if (personagem.energy > 100) {
            personagem.energy = 100;
        }


        if (personagem.energy <= 0) {
            throw new Error(`${personagem.name} Você morreu!`);
        }


    }
}