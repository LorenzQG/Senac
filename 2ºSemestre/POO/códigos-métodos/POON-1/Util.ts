import { Cachorro } from "./Cachorro";

export class Util{
    static randomizar(min:number, max:number): number{
        return Math.floor(Math.random() * (max - min) + min);
    }
    static validaCachorro(pet: Cachorro): void{
        const isDead: boolean = pet.energia < 0;
        const isSad: boolean = pet.felicidade < 0;
        if(isDead){
            throw new Error(`O ${pet.nome} morreu de cansaço!`);
        }
        if(isSad){
            throw new Error(`O ${pet.nome} morreu de tristeza!`);
        }
        if(pet.energia > 100){
            pet.energia = 100;
        }
        if(pet.felicidade > 100){
            pet.felicidade = 100;
        }

    }
}