
export class Personagem {
    // Atributos
    name: String;
    attack: number;
    energy: number;
    defense: number;
    race:String;
    classe:String;
    mana: number;
    intelect:number;
    armor:number;
    powerAttack:number;

    constructor(name: String, race:String, classe:String){
        this.name = name;
        this.attack = 1;
        this.energy = 100;
        this.defense = 1;
        this.classe = classe
        this.race = race
        this.mana = 1;
        this.intelect = 1;
        this.armor = 1;
        this.powerAttack = 1;
    }

}

