export class Personagem {
    nome: string;
    energia: number;
    ataque: number;
    defesa: number;
    raca: string;
    classe: string;
    stamina: number;
    mana: number;
    poderAtaque: number;
    intelecto : number;
    armadura : number;

    constructor(nome: string){
        this.nome = nome;
        this.energia = 100;
        this.ataque = 1;
        this.armadura = 1;
        this.classe = 'Indefinida';
        this.defesa = 1;
        this.intelecto = 1;
        this.mana = 1;
        this.poderAtaque = 1;
        this.stamina = 1;
        this.raca = 'Indefinida';
    }
    
}


