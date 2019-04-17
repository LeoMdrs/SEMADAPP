import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "./App.css";
import bgLogo from "./image/icon.png";

// import Navegacao from "./components/Navegacao";
// import Ajuda from "./components/Ajuda";
import TelaPerguntas from "./components/TelaPerguntas";
// import Loading from './components/Loading';

class App extends Component {


  render() {

    

    return (
     
          <div className="App d-flex justify-content-center ">

              {/* <Ajuda /> */}
              <TelaPerguntas />

              <div className="titulo">
                <h1>SEMADAPP<img src={bgLogo} className="logo" alt="logo" /></h1>
                {/* <h6>DESCUBRA A ABORDAGEM DE DESENVOLVIMENTO DE APLICATIVOS IDEAL</h6> */}
              </div>
              <div className="footer">
                <text>DESIGNED BY</text>
                <h6>Leandro Rangel</h6>
              </div>
          
          </div>
        
      
    );
  }
}

export default App;




