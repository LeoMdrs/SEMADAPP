import React, {Component} from 'react';

class Navegacao extends Component {



// onClick={()=>this.props.recomecar()}
    render(){
        return(
            <div className="btnNavegacao">
                <div >
                    <button onClick={()=>this.props.onRecomecar()} className="btn btnCircular btnRecomecar" name="3"
                    data-toggle="tooltip" data-placement="right" title="Recomeçar">
                        <i class="fas fa-undo-alt" ></i>
                    </button>
                </div>
                <div className="">
                    <span data-toggle="tooltip" data-placement="right" title="Informação">
                        <button className="btn btnCircular btnAjuda"
                        data-toggle="modal" data-target="#exampleModalCenter" name="3">
                            <i className="fas fa-info-circle"></i>
                        </button>
                    </span>
                </div>
            </div>    
        )
    }
}

export default Navegacao;