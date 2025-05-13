import './Jogadores.css'

const Jogadores = (prosp) => {
    return (
        <div className="jogadores">

            <div className="cabecalho" >
                <img src={prosp.imagem} alt={prosp.nome}/>
            </div>

            <div  className="rodape"> 
                <h4>{prosp.nome}</h4>
                <h5>{prosp.cargo}</h5>
            </div>
            
        </div>
    )
}

export default Jogadores