import getNotification from './getNotification';

describe('getNotification()', () => {
  test('should return "Turn" if the game is still in progress', () => {
    expect(getNotification(-1)).toEqual('Turn');
  });

  test('should return "Game is draw" if the game is draw', () => {
    expect(getNotification(0)).toEqual('Game is draw');
  });

  test('should return "Has won!" if there is a winner', () => {
    expect(getNotification(1)).toEqual('Has won!');
  });

  test('should return "Has won!" if AI is a winner', () => {
    expect(getNotification(2)).toEqual('Has won!');
  });

  test('should return empty string if the outcome is out of range', () => {
    expect(getNotification(3)).toEqual('');
    expect(getNotification(-2)).toEqual('');
    expect(getNotification(NaN)).toEqual('');
    expect(getNotification(10e5)).toEqual('');
    expect(getNotification(Infinity)).toEqual('');
    expect(getNotification(+Infinity)).toEqual('');
    expect(getNotification(Infinity + 1)).toEqual('');
    expect(getNotification(Math.PI)).toEqual('');
    expect(getNotification(Number.MAX_SAFE_INTEGER)).toEqual('');
    expect(getNotification(Number.MIN_SAFE_INTEGER)).toEqual('');
  });
});
