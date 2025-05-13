import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';

function App() {


  const posicao = [
    {
      nome: "Atacantes",
      corPrimaria: "#FFFFFF",
      corSecundaria: "#333333"
    },

    {
      nome: "Meio campo",
      corPrimaria: "#333333",
      corSecundaria: "#FFFFFF"
    },

    {
      nome: "Volantes",
      corPrimaria: "#FFFFFF",
      corSecundaria: "#333333"
    },

    {
      nome: "Laterais",
      corPrimaria: "#333333",
      corSecundaria: "#FFFFFF"
    },

    {
      nome: "Zagueiros",
      corPrimaria: "#FFFFFF",
      corSecundaria: "#333333"
    },

    {
      nome: "Goleiros",
      corPrimaria: "#333333",
      corSecundaria: "#FFFFFF"
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }



  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        posicao={posicao.map(p => p.nome)} />

      {posicao.map(posicoes => (
        <Posicao
          key={posicoes.nome}
          nome={posicoes.nome}
          corPrimaria={posicoes.corPrimaria}
          corSecundaria={posicoes.corSecundaria}
          colaboradores={colaboradores.filter(colab => colab.posicao === posicoes.nome)}
        />
      ))}

    </div>
  );
}

export default App;
