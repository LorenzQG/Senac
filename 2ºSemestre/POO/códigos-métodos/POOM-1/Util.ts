import { Cachorro } from "./Cachorro";

export class Util{
    static randomizar(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static validaStatus(cachorro: Cachorro): void{
        if(cachorro.energia < 0){
            throw new Error(`O ${cachorro.nome} subiu!`);
        }
        if(cachorro.felicidade < 0){
            console.log(`${cachorro.nome} está deprimido!`);
        }
        if(cachorro.energia > 100){
            cachorro.energia = 100;
        }
        if(cachorro.felicidade > 100){
            cachorro.felicidade = 100;
        }
    }
}