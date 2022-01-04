import React, { Component } from "react";
import Car from './Cars';


class Mycars extends Component {

    state = {
        voitures: [
            { name: 'Ford', color: 'red', year: 2002 },
            { name: 'Mercedes', color: 'grey', year: 2007 },
            { name: 'Mustang', color: 'blue', year: 2018 },
        ]
    }
    addTenYears = () => {

        const updatedState = this.state.voitures.map((param) => {
            return param.year -= 10;
        })

        //map permet de créer un nouveau tableau typé dont les éléments sont les images des éléments du tableau typé courant par une fonction donnée. Cette méthode utilise le même algorithme que Array.prototype.map(). TypedArray est utilisé ici de façon générique pour représenter l'un des types de tableaux typés possibles.
        //Voir egt reduce et filter!!

        this.setState({
            updatedState
        })
    }

    render() {
        const year = new Date().getFullYear();

        return (
            <div>
                <h1>{this.props.title} </h1>
                //this.props.

                <button onClick={this.addTenYears}>+ 10 ans</button>

                <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + ' ans'}>{this.state.voitures[0].name}</Car>

                <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + ' ans'}>{this.state.voitures[1].name}</Car>

                <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + ' ans'}>{this.state.voitures[2].name}</Car>

            </div>
        )
    }
}

export default Mycars;