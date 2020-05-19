import React from 'react';
import Chess from './Chess';
import {ChessType} from '../enums/types';
import './board.css';

interface IProps {
  chessArr: ChessType[];
  isGameOver?: boolean;
  handleClick: (index: number) => void;
}

const Board: React.FC<IProps> = (props) => {
  // 非空断言 ! 告诉TS过滤掉非空的情况，比如默认值常用
  const isGameOver = props.isGameOver!;
  const chess = props.chessArr.map((type, index) => (
    <Chess type={type} key={index} handleClick={() => {
      if (props.handleClick && !isGameOver) {
        props.handleClick(index);
      }
    }}/>
  ));
  return (
    <div className={'board'}>
      <div className={'flex'}>
        {chess}
      </div>
    </div>
  );
};

Board.defaultProps = {
  isGameOver: false
};
export default Board;
