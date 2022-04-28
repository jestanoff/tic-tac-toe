import computeAIMove from './computeAIMove';
import MiniMax from 'helpers/miniMax';
const mockMakeAIMove = jest.fn();
jest.mock('helpers/miniMax', () => {
  return jest.fn().mockImplementation(() => {
    return { makeAIMove: mockMakeAIMove }
  });
});

describe('computeAIMove()', () => {
  let spyRandom;
  let spyFloor;

  beforeEach(() => {
    spyRandom = jest.spyOn(Math, 'random');
    spyFloor = jest.spyOn(Math, 'floor');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Impossible difficulty', () => {
    test('should use the MiniMax algorithm to compute next AI move', () => {
      computeAIMove([1, 2, 3], 'Impossible');

      expect(mockMakeAIMove).toHaveBeenCalled();
      expect(mockMakeAIMove).toHaveBeenCalledWith([1, 2, 3]);
    })
  });

  describe('Easy difficulty', () => {
    test('should use a random move to compute next move', () => {
      const result = computeAIMove([0, 0, 0, 0, 0, 0, 0, 0, 0], 'Easy');

      expect(result).toEqual(expect.any(Array));
      expect(spyRandom).toHaveBeenCalledTimes(1);
      expect(spyRandom).toHaveBeenCalledWith();
      expect(spyFloor).toHaveBeenCalledTimes(1);
      expect(spyFloor).toHaveBeenCalledWith(expect.any(Number));
    })
  });
});
