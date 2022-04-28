export const SYMBOLS = {
  1: 'cross',
  2: 'circle',
};

export const CSS_CLASSES = {
  0: ['top', 'left'],
  1: ['top', 'center'],
  2: ['top', 'right'],
  3: ['left', 'middle'],
  4: ['center', 'middle'],
  5: ['right', 'middle'],
  6: ['bottom', 'left'],
  7: ['bottom', 'center'],
  8: ['bottom', 'right'],
};

interface Coords {
  0: Array<number>;
  1: Array<number>;
  2: Array<number>;
  3: Array<number>;
  4: Array<number>;
  5: Array<number>;
  6: Array<number>;
  7: Array<number>;
}

export const COORDS: Coords = {
  //  x1, y1, x2, y2
  0: [30, 82, 470, 82], // horizontal
  1: [30, 250, 470, 250],
  2: [30, 418, 470, 418],
  3: [82, 30, 82, 470], // vertical
  4: [250, 30, 250, 470],
  5: [418, 30, 418, 470],
  6: [40, 40, 460, 460], // diagonal
  7: [460, 40, 40, 460],
};

export const AI_WAITING_TIME = 700;
export const NUMBER_OF_SPACES = 9;
export const PLAYER_X = 1;
export const PLAYER_O = 2;
export const X_WON = 1;
export const O_WON = 2;
export const DRAW = 0;
export const UNRESOLVED = -1;
export const M_DASH = '\u2014';
export const EASY = 'Easy';
export const IMPOSSIBLE = 'Impossible';
export const RESET = 'Reset';
export const DARK_GRAY = '#444444';
export const WHITE = '#FFFFFF';
