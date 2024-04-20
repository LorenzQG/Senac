import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, watch } = useForm({
    defaultValues: {
      titulo: "OGG.webp",
      ingresso: 1,
    },
  });
  function calculaPreco() {
    let preco = watch("ingresso") * 12;
    if (watch("media")) {
      preco += 10;
    }
    if (watch("grande")) {
      preco += 16;
    }
    if (watch("sim")){
      preco /= 2;
    }
    return preco;
  }
  return (
    <>
      <main className="principal">
        <div className="header">
          <img src="./cine-logo.webp" alt="" className="logo" />
          <div>
            <h1>Cine Pipoca</h1>
            <h2>Venda de Ingresso</h2>
          </div>
        </div>
        <div className="main-container">
          <h1>Selecione filme e Nº Ingresso</h1>
          <img src={watch("titulo")} alt="" className="figure" />
          <p>
            <label htmlFor="filme">Selecione o filme: </label>
            <select id="filme" {...register("titulo")}>
              <option value="OGG.webp">Gatsby</option>
              <option value="MeninasMalv.webp">Meninas Malvadas</option>
              <option value="StarWars.webp">Star Wars - O imperio Contra ataca</option>
              <option value="HarryPotter.jpg">Harry Potter e a pedra filosofal</option>
            </select>
          </p>
          <p>
            <label htmlFor="ingresso">Quantidade de ingressos: </label>
            <select id="num" {...register("ingresso")}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </p>
          <p>
            Pipoca: &nbsp;&nbsp;
            <input
              type="checkbox"
              name="media"
              id="media"
              {...register("media")}
            />
            <label htmlFor="media">Media </label> &nbsp;&nbsp;
            <input
              type="checkbox"
              name="grande"
              id="grande"
              {...register("grande")}
            />
            <label htmlFor="grande">Grande</label>
          </p>
          <p>
            Estudante: &nbsp;&nbsp;
            <input type="checkbox" name="sim" id="sim" {...register("sim")}/>
            <label htmlFor="sim">Sim</label>
          </p>
          <h2>
            Total a pagar: R${calculaPreco().toLocaleString("pt-br", {minimumFractionDigits: 2})}
          </h2>
        </div>
      </main>
    </>
  );
}

export default App;
