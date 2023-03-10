import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BookDisplay from './my-app/BookDisplay';
import MusicGroupDisplay from './my-app/MusicGroupDisplay';
import CulinaryRecipeDisplay from './my-app/CulinaryRecipeDisplay';
import TicTacToe from './my-app/TicTacToe';



class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <TicTacToe />
      </div>
      <div className="App">
        <BookDisplay />
      </div>
      <div className="App">
        <MusicGroupDisplay />
      </div>
      <div className="App">
        <CulinaryRecipeDisplay />
      </div>
      </>
    );
  }
}



export default App;
