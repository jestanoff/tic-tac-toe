import { HARD, EASY } from '../constants/constants';
import MiniMax from './miniMax';

export function getAvailableMoves(boardStatus) {
    return boardStatus
        .map((val, cell) => [val, cell])
        .filter(val => !val[0])
        .map(val => val[1]);
}

function getRandomMove(board) {
    const availableMoves = getAvailableMoves(board);
    const random = Math.floor(Math.random() * availableMoves.length);
    return board.map((val, i) => {
        if (i === availableMoves[random]) {
            return 2;
        }
        return val;
    });
}

function computeAIMove(board, difficulty) {
    if (difficulty === HARD) {
        const obj = new MiniMax();
        // console.time('AI move');
        return obj.makeAIMove(board);
        // console.timeEnd('AI move');
    }
    if (difficulty === EASY) return getRandomMove(board);
    return 0;
}

export default computeAIMove;
