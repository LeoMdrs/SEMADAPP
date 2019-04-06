import React, {Component} from 'react';

class Navegacao extends Component {



// onClick={()=>this.props.recomecar()}
    render(){
        return(
            <div className="btnNavegacao">
                <div >
                    <button onClick={()=>this.props.onRecomecar()} className="btn btnCircular btnRecomecar" name="3">
                        <i class="fas fa-undo-alt"></i>
                    </button>
                </div>
                <div className="">
                    <button className="btn btnCircular btnAjuda"
                    data-toggle="modal" data-target="#exampleModalCenter" name="3">
                        <i className="fa fa-question"></i>
                    </button>
                </div>
            </div>    
        )
    }
}

export default Navegacao;