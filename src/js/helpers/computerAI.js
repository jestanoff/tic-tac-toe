export default function computerAI(boardStatus) {
    const emptyCells = boardStatus
        .map((val, cell) => [val, cell])
        .filter(val => !val[0]);
    const random = Math.floor(Math.random() * emptyCells.length);
    return boardStatus.map((val, i) => {
        if (i === emptyCells[random][1]) {
            return 2;
        }
        return val;
    });
}
