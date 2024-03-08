/*
Nome 
Energia
Ataque
Defesa 
*/

// Classe
class Personagem {
    // Atributos
    nome: String = '';
    ataque: number = 0;
    energia: number = 0;
    defesa: number = 0;

}

let heroi:Personagem = new Personagem();
heroi.nome = "Edécio"
heroi.ataque = 1
heroi.defesa = 1
heroi.energia = 100

console.log(heroi)