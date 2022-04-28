import isGameOver from './isGameOver';

describe('isGameOver()', () => {
  test('should return no winner on empty board', () => {
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(isGameOver(board)).toStrictEqual({ winner: -1, line: -1 });
  });

  test('should return no winner on a game in progress', () => {
    const board = [1, 2, 0, 0, 1, 0, 0, 1, 2];
    expect(isGameOver(board)).toStrictEqual({ winner: -1, line: -1 });
  });

  test('should return draw on draw board', () => {
    const board = [1, 2, 1, 2, 1, 2, 2, 1, 2];
    expect(isGameOver(board)).toStrictEqual({ winner: 0, line: -1 });
  });

  test('should return the player X as winner and a winning line', () => {
    const board = [2, 1, 0, 0, 1, 0, 0, 1, 2];
    expect(isGameOver(board)).toStrictEqual({ winner: 1, line: 4 });
  });

  test('should return the player O as winner and a winning line', () => {
    const board = [2, 1, 1, 0, 2, 0, 0, 1, 2];
    expect(isGameOver(board)).toStrictEqual({ winner: 2, line: 6 });
  });
});
