export class Calculadora {

    dividir(arg0: number, arg1: number): number {
        if(arg1 == 0){
            throw new Error("Não é possivel dividir por zero");
        }
        const resultado = arg0/arg1;
        return resultado;
    }

    somar(arg0: number, arg1: number): number {
        return arg0 + arg1;
    }

}