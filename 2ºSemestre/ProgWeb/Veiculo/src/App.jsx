//import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [calcula, setCalcula] = useState("");
  const [resposta, setResposta] = useState("");

  function calcularPagamento(data) {
    const modelo = data.modelo;
    const preco = data.preco;

    const entrada = preco / 2;
    const saldo = entrada / 12;

    setResposta(`Promoção de ${modelo}`);
    setCalcula(`Entrada de R$: ${entrada} + 12x de R$: ${saldo.toFixed(2)}`);
  }

  return (
    <>
      <h1 className="destaque">Concessionaria Senac</h1>
      <img src="./capa-materia-showroom-comeri-santos.webp" alt="imagem" className="imagem"/>

      <form onSubmit={handleSubmit(calcularPagamento)}>
        <p>
          <label htmlFor="modelo">Modelo do Veiculo: </label>
          <input
            type="text"
            name="modelo"
            id="modelo"
            {...register("modelo")}
            className="input_text"
          />
        </p>
        <p>
          <label htmlFor="preco">Preço do veiculo:</label>
          <input type="number" name="preco" id="preco" {...register("preco")} className="input_text"/>
        </p>
        <p>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpar" />
        </p>
      </form>
      <h2>{resposta}</h2>
      <h2>{calcula}</h2>
    </>
  );
}

export default App;
