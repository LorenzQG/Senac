import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, watch } = useForm({
    defaultValues: {
      foto: "fiat-pulse.webp",
    },
  });
  function calculaPreco() {
    let preco;
    if (watch("foto") == "fiat-pulse.webp") {
      preco = 125990;
    } else if (watch("foto") == "fiat-toro.png") {
      preco = 143990;
    } else {
      preco = 155990;
    }

    if (watch("pintura")) {
      preco += 2000;
    }

    if (watch("cameras")) {
      preco += 3200;
    }
    return preco;
  }

  return (
    <>
      <div className="titulo">
        <img src="./fiat-logo.png" alt="logo" className="logo" />
        <div>
          <h1>Concessionaria Fiat</h1>
          <h2>Veiculos em Promoção</h2>
        </div>
      </div>
      <main className="principal">
        <section>
          <p className="subtitulo">Escolha o modelo: </p>
          <p>
            <input
              type="radio"
              name="modelo"
              id="pulse"
              value="fiat-pulse.webp"
              {...register("foto")}
            />
            <label htmlFor="pulse">Fiat pulse 2024</label>
          </p>
          <p>
            <input
              type="radio"
              name="modelo"
              id="toro"
              value="fiat-toro.png"
              {...register("foto")}
            />
            <label htmlFor="toro">Fiat toro 2024</label>
          </p>
          <p>
            <input
              type="radio"
              name="modelo"
              id="fastback"
              value="fiat-fastback.png"
              {...register("foto")}
            />
            <label htmlFor="fastback">Fiat fastback 2024</label>
          </p>
        </section>
        <section>
          <img src={watch("foto")} alt="Carro" className="foto-carro" />
        </section>
        <section>
          <p className="subtitulo">Adicione os opcionais</p>
          <p>
            <input
              type="checkbox"
              name="pintura"
              id="pintura"
              {...register("pintura")}
            />
            <label htmlFor="pintura">Pintura Metalica</label>
          </p>
          <p>
            <input
              type="checkbox"
              name="camera"
              id="camera"
              {...register("cameras")}
            />
            <label htmlFor="camera">Camera Frontal e Trazeira</label>
          </p>
        </section>
      </main>
      <footer className="rodape">
        <h2 className="texto-rodape">
          Preço promocional R$:{" "}
          {calculaPreco().toLocaleString("pt-br", { minimumFractionDigits: 2 })}
        </h2>
        <h2 className="texto-rodape">
          <i>* Consulte opções de financiamento</i>
        </h2>
      </footer>
    </>
  );
}

export default App;
