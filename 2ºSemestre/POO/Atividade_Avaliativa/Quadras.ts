import Prompt from "prompt-sync";
export class Quadras {
    quadras: any[][];
    isLocate: boolean;

    constructor() {
        this.quadras = [[]];
        this.isLocate = false;
    }

    registraQuadra() {
        const teclado = Prompt();
        let nome:String;
        let tipo:String;
        let locado:String;
        
        nome = teclado("Digite o nome da Quadra: ").toString();
        tipo = teclado("Digite o tipo da Quadra: ").toString();
        locado = this.isLocate.toString();


        this.quadras.push([nome, tipo, locado]);
    }
    listaQuadra() {
        for(let i = 0; i < this.quadras.length; i++){
            for(let j = 0; i < this.quadras[i].length; j++){
                let registro = this.quadras[i][j];

                console.log(registro)

            }
            

        }
    }



}
