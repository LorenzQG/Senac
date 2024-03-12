import { useState } from 'react'
import './App.css'

function App() {
  const[img, setImg] = useState('./237950-800-800.webp')
  const[img1, setImg1] = useState('./237950-800-800a.webp')
  const[img2, setImg2] = useState('./tenis-olympikus-delta-122-marinho---3-.webp')
  function trocaImg1(){
    if(img == './237950-800-800.webp'){
      setImg('./237950-800-800a.webp')
      setImg1('./237950-800-800.webp')
    }else if(img == './tenis-olympikus-delta-122-marinho---3-.webp'){
      setImg('./237950-800-800a.webp')
      setImg1('./tenis-olympikus-delta-122-marinho---3-.webp')

    }else{
      setImg()

    }


  }
  function trocaImg2(){

  }

  return (
    <>
      <header>
        <h1>Calçados Senac</h1>
        <h2>Veja detalhes do tênis: <span>Olympikus Delta Unissex</span></h2>
      </header>
      <hr />
      <main>
        <img src={img} alt="" className='figura-principal'/>
        <div className='img-roleta'>
          <img src={img1} alt="" onClick={trocaImg1}/>
          <img src="./tenis-olympikus-delta-122-marinho---3-.webp" alt="" onClick={trocaImg2}/>
        </div>
      </main>
    </>
  )
}

export default App
