import { Util } from "./Util";

export class Cachorro {

    raca: string;
    nome: string;
    porte: string;
    pedigree: boolean;
    peso: number;
    dataNascimento: Date;
    energia: number;
    felicidade: number;
    adestrado: boolean;

    constructor(nome: string) {
        this.raca = 'indefinido';
        this.nome = nome;
        this.porte = 'indefinido';
        this.pedigree = false;
        this.energia = Util.randomizar(1,100);
        this.peso = Math.random() * 1;
        this.dataNascimento = new Date();
        this.felicidade = Util.randomizar(1,100);
        this.adestrado = false;

    }
    dormir(tempoEmHoras: number): void {
        this.energia += Util.randomizar(5,17) * tempoEmHoras;
 
        if (tempoEmHoras >= 7) {
            this.felicidade += Util.randomizar(1,10) * tempoEmHoras;
        } else {
            this.felicidade -= Util.randomizar(1,10) * tempoEmHoras;
        }
        Util.validaCachorro(this);
    }
    brincar(tempoEmMinutos: number): void {
        this.felicidade += Util.randomizar(1,10) * tempoEmMinutos;
        this.energia -= Util.randomizar(1,10) * tempoEmMinutos;
        Util.validaCachorro(this)
    }
    latir(numeroDeLatidos: number): string {
        this.energia -= Util.randomizar(1,10) * numeroDeLatidos;
        this.felicidade += Util.randomizar(1,10)* numeroDeLatidos;
        Util.validaCachorro(this);
        return "Au ".repeat(numeroDeLatidos);
    }
    comer(): void {
        this.peso *= 1.1
        this.felicidade += Util.randomizar(1,10);
        this.energia -= Util.randomizar(10,30);
        Util.validaCachorro(this);
    }
}