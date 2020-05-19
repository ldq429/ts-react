import React from 'react';
import Board from './components/Board';
import './App.css';
import {ChessType, Status} from './enums/types';

interface IState {
  chessArr: ChessType[];
  gameStatus: Status.gaming;
  nextChess: ChessType.black | ChessType.red;
}

class App extends React.Component<{}, IState> {
  state: IState = {
    chessArr: [],
    gameStatus: Status.gaming,
    nextChess: ChessType.red
  };

  init() {
    const chessArr: ChessType[] = [];
    for (let i = 0; i < 9; i++) {
      chessArr.push(ChessType.null);
    }
    this.setState({
      chessArr,
      gameStatus: Status.gaming,
      nextChess: ChessType.red
    });
  }

  handleClick(index: number) {
    const chessArr = [...this.state.chessArr];
    chessArr[index] = this.state.nextChess;
    this.setState(prevState => ({
      chessArr,
      nextChess: prevState.nextChess === ChessType.red ? ChessType.black : ChessType.red
    }));
  };

  componentDidMount() {
    this.init();
  }

  render() {
    const {chessArr, gameStatus} = this.state;
    return (
      <div>
        <Board
          chessArr={chessArr}
          isGameOver={gameStatus !== Status.gaming}
          handleClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}


export default App;


