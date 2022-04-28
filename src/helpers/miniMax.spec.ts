import MiniMax from './miniMax';

describe('MiniMax AI tic-tac-toe algorithm', () => {
  describe('makeMove static method', () => {
    test('should not mutate the board array', () => {
      const board = [1, 0, 0];
      const result = MiniMax.makeMove(1, 1, board);

      expect(result).not.toStrictEqual(board);
    });

    test('should not make a move if such a move already happened', () => {
      const board = [1, 1, 1];
      const result = MiniMax.makeMove(1, 1, board);

      expect(result).toBe(null);
    });

    test('should mark a move on the board', () => {
      const board = [0, 0, 0, 0, 1];
      const result = MiniMax.makeMove(0, 2, board);

      expect(result).toStrictEqual([2, 0, 0, 0, 1]);
    });
  });

  describe('makeAIMove method', () => {
    test('should make a good move', () => {
      const board = [0, 0, 0, 0, 1, 0, 0, 0, 0];
      const minMax = new MiniMax();
      const result = minMax.makeAIMove(board);

      expect(result).toStrictEqual([2, 0, 0, 0, 1, 0, 0, 0, 0]);
    });

    test('should block the human player`s line', () => {
      const board = [2, 1, 2, 0, 1, 0, 0, 0, 0];
      const minMax = new MiniMax();
      const result = minMax.makeAIMove(board);

      expect(result).toStrictEqual([2, 1, 2, 0, 1, 0, 0, 2, 0]);
    });

    test('should make a winning move when it is possible', () => {
      const board = [2, 1, 0, 2, 1, 0, 0, 0, 0];
      const minMax = new MiniMax();
      const result = minMax.makeAIMove(board);

      expect(result).toStrictEqual([2, 1, 0, 2, 1, 0, 2, 0, 0]);
    });
  });
});
