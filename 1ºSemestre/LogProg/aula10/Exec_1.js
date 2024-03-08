const prompt = require("prompt-sync")()

const Palavra = prompt("Insira uma palavra: ")
const num = Number(prompt("Insira a quantidades de vezes a ser exibida: "))

for(i = 1; i <= num; i++){
if(i < num){
    process.stdout.write(Palavra + " * ") 
}else{
    process.stdout.write(Palavra)
}
}