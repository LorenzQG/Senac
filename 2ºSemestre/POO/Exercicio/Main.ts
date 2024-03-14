import { Veiculo } from "./Veiculo";

let carro: Veiculo = new Veiculo();
carro.marca = 'Fiat';
carro.modelo = 'Palio';
carro.potencia =  105;
carro.placa = 'XIX2034';
carro.nmrMultas = 0;
carro.numeroMarchas = 5;
carro.velocidadeAtual = 90;
Multa();

function Multa(){
    let velocidadeMaxima:number = 80;
   
    if(carro.velocidadeAtual >  velocidadeMaxima){
        carro.nmrMultas +=  1;
        console.log("O limite de velocidade é 80, você tomou uma multa")
        console.log("Placa: " + carro.placa + ", " + "Numero de multas: " + carro.nmrMultas)
        console.table(carro)
    }else{
        console.log("Você esta dentro do limite de velocidade");
        console.table(carro)
    }

}
