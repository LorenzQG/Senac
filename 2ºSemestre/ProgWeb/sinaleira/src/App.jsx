import { useState } from 'react'
import './App.css'
function App() {
  const [sinal, setSinal] = useState('./vermelha.png')
  const [frase, setFrase] = useState('Sinal Vermelho: Proibido passar')
  const [cor, setCor] = useState('cor-vermelha')
  function trocaSinaleira() {
    if(sinal == './vermelha.png'){
      setSinal('./amarela.png')
      setFrase('Sinal Amarelo: Tenha atenção')
      setCor("cor-amarela")
    }else if(sinal == './amarela.png'){
      setSinal('./verde.png')
      setFrase('Sinal Verde: Pode passar')
      setCor("cor-verde")
    }else{
      setSinal('./vermelha.png')
      setFrase('Sinal Vermelho: Proibido passar')
      setCor("cor-vermelha")
    }
    

  }
  return (
    <>
      <h1 className="cor-vermelha">Escola de Trânsito</h1>
      <h2>Aula sobre sinaleira</h2>
      <hr />
      <img src={sinal} alt="Sinaleira" className='estilo-img' onClick={trocaSinaleira} />
      <h2 className={cor}>{frase}</h2>
      <h4><i>* Clique sobre a imagem para trocar o sinal</i></h4>
    </>
  )

}


export default App
