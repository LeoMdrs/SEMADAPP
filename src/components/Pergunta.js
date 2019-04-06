import React, { Component } from 'react';

class Pergunta extends Component {

    render() {
        return(

            <div className=" pergunta card border-light">
                <div className="card-header">
                    <h2>{ this.props.pergunta.cabecalho }</h2>
                </div>
                <div className="card-body">
                    <ol type="a">
                    {  this.props.pergunta.alternativas.map(item => (        
        
                        (item.tipo === "confirmacao") ? 
        
                            (<li><button onClick={()=>this.props.onAddPergunta(item.id_proxima_pergunta)} name="sim" type="button" className="btn btn-success btn-alternativa">
                                { item.resposta }
                            </button></li>) :
                            
                            ((item.tipo === "negacao") ?
                            (<li><button onClick={()=>this.props.onAddPergunta(item.id_proxima_pergunta)} name="nao" type="button" className="btn btn-danger btn-alternativa">
                                { item.resposta }
                            </button></li>) :
            
                            (<li><button onClick={()=>this.props.onAddPergunta(item.id_proxima_pergunta)} name="sim" type="button" className="btn btn-warning btn-alternativa">
                                { item.resposta }
                            </button></li>)
                            )
                    ))}
                    </ol>
        
                </div>
            </div>
        )
    }
 
}

export default Pergunta;