
import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm()
  const [resposta, setResposta] = useState("")
  const [calculo, setCalculo] = useState("")

  function calcularPrato(data) {
    const nome = data.nome
    const peso = Number(data.peso)
    if (peso < 1000){
    setResposta(`${nome}, seu prato pesou: ${peso}gr.`)
    }else if(peso >= 1000){
      setResposta(`${nome}, seu prato pesou: ${peso/1000}kg.`)
    }else if(peso >= 1000000){
      setResposta(`${nome}, seu prato pesou: ${peso/1000000}ton.`)
    }
    const valor = (peso/1000) * 72.00
    setCalculo(`Valor a Pagar R$: ${valor.toFixed(2)}`)

  }

  return (
    <>
      <h1 className="destaque">Buffet Senac</h1>
      <img
        src="./goomer-pratos-do-dia-cardapio-restaurante-como-montar-780x450.jpg"
        alt="Buffet"
        className="imagem"
      />
      <h2>Calculo do Valor da Refeição</h2>
      <form onSubmit={handleSubmit(calcularPrato)}>
        <p>
          <label htmlFor="nome">Nome do cliente: </label>
          <input type="text" id="nome" {...register("nome")} />
        </p>
        <p>
          <label htmlFor="peso">Peso do Prato(gr): </label>
          <input type="text" id="peso" {...register("peso")} />
        </p>
        <p>
          <input type="submit" value="Calcular" />
          &nbsp;&nbsp;
          <input type="reset" value="Limpar" />
        </p>
      </form>
      <h2 className="destaque">{resposta}</h2>
      <h2 className="destaque">{calculo}</h2>
    </>
  );
}

export default App;
