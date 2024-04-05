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
    comer(): void {
        this.peso *= 1.1
        this.felicidade += Util.randomizar(1,10);
        this.energia -= Util.randomizar(1,10);
        Util.validaStatus(this);
     
    }
    latir(numeroDeVezes: number): string {
        this.felicidade -= parseInt(""+1+ Math.random() * 2)*numeroDeVezes;
        this.energia -= parseInt(""+1+ Math.random() * 4)*numeroDeVezes;
        Util.validaStatus(this);
        return('Au '.repeat(numeroDeVezes));
    }
    dormir(tempoEmHoras: number): void {
        this.energia += Util.randomizar(1,10)*tempoEmHoras;
        this.felicidade += Util.randomizar(1,3)*tempoEmHoras;
        Util.validaStatus(this);
        
    }
    brincar(tempoEmMinutos: number): void {
        this.energia -= Util.randomizar(1,4)*tempoEmMinutos;
        this.felicidade += Util.randomizar(1,4)*tempoEmMinutos;
        Util.validaStatus(this);
    }
    
    

}