import { DRAW, UNRESOLVED } from '../constants';

export default (outcome: number): string => {
  if (![-1, 0, 1, 2].includes(outcome)) {
    return '';
  }

  if (outcome === UNRESOLVED) {
    return 'Turn';
  }

  return outcome === DRAW ? 'Game is draw' : 'Has won!';
};
