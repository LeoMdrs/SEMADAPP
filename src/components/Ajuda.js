import React, {Component} from 'react';
// import bgAjuda2 from "../image/5.png";
// import bgAjuda1 from "../image/1.jpg";
import bgAjuda from "../image/3.jpg";

class Ajuda extends Component {
    render(){
        return(
            // style={{ backgroundImage: 'url('+bgAjuda+')'}}
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div  className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className=" p-4">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLongTitle">Bem vindo ao SEMADAPP, o sistema especialista de apoio na escolha da melhor abordagem de desenvolvimento de aplicativos!</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-7 m-3">
                                        <div className="">
                                        {/* <h6>Bem vindo ao SEMADA, o sistema especialista de apoio na escolha da melhor abordagem de desenvolvimento de aplicativos!</h6> */}
                                            <text><b>É simples, </b> para começar basta fechar esta caixa de informação clicando no 'x' e em seguida responder todas as perguntas que forem mostradas na tela. Assim, o sistema vai, considerando todas as possíveis abordagens de desenvolvimento de aplicativos e as vantagens e desvantagens que cada uma oferece, te indicar a melhor solução.</text>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-4">
                                        <img src={bgAjuda} className="img-fluid" alt="imagem: construindo app" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ajuda;