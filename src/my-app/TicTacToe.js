import React from 'react';
import './TicTacToe.css';


class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: Array(9).fill(null),
      count: 0,
      x: 0,
      o: 0,
      first: '',
      disabled: '',
      zIndex: -1,
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  isWinner = () => {
    let s = '';
    if (this.state.first === 'cross')
      s = (this.state.count % 2 === 0) ? 'x' : 'o';
    else if (this.state.first === 'zero')
      s = (this.state.count % 2 === 0) ? 'o' : 'x';

    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (this.state.square[line[0]] === s
        && this.state.square[line[1]] === s
        && this.state.square[line[2]] === s) {
        //загальний рахунок ігор
        this.setState({ [s]: this.state[s] + 1 });
        this.setState({ winner: 'win' });
        this.setState({ zIndex: 0 });
        alert(s.toUpperCase() + '   -   ВИГРАВ!!!!')
        this.setState({ square: Array(9).fill(null) });
        this.setState({ count: 0 });
        if (this.state.count === 8) {
          return;
        }
      }
    }
    if (this.state.count === 8)
      this.isDraw();
  }

  //НІЧИЯ
  isDraw = () => {
    if (!this.state.square.includes(null)) {
      alert('!!!перемогла дружба!!!');
      this.setState({ square: Array(9).fill(null) });
      this.setState({ count: 0 });
      this.setState({ zIndex: 0 });
    }
  }

  clickHandler = (e) => {
    //номер квадрата, по якому клікнули
    let data = e.target.getAttribute('data');
    let currentSquare = this.state.square;
    if (currentSquare[data] === null && this.state.first === 'cross') {
      currentSquare[data] = (this.state.count % 2 === 0) ? 'x' : 'o';
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquare });
      this.setState({ disabled: 'disabled' });
    }
    else if (currentSquare[data] === null && this.state.first === 'zero') {
      currentSquare[data] = (this.state.count % 2 !== 0) ? 'x' : 'o';
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquare });
      this.setState({ disabled: 'disabled' });
    }
    else if (currentSquare[data] === null && this.state.first === '')
      alert('ХТО ПОЧИНАЄ ГРУ?');
    else 
      alert('ЦЯ КЛІТИНКА ВЖЕ ЗАЙНЯТА!!');
    this.isWinner();
  }

  //НОВА ГРА
  restartGame = () => {
    this.setState({ square: Array(9).fill(null) });
    this.setState({ count: 0 });
    this.setState({ disabled: '' });
    this.setState({ winner: '' });
    this.setState({ zIndex: -1 });
  }

  gameChange = (e) => {
    this.setState({ first: e.target.getAttribute("attr") })
  }

  render() {
    return (
      <>
      <hr></hr>
      <h1>Displaying some 'X-O' Game!</h1>
      <div className="wrapper">
        <div className="tic-tac-toe">
          <div className="gameOver" style={{ zIndex: this.state.zIndex }}>GAME OVER</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='0'>{this.state.square[0]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='1'>{this.state.square[1]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='2'>{this.state.square[2]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='3'>{this.state.square[3]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='4'>{this.state.square[4]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='5'>{this.state.square[5]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='6'>{this.state.square[6]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='7'>{this.state.square[7]}</div>
          <div className="ttt-grid" onClick={this.clickHandler} data='8'>{this.state.square[8]}</div>
        </div>
        <button className="btn-restart" onClick={this.restartGame}>NEW GAME</button>
        <div className="change">
          <p>ГРУ ПОЧИНАЄ:</p>
          <input type="radio" name="first" attr="cross" disabled={this.state.disabled} onClick={this.gameChange} /> ХРЕСТИК
        <input type="radio" name="first" attr="zero" disabled={this.state.disabled} onClick={this.gameChange} />НУЛИК
        </div>
        <table>
          <tbody>
            <tr>
              <th>РАХУНОК</th>
            </tr>
            <tr>
              <th>Х</th>
              <td>{this.state.x}</td>
            </tr>
            <tr>
              <th>0</th>
              <td>{this.state.o}</td>
            </tr>
          </tbody>
        </table>
      </div >
      </>
    );
  }
}

export default TicTacToe;