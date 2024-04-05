import { Util } from "./Util";

export class Inimigo{
    name: string[];
    attack: number;
    defense: number;
    energy: number;


    constructor(){
        this.name = [];
        this.attack = Util.randomizar(5,100);
        this.defense = Util.randomizar(5,100);
        this.energy = Util.randomizar(20,100);

    }
}