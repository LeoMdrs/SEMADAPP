import React, { Component } from 'react';
// import bgResultado from "../2.jpg";

class Resultado extends Component {


    render() {
        return(
            //  style={{ backgroundImage: 'url('+bgResultado+')'}}
            <div className="resultado card border-light animated jackInTheBox">
           
                {/* <div className="nome-resultado card">
                    <h3>RESULTADO</h3>
                </div> */}
                <div className="card-body">
                    <text>RESULTADO</text>
                    <div className="titulo-resultado">
                        <h3 className="">{ this.props.resultado.nome }</h3>
                    </div>
                    <br></br>
                    <div className="">
                        <text>{ this.props.resultado.descricao }</text>
                        <br></br><br></br>
                        <span class="badge badge-pill badge-danger">Perguntas respondidas: { this.props.numeroPerguntas }</span>
                    </div>
                </div>
            </div>
        )
    }
 
}

export default Resultado;