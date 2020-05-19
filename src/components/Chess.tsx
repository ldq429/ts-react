import React from 'react';
import {ChessType} from '../enums/types';
import './chess.css';

interface IProps {
  type: ChessType;
  handleClick?: () => void;
}

const Chess = ({type, handleClick}: IProps) => {
  let chess = null;
  if (type === ChessType.red) {
    chess = <div className='red'></div>;
  } else if (type === ChessType.black) {
    chess = <div className='black'></div>;
  }
  return (
    <div className='item' onClick={() => {
      if (handleClick && type === ChessType.null) {
        handleClick();
      }
    }}>
      {chess}
    </div>
  );
};

export default Chess;