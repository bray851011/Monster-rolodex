import './App.css';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();            
    setSearchField(searchFieldString);
  }



  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox
        className='search-box'
        placeholder='Search Monster'
        onSearchHandler={onSearchChange}
      />

      <CardList 
        monsters={filterMonsters}
      />
    </div>
  )
}

// class App extends Component{
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     }
//   }



//   onSearchChange = 

//   render(){
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

    

//     return (
//       <div className="App">

        

//         
//     );
//   }
// }

export default App;
