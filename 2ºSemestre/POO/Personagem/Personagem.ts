import { Util } from "./Util";
import Prompt from "prompt-sync";
import { Inimigo } from "./Inimigo";



export class Personagem {
    // Atributos
    name: String;
    attack: number;
    energy: number;
    defense: number;
    race: String;
    classe: String;
    mana: number;
    intelect: number;
    armor: number;
    powerAttack: number;


    constructor(name: String, race: String, classe: String) {
        this.name = name;
        this.attack = 100;
        this.energy = 80;
        this.defense = 100;
        this.classe = classe
        this.race = race
        this.mana = 1;
        this.intelect = 1;
        this.armor = 1;
        this.powerAttack = 1;
    }

    treinaAtaque(attack: number): number {
        if (this.attack < 15) {
            this.attack += 3;
        } else if (this.attack >= 15) {
            this.attack += 6;
        } else if (this.attack >= 35) {
            this.attack += 10;
        }
        Util.validaStatus(this)
        return this.attack

    }

    treinaDefesa(defense: number): number {
        if (this.defense < 15) {
            this.defense += 3;
        } else if (this.defense >= 15) {
            this.defense += 6;
        } else if (this.defense >= 35) {
            this.defense += 10;
        }
        Util.validaStatus(this)
        return this.defense;

    }
    descansar(tempoEmMinutos: number): void {
        if (this.energy < 20) {
            this.energy += Util.randomizar(1, 10) * tempoEmMinutos;
        } else if (this.energy >= 20) {
            this.energy += Util.randomizar(10, 20) * tempoEmMinutos;
        }
        Util.validaStatus(this);

    }
    
    transcender(): void {
        console.log("Você sente uma energia misteriosa passar por seu corpo...");
        console.log("Seu corpo se enche de poder...");
        console.log("⣿⣿⠿⠿⠿⠿⣿⣷⣂⠄⠄⠄⠄⠄⠄⠈⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        console.log("⣷⡾⠯⠉⠉⠉⠉⠚⠑⠄⡀⠄⠄⠄⠄⠄⠈⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        console.log("⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠄⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿")
        console.log("⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠎⠄⠄⣀⡀⠄⠄⠄⠄⠄⠄⠄⠘⠋⠉⠉⠉⠉⠭⠿⣿")
        console.log("⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠎⠄⠄⣀⡀⠄⠄⠄⠄⠄⠄⠄⠘⠋⠉⠉⠉⠉⠭⠿⣿")
        console.log("⡀⠄⠄⠄⠄⠄⠄⠄⠄⡇⠄⣠⣾⣳⠁⠄⠄⢺⡆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄")
        console.log("⣿⣷⡦⠄⠄⠄⠄⠄⢠⠃⢰⣿⣯⣿⡁⢔⡒⣶⣯⡄⢀⢄⡄⠄⠄⠄⠄⠄⣀⣤⣶")
        console.log("⠓⠄⠄⠄⠄⠄⠸⠄⢀⣤⢘⣿⣿⣷⣷⣿⠛⣾⣿⣿⣆⠾⣷⠄⠄⠄⠄⢀⣀⣼⣿")
        console.log("⠄⠄⠄⠄⠄⠄⠄⠑⢘⣿⢰⡟⣿⣿⣷⣫⣭⣿⣾⣿⣿⣴⠏⠄⠄⢀⣺⣿⣿⣿⣿")
        console.log("⣿⣿⣿⣿⣷⠶⠄⠄⠄⠹⣮⣹⡘⠛⠿⣫⣾⣿⣿⣿⡇⠑⢤⣶⣿⣿⣿⣿⣿⣿⣿")
        console.log("⣿⣿⣿⣯⣤⣤⣤⣤⣀⣀⡹⣿⣿⣷⣯⣽⣿⣿⡿⣋⣴⡀⠈⣿⣿⣿⣿⣿⣿⣿⣿")
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣝⡻⢿⣿⡿⠋⡒⣾⣿⣧⢰⢿⣿⣿⣿⣿⣿⣿⣿")
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⣏⣟⣼⢋⡾⣿⣿⣿⣘⣔⠙⠿⠿⠿⣿⣿⣿")
        console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣛⡵⣻⠿⠟⠁⠛⠰⠿⢿⠿⡛⠉⠄⠄⢀⠄⠉⠉⢉")
        console.log("⣿⣿⣿⣿⡿⢟⠩⠉⣠⣴⣶⢆⣴⡶⠿⠟⠛⠋⠉⠩⠄⠉⢀⠠⠂⠈⠄⠐⠄⠄⠄")
        console.log("Todos status sobem 8000 pontos");
        this.attack += 8000;
        this.defense += 8000;
        const isVeryStrong = (this.attack > 8000) && (this.defense > 8000);
        if (isVeryStrong) {
            this.attack = 8000;
            this.defense = 8000;
        }
        console.log("Agora seu poder é mais de 8000")
    }
    entrarEmCombate(): void {

        const teclado = Prompt();
        const enemy = new Inimigo();
        enemy.name = ["zumbi", "Fantasma", "Lord das trevas"]
        console.log("Você entrou em combate, se prepare");
        console.log("Seu inimigo é: ");
        console.log(
            "Nome: " + enemy.name[Util.randomizar(0, 3)] + " " +
            "Ataque: " + enemy.attack + " " +
            "Defesa: " + enemy.defense + " " +
            "Energia: " + enemy.energy
        );

        while (true) {
            console.log("*".repeat(50));
            console.log("| 1 - Atacar |");
            console.log("| 2 - Defender |");
            console.log("| 0 - Sair |");
            console.log("*".repeat(50));

            let resposta: number = +teclado("Escolha uma ação: ");

            if (resposta == 1) {
                enemy.energy -= this.attack;
                if (enemy.energy <= 0) {
                    console.log("Você ganhou");
                    break;
                }else{
                    console.log("Inimigo infrigiu" + enemy.attack + "de dano")
                    this.energy -= enemy.attack;
                    Util.validaStatus(this);      
                }   
            }

            if (resposta == 2) {
                this.energy -= enemy.attack - this.defense * (5.1);
                const demangeTake = enemy.attack - (this.defense * (5.1));
                (`Você defendeu e sofreu` + demangeTake + `de dano`)
                Util.validaStatus(this);

            }

            if (resposta == 0) {
                break;
            }
        }

    }


}

