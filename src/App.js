import './App.css';
import Header from './components/Header';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    title : "Pokédex",
    pokemons : [],
    isLoaded: false
  }
  componentDidMount(){
    //appel de l'api pokemon
    let pokemonList = [];
    const nbPokemon = 151;
    for (let i = 1; i <= nbPokemon; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(
        (result) => {
          pokemonList.push(result)
          console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true
          });
          console.log(error)
        }
      )
    }
    this.setState({
      pokemons: pokemonList
    })
    
  }
  render() {
    return (
      <div className="App">
        <Header titre={this.state.title} />
        <section style={{width:"100%", height:"90vh", backgroundColor: 'lightgrey'}}>
          <ul>
          {/* {
            this.state.pokemons.map((val, key) =>{
              return (
              <li>
                <span>{val.name}</span>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"></img>
              </li>)
            })
          } */}
          </ul>
        </section>
      </div>
    )
  }
}



