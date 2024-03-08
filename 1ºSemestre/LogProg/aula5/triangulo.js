const prompt = require("prompt-sync")()

const lado1 = Number(prompt("Valor do lado A: "))
const lado2 = Number(prompt("Valor do lado B: "))
const lado3 = Number(prompt("Valor do lado C: "))

if(lado1 < (lado2 + lado3)){
 if(lado2 < (lado1 + lado3)){
    if(lado3 <(lado2 + lado1)){
        console.log("Lados podem formar um triangulo")
        if(lado1 == lado2 && lado2 == lado3){

        console.log("Tipo: Equlatero")

        }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log("Tipo: Isósceles")
        }else{
            console.log("Tipo: Escaleno")
        }
      
    }else{
        console.log("Lados não podem formar um triangulo")
    }

 }else{
    console.log("Lados não podem formar um triangulo")
 }

}else{
    console.log("Lados não podem formar um triangulo")
}

/* Melhor forma
  
 if(a > b + c || b > a + c || c > a + b){
    console.log("Lados não podem formar um triangulo")
 } else {
    console.log("Lados podem formar um triangulo")
    if(a == b && a == c){
        console.log("Tipo: Equilatero")

    }else if(a == b || a == c || b == c){
        console.log("Tipo: Isósceles")
    } else {
        console.log("Tipo: Escaleno")
    }
    

 }

*/