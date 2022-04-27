import { DRAW, UNRESOLVED } from '../constants';

export default (outcome: number): string => {
  if (outcome === UNRESOLVED) {
    return 'Turn';
  }

  return outcome === DRAW ? 'Game is draw' : 'Has won!';
};
