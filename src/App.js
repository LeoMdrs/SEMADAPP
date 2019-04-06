import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "./App.css";

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
                <text>SISTEMA ESPECIALISTA</text>
                <h5>DESCUBRA O APLICATIVO IDEAL</h5>
              </div>
              <div className="footer">
                <text>DESIGNED BY</text>
                <p>LEANDRO RANGEL</p>
              </div>
          
          </div>
        
      
    );
  }
}

export default App;




