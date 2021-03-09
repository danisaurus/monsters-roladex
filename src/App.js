import React, { Component } from 'react';
/*Retructuring by pulling out Component*/
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField:''
    };
  }
  /*when react app mounts, we are pulling from api using lifestyle methods and then setting state of monsters to be equal to the array returned*/
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users }))
  }
  
  render() {
    
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        /*includes checks to see if string is included in other string*/
      );
    return (
    <div className="App">
      <h1> Monsters Roladex</h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange= {e => this.setState({searchField: e.target.value})}
      />
      <CardList monsters = {filteredMonsters}/>
    </div>
  )
 }
}

export default App;
