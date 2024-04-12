import { useState } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState("./237950-800-800.webp");

  function trocaImg() {
    setImg("./237950-800-800.webp");
  }
  function trocaImg1() {
    setImg("./237950-800-800a.webp");
  }
  function trocaImg2() {
    setImg("./tenis-olympikus-delta-122-marinho---3-.webp");
  }

  return (
    <>
      <header>
        <h1>Calçados Senac</h1>
        <h2>
          Veja detalhes do tênis: <span>Olympikus Delta Unissex</span>
        </h2>
      </header>
      <hr />
      <main>
        <img src={img} alt="" className="figura-principal" />
        <div className="img-roleta">
          <img src="237950-800-800.webp" alt="" onClick={trocaImg} />
          <img src="237950-800-800a.webp" alt="" onClick={trocaImg1} />
          <img
            src="tenis-olympikus-delta-122-marinho---3-.webp"
            alt=""
            onClick={trocaImg2}
          />
        </div>
      </main>
    </>
  );
}

export default App;
