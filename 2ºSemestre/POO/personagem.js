/*
Nome
Energia
Ataque
Defesa
*/
// Classe
var Personagem = /** @class */ (function () {
    function Personagem() {
        // Atributos
        this.nome = '';
        this.ataque = 0;
        this.energia = 0;
        this.defesa = 0;
    }
    return Personagem;
}());
var heroi = new Personagem();
heroi.nome = "Edécio";
heroi.ataque = 1;
heroi.defesa = 1;
heroi.energia = 100;
console.log(heroi);
