function getWinningLine(arr) {
    const match = arr.join('').match(/(1|2)\1{2}/);
    return match ? Number(match[1]) : -1;
}

export default function checkBoardSolved(board) {
    const vertical = [[], [], []];
    const diagonal = [[], []];
    // transform board into horizontal lines
    const horizontal = [board.slice(0, 3), board.slice(3, 6), board.slice(6)];

    // transform board into vertical lines
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            vertical[i].push(horizontal[j][i]);
        }
    }

    // transform board into diagonal lines
    for (let i = 0; i < 3; i += 1) {
        diagonal[0].push(horizontal[i][i]);
        diagonal[1].push(horizontal[i][2 - i]);
    }

    const lines = [...horizontal, ...vertical, ...diagonal];
    for (let i = 0; i < lines.length; i += 1) {
        if (getWinningLine(lines[i]) > 0) {
            return [getWinningLine(lines[i]), i];
        }
    }
    const isDrawGame = board.every(Boolean);
    return isDrawGame ? 0 : -1;
}
