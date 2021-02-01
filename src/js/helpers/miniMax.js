import isGameOver from './isGameOver';
import { DRAW, PLAYER_X, PLAYER_O } from '../constants';

export default class MiniMax {
  constructor() {
    this.minPlayer = PLAYER_X;
    this.maxPlayer = PLAYER_O;
  }

  static makeMove(move, player, board) {
    const newBoard = board.slice();
    if (newBoard[move] === 0) {
      newBoard[move] = player;
      return newBoard;
    }
    return null;
  }

  makeAIMove(board) {
    const newBoard = board.slice();
    newBoard[this.findMove(board)] = this.maxPlayer;
    return newBoard;
  }

  findMove(board) {
    let bestMoveValue = -100;
    let move = 0;
    for (let i = 0; i < board.length; i += 1) {
      const newBoard = MiniMax.makeMove(i, this.maxPlayer, board);
      if (newBoard) {
        const predictedMoveValue = this.minValue(newBoard);
        if (predictedMoveValue > bestMoveValue) {
          bestMoveValue = predictedMoveValue;
          move = i;
        }
      }
    }
    return move;
  }

  minValue(board) {
    const outcome = isGameOver(board).winner;
    if (outcome === this.maxPlayer) {
      return 1;
    } else if (outcome === this.minPlayer) {
      return -1;
    } else if (outcome === DRAW) {
      return 0;
    }
    let bestMoveValue = 100;
    for (let i = 0; i < board.length; i += 1) {
      const newBoard = MiniMax.makeMove(i, this.minPlayer, board);
      if (newBoard) {
        const predictedMoveValue = this.maxValue(newBoard);
        if (predictedMoveValue < bestMoveValue) {
          bestMoveValue = predictedMoveValue;
        }
      }
    }
    return bestMoveValue;
  }

  maxValue(board) {
    const outcome = isGameOver(board).winner;
    if (outcome === this.maxPlayer) {
      return 1;
    } else if (outcome === this.minPlayer) {
      return -1;
    } else if (outcome === DRAW) {
      return 0;
    }
    let bestMoveValue = -100;
    for (let i = 0; i < board.length; i += 1) {
      const newBoard = MiniMax.makeMove(i, this.maxPlayer, board);
      if (newBoard) {
        const predictedMoveValue = this.minValue(newBoard);
        if (predictedMoveValue > bestMoveValue) {
          bestMoveValue = predictedMoveValue;
        }
      }
    }
    return bestMoveValue;
  }
}
