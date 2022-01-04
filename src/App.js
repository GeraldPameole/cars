import React, { Component } from 'react';
import Mycars from './Components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon catalogue Voitures'
  }
  //"state = {}" indique l'etat local composant.

  //Afin de modifier cet etat du composant, nous utilisons la methode: this.setState()
  //changeTitle = (e) => {
  // this.setState({
  //  titre: 'Mon Nouveau titre'
  // });
  // }


  render() {
    return (
      <div className="App">
        <Mycars title={this.state.titre} />

      </div>

    );
  }
}


export default App;
