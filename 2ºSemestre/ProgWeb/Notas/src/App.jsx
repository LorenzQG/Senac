import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();
  const [media, setMedia] = useState("");
  const [resposta, setResposta] = useState("");

  function calculaNota(data) {
    const nome = data.nome;
    const nota1 = parseInt(data.nota1);
    const nota2 = parseInt(data.nota2);

    const calcula = (nota1 + nota2) / 2;

    if (calcula < 6) {
      setMedia(`Media: ${calcula} - Você foi Reprovado`);
    } else {
      setMedia(`Media: ${calcula} - Você foi Aprovado`);
    }

    setResposta(`Nome: ${nome}`);
  }
  function limpaForm() {
    setResposta("");
    setMedia("");
  }

  return (
    <>
      <h1>Portal Senac</h1>
      <form
        onSubmit={handleSubmit(calculaNota)}
        onReset={handleSubmit(limpaForm)}
      >
        <p>
          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" id="nome" {...register(`nome`)} />
        </p>
        <p>
          <label htmlFor="nota1">Nota 1:</label>
          <input type="number" name="nota1" id="nota1" {...register(`nota1`)} />
        </p>
        <p>
          <label htmlFor="nome">Nota 2:</label>
          <input type="number" name="nota2" id="nota2" {...register(`nota2`)} />
        </p>
        <p>
          <input type="submit" value="Confirmar" />
          &nbsp;&nbsp;
          <input type="reset" value="Limpar" />
        </p>
      </form>
      <h2>{resposta}</h2>
      <h2>{media}</h2>
    </>
  );
}

export default App;
