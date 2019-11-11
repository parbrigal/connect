import React,{ Component } from 'react';
import Header from './components/layouts/Header';
import Scroll from './components/layouts/Scroll';
import SearchBox from './components/res/SearchBox';
import Footer from './components/layouts/Footer';

import CardList from './components/res/CardList';

import './App.css';

import { people } from './people';

class App extends Component {

  state = {
    people,
    searchField : ''
  }

  componentDidMount() {
    this.setState({
      people,
      searchField : ''
    })
  }

  onSearchChange = (ev) => {
    this.setState({
      searchField : ev.target.value
    })

  
  }

  render() {

    const filteredPeople = people.filter(p => {
      return p.name.toLowerCase().includes(this.state.searchField) || p.name.includes(this.state.searchField) 
    });

    return (
      <div className="App">
      <Header />
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll> 
          <CardList people={filteredPeople} />
      </Scroll>
    </div>
    )
  }
}

export default App;

