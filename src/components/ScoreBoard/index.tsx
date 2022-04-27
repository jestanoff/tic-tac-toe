import * as React from 'react';
import * as PropTypes from 'prop-types';
import Score from 'components/Score';
import { SYMBOLS, PLAYER_X, PLAYER_O, M_DASH } from '../../constants';
import styles from './ScoresSection.css';

const ScoreBoard = ({ playerTurn, outcome }) => {
  const [state, setState] = React.useState({
    [PLAYER_X]: +localStorage.playerX || M_DASH,
    [PLAYER_O]: +localStorage.playerO || M_DASH,
  });

  React.useEffect(() => {
    const incrementScore = (score) => (score === M_DASH ? 1 : +score + 1);

    if (outcome === PLAYER_X) {
      localStorage.playerX = (+localStorage.playerX || 0) + 1;
      setState((prevState) => ({ ...prevState, [PLAYER_X]: incrementScore(prevState[PLAYER_X]) }));
    } else if (outcome === PLAYER_O) {
      localStorage.playerO = (+localStorage.playerO || 0) + 1;
      setState((prevState) => ({ ...prevState, [PLAYER_O]: incrementScore(prevState[PLAYER_O]) }));
    }
  }, [outcome]);

  const isScoreActive = React.useCallback(
    (player) => {
      if (outcome === 0) return false;
      return outcome > 0 ? outcome === player : playerTurn === player;
    },
    [outcome, playerTurn],
  );

  return (
    <section className={styles.container}>
      <Score score={state[PLAYER_X]} isActive={isScoreActive(PLAYER_X)} symbol={SYMBOLS[PLAYER_X]} />
      <Score score={state[PLAYER_O]} isActive={isScoreActive(PLAYER_O)} symbol={SYMBOLS[PLAYER_O]} />
    </section>
  );
};

ScoreBoard.propTypes = {
  outcome: PropTypes.number,
  playerTurn: PropTypes.number.isRequired,
};

ScoreBoard.defaultProps = {
  outcome: -1,
};

export default React.memo(ScoreBoard);
