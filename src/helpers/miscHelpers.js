import { DRAW, UNRESOLVED } from 'constants';

const getNotification = (outcome) => (outcome === UNRESOLVED ? 'Turn' : outcome === DRAW ? 'Game is draw' : 'Has won!');

export default getNotification;
