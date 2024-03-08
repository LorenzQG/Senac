const prompt = require("prompt-sync")()

const num = Number(prompt("Numero: "))

console.log(`Tabuada do ${num}`)
//Repete 30 vezes o tracinho
console.log("-".repeat(30))
//rotina de repetição
//para i começando em 1;
//enquanto i for menor ou igual a 10;
//e a cada repetição i recebe i + 1; i = 1 => 2; i = 2 => 3 
for (let i=1; i <= 10; i = i+1){

   console.log(`${num} X ${i} = ${num*i} `)

}

