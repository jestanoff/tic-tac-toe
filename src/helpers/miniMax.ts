import { DRAW, PLAYER_X, PLAYER_O } from '../constants';
import isGameOver from './isGameOver';

export default class MiniMax {
  private maxPlayer: number;
  private minPlayer: number;

  constructor() {
    this.maxPlayer = PLAYER_O;
    this.minPlayer = PLAYER_X;
  }

  static makeMove(move: number, player: number, board: number[]): number[] | null {
    const newBoard = [...board];

    if (newBoard[move] === 0) {
      newBoard[move] = player;
      return newBoard;
    }

    return null;
  }

  makeAIMove(board: number[]): number[] {
    const newBoard = [...board];
    newBoard[this.findMove(board)] = this.maxPlayer;

    return newBoard;
  }

  findMove(board: number[]): number {
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

  minValue(board: number[]): number {
    let bestMoveValue = 100;
    const outcome = isGameOver(board).winner;

    if (outcome === this.maxPlayer) {
      return 1;
    } else if (outcome === this.minPlayer) {
      return -1;
    } else if (outcome === DRAW) {
      return 0;
    }

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

  maxValue(board: number[]): number {
    let bestMoveValue = -100;
    const outcome = isGameOver(board).winner;

    if (outcome === this.maxPlayer) {
      return 1;
    } else if (outcome === this.minPlayer) {
      return -1;
    } else if (outcome === DRAW) {
      return 0;
    }

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
