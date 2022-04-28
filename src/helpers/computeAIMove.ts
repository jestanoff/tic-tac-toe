import { IMPOSSIBLE } from '../constants';
import MiniMax from 'helpers/miniMax';

function getAvailableMoves(boardStatus: number[]): number[] {
  return boardStatus
    .map((val, cell) => [val, cell])
    .filter((val) => !val[0])
    .map((val) => val[1]);
}

function getRandomMove(board: number[]): number[] {
  const availableMoves = getAvailableMoves(board);
  const random = Math.floor(Math.random() * availableMoves.length);

  return board.map((val, i) => {
    if (i === availableMoves[random]) {
      return 2;
    }
    return val;
  });
}

export default function computeAIMove(board: number[], difficulty: string): number[] {
  if (difficulty === IMPOSSIBLE) {
    const minMax = new MiniMax();
    return minMax.makeAIMove(board);
  }

  return getRandomMove(board);
}
