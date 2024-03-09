import { useState } from "react";
import "./App.css";

function App() {
  const [mesas, setMesas] = useState(10)
  function entrada(){
    if (mesas == 0){
      alert('Não há mesas disponiveis')
    }else{
      setMesas(mesas - 1)
    }
  }
  function saida(){
    if (mesas == 10){
      alert('Todas as mesas estão disponiveis')
    }else{
      setMesas(mesas + 1)
    }
  }
  return (

    <main>
      <div>
        <h1>Restaurante Senac Sabores</h1>
        <h2>Controle de Mesas</h2>
        <hr />
      </div>
      <div>
        <img src="./restaurante.webp" alt="" className="figura" />
        <h2>
          Mesas Disponiveis: (<span>{mesas}</span>) - Mesas Ocupadas: (<span>{10-mesas}</span>
          )
        </h2>
        <button onClick={entrada}>Reservar mesa</button>
        <button onClick={saida}>Desfazer reserva</button>
      </div>
    </main>
  );
}

export default App;
