import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react'
import $ from 'jquery';
import axios from 'axios';
import Chart from './Chart.jsx'
import Blink from './Blink.jsx'
import ChangeType1 from './ChangeType1.jsx'
import ChangeType2 from './ChangeType2.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page:'home',
      PokemonID:0,
      Pokemonname:'Loading',
      Pokemonsprite: 'imgs/loading.gif',
      Pokemonheight: 0,
      Pokemonweight: 0,
      Pokemontype1: 'Loading',
      Pokemontype2: 'NONE',
      Pokemonspeed: 0,
      Pokemonspecialdefense: 0,
      Pokemonspecialattack: 0,
      Pokemondefense: 0,
      Pokemonattack: 0,
      Pokemonhp: 0,
      Pokemonability1:'Loading',
      Pokemonability2:'',
      Pokemonability3:'',
      Pokemonblink:''
    }
  this.changeType1 = this.changeType1.bind(this);
  this.changeType2 = this.changeType2.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        page:'home'
        // page:'pokemon'
      }
    )
  }

  changeType1 () {
    this.setState({
      Pokemonblink: this.state.Pokemontype1
    })
  }

  changeType2 () {
    this.setState({
      Pokemonblink: this.state.Pokemontype2
    })
    this.render();
    console.log(this.state)
  }

  render () {
    console.log('render')
    if(this.state.page === 'home'){
      return (
        <div id="homePage">
          <img id="homeImage" src="imgs/indexBackground.jpg" alt="Gotta Search them All"></img>
          <br></br>
          <img id="searchPokeball"src="imgs/pokeSearch.jpg" alt="Search"></img>
          <form id="searchForm" onSubmit = { (e) => {
            e.preventDefault();
            let input = document.getElementById("searchTerm").value;
            this.setState(
              {
                PokemonID: input,
                page:'pokemon'
              }
            )
          }}>
            <input type="text" id="searchTerm" defaultValue="Search for a pokemon!" ></input>
            <button type="submit" id='searchIcon'></button>
          </form>
        </div>
      )
    }
    if(this.state.page === 'pokemon'){

      if(this.state.Pokemonname === 'Loading'){
        axios.post('/pokemon', {
          id:this.state.PokemonID
        })
        .then( (response) => {
          console.log(response)
          this.setState({
            Pokemonname: response.data.name.replace(/\w\S*/g, (txt)=>{return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}),
            Pokemonsprite: response.data.sprite,
            Pokemonheight: response.data.height,
            Pokemonweight: response.data.weight,
            Pokemontype1: response.data.type1.toUpperCase(),
            Pokemonspeed: response.data.speed,
            Pokemonspecialdefense: response.data[`special-defense`],
            Pokemonspecialattack: response.data[`special-attack`],
            Pokemondefense: response.data.defense,
            Pokemonattack: response.data.attack,
            Pokemonhp: response.data.hp,
            Pokemonability1: response.data.ability1Name.toUpperCase(),
            Pokemonblink: response.data.type1.toUpperCase()
          })
          if(response.data.type2 !== undefined) {
            this.setState({
              Pokemontype2: response.data.type2.toUpperCase()
            })
          }
          if(response.data.ability2Name !== undefined) {
            this.setState({
              Pokemonability2: (response.data.ability2Name.toUpperCase())
            })
          }
          if(response.data.ability3Name !== undefined) {
            this.setState({
              Pokemonability3: response.data.ability3Name.toUpperCase()  
            })
          }
          return (
            <div id="pokemonPage">
              <Blink type={this.state.Pokemonblink} />
              <img id="pokedex" src = "imgs/pokedex.png" alt="pokedex"></img>  
              <div id="pokeData">
                ID: {this.state.PokemonID} Name: {this.state.Pokemonname}  <br></br>
                Hgt: {this.state.Pokemonheight} m  
                Wgt: {this.state.Pokemonweight} kg <br></br>
                Type 1: {this.state.Pokemontype1}  <br></br>
                Type 2: {this.state.Pokemontype2}  <br></br>
                <Chart stats={this.state}/> <br></br>
                HP: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.Pokemonhp}  <br></br>
                Speed: &nbsp;&nbsp;&nbsp;{this.state.Pokemonspeed} <br></br>
                Attack: &nbsp;&nbsp;{this.state.Pokemonattack}  <br></br>
                Defense: &nbsp;{this.state.Pokemondefense}  <br></br>
                Spec Atk: {this.state.Pokemonspecialattack}  <br></br>
                Spec Def: {this.state.Pokemonspecialdefense}  <br></br>
                Abilities: {this.state.Pokemonability1} {this.state.Pokemonability2} {this.state.Pokemonability3}
              </div>
              <img id="pokeSprite" src={this.state.Pokemonsprite} alt="pokeSprite"></img> 
              <ChangeType1 func={this.changeType1} />
              <ChangeType2 func={this.changeType2} />
            </div>
          )
        })
      }

      return (
        <div id="pokemonPage">
          <Blink type={this.state.Pokemonblink} />
          <img id="pokedex" src = "imgs/pokedex.png" alt="pokedex"></img>  
          <div id="pokeData">
            ID: {this.state.PokemonID} Name: {this.state.Pokemonname}  <br></br>
            Hgt: {this.state.Pokemonheight} m  
            Wgt: {this.state.Pokemonweight} kg <br></br>
            Type 1: {this.state.Pokemontype1}  <br></br>
            Type 2: {this.state.Pokemontype2}  <br></br>
            <Chart stats={this.state}/> <br></br>
            HP: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.Pokemonhp}  <br></br>
            Speed: &nbsp;&nbsp;&nbsp;{this.state.Pokemonspeed} <br></br>
            Attack: &nbsp;&nbsp;{this.state.Pokemonattack}  <br></br>
            Defense: &nbsp;{this.state.Pokemondefense}  <br></br>
            Spec Atk: {this.state.Pokemonspecialattack}  <br></br>
            Spec Def: {this.state.Pokemonspecialdefense}  <br></br>
            Abilities: {this.state.Pokemonability1} {this.state.Pokemonability2} {this.state.Pokemonability3}
          </div>
          <img id="pokeSprite" src={this.state.Pokemonsprite} alt="pokeSprite"></img> 
          <ChangeType1 func={this.changeType1} />
          <ChangeType2 func={this.changeType2} />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));