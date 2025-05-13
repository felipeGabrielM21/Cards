import Jogadores from '../Jogadores'
import './Posicao.css'

const Posicao = (props) => {
    return (
        <section className="posicao" style={{ backgroundColor: props.corSecundaria }}>
         <h3
  style={{
    borderColor: props.corPrimaria,
    color: props.corSecundaria === "#333333" ? "#FFFFFF" : "#333333"
  }}
>
  {props.nome}
</h3>


            <div className='jogadores-container'>
                {props.colaboradores.map(
                    colaborador =>
                        <Jogadores
                            corDeFundo={props.corPrimaria}
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Posicao