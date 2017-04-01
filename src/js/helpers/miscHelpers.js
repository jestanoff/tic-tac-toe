import { DRAW, UNRESOLVED } from '../constants/constants';

const getNotification = (outcome) => { // eslint-disable-line arrow-body-style
    return (outcome === UNRESOLVED) ? 'Turn' : outcome === DRAW ? 'Game is draw' : 'Has won!';
};

export default getNotification;
