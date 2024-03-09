import { useState } from "react";
import "./App.css";

function App() {
  let [imovel, setImovel] = useState("");
  let [frase, setFrase] = useState("");
  function clickcasa() {
    setFrase((frase = "Você selecionou:"));
    setImovel((imovel = "Casa"));
  }
  function clickapart() {
    setFrase((frase = "Você selecionou:"));
    setImovel((imovel = "Apartamento"));
  }

  return (
    <>
      <header>
        <h1>Imobíliaria Senac</h1>
        <h2>Qual tipo de imovel você procura?</h2>
      </header>
      <hr />
      <main>
        <div className="Imagens">
          <button onClick={clickcasa}>
            <img
              src="./2ºSemestre/ProgWeb/Imobiliaria/public/Casa-Liu-Raiz-
        Arquitetura-Foto-Leonardo-Giantomasi-2.webp"
              alt=""
            />
          </button>
          <button onClick={clickapart}>
            <img
              src="/2ºSemestre/ProgWeb/Imobiliaria/public/big-414cb5348
        fc048223533984d2d600a40.jpg"
              alt=""
            />
          </button>
        </div>
        <div className="Frases">
          <h2>
            {frase}
            <span>{imovel}</span>
          </h2>
        </div>
      </main>
    </>
  );
}

export default App;
