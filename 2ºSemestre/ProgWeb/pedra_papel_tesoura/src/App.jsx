import { useState } from 'react'
import './App.css'

function App() {
  const [aposta, setAposta] = useState("")
  const [computador, setComputador] = useState("")
  const [resultado, setResultado] = useState("")
  const [cor, setCor] = useState("")

  function clickPedra(){
    if(resultado != ""){
      alert("Erro.. jogo ja foi concluido! Clique em nova aposta")
      return

    }
    setAposta("./pedra.png")
  }
  
  function clickPapel(){
    if(resultado != ""){
      alert("Erro.. jogo ja foi concluido! Clique em nova aposta")
      return

    }
    setAposta("./papel.png")
  }
  
  function clickTesoura(){
    if(resultado != ""){
      alert("Erro.. jogo ja foi concluido! Clique em nova aposta")
        return
    }retur
    setAposta("./tesoura.png")
  }
  function desafiarPC(){
    const num = Math.ceil(Math.random()*3)

    if (aposta == ""){
      alert("Escolha sua aposta primeiro...")
      return
    }

    if(resultado != ""){
      alert("Erro.. jogo ja foi concluido! Clique em nova aposta")
      return

    }

    if (num == 1){
      setComputador("./pedra.png")
      if (aposta == "./pedra.png"){
        setResultado("Ah... Deu empate!")
        setCor("cor_pc")
      } else if(aposta == "./tesoura.png"){
        setResultado("Xii.. Você Perdeu! Tente novamente")
        setCor("destaque")
      }else{
        setResultado("Show!! Você venceu! Parabéns")
        setCor("cor_aposta")
      }
    }
    else if (num == 2){
      setComputador("./papel.png")
      if (aposta == "./papel.png"){
        setResultado("Ah... Deu empate!")
        setCor("cor_pc")
      } else if(aposta == "./pedra.png"){
        setResultado("Xii.. Você Perdeu! Tente novamente")
        setCor("destaque")
      }else{
        setResultado("Show!! Você venceu! Parabéns")
        setCor("cor_aposta")
      }
    }
    else {
      setComputador("./tesoura.png")
      if (aposta == "./tesoura.png"){
        setResultado("Ah... Deu empate!")
        setCor("cor_pc")
      } else if(aposta == "./papel.png"){
        setResultado("Xii.. Você Perdeu! Tente novamente")
        setCor("destaque")
      }else{
        setResultado("Show!! Você venceu! Parabéns")
        setCor("cor_aposta")
      }
    }
    return
  }
  


  return (
    <>
      <h1 className='destaque'>Jogo: Pedra, Papel e Tesoura</h1>
      <hr />
      <h2 className='cor_aposta'>Clique sobre a imagem para fazer a sua aposta</h2>
      <div className='quadro'>
      <img src="./pedra.png" alt="Pedra" className='imagem-peq imagem-click' onClick={clickPedra}/>
      <img src="./papel.png" alt="Papel" className='imagem-peq imagem-click' onClick={clickPapel}/>
      <img src="./tesoura.png" alt="Tesoura" className='imagem-peq imagem-click' onClick={clickTesoura}/>

      {aposta &&
        <>
          <span className='mensagem'>Sua Aposta é:</span>
          <img src={aposta} alt="Aposta" className='imagem-grande'/>
        </>
      }
     </div>

      <h2 className='cor_pc'>Clique em APOSTAR para DESAFIAR o computador &nbsp;
        <button onClick={desafiarPC}>Apostar</button>
      </h2>
      <img src="./pedra.png" alt="Pedra" className='imagem-peq' />
      <img src="./papel.png" alt="Papel" className='imagem-peq' />
      <img src="./tesoura.png" alt="Tesoura" className='imagem-peq' />

      {computador &&
        <>
          <span className='mensagem'>Computador Apostou:</span>
          <img src={computador} alt="ImagemPC" className='imagem-grande'/>
         
        </>
      }
      <h2 className={cor}>{resultado}</h2>
    </>
  )
}

export default App
