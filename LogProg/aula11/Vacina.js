const prompt = require("prompt-sync")()

let gotas
let nomeCri

let criancas = 0
let totalGot = 0
let frascos = 0
let continuar

do{
  nomeCri = prompt("Nome da criança: ")
  gotas = Number(prompt("Nº de gotas: "))

  totalGot += gotas
  criancas++ 
  frascos = Math.ceil(totalGot/30)

  console.log(`${nomeCri} vacinado(a) com ${gotas} gotas`)

  continuar = prompt("Continuar (S/N): ")


}while(continuar == "S")

console.log(`Crianças vacinadas: ${criancas}`)
console.log(`Total de gotas: ${totalGot}`)
console.log(`Total de frascos: ${frascos}`)

