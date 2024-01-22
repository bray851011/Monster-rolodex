import './App.css';

import { Component } from 'react';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return {monsters: users}
        }
        ,
        () => {
          console.log(this.state);
        }
      ))
  }

  render(){
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monster' 
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();            
            
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            })
            
            this.setState(() => {
              return {monsters: filteredMonsters}
            })
          }}
        />
        {
          this.state.monsters.map((monsters) => {
            return (
              <h1 key={monsters.id}>{monsters.name}</h1>
            )
          })
        }
      </div>
    );
  }
}

export default App;
