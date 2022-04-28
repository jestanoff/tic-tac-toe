import * as React from 'react';
import { bool, number, oneOfType, string } from 'prop-types';
import Mark from 'components/Mark';
import { DARK_GRAY } from '../../constants';
import styles from './Score.css';

const Score = ({ isActive, score, symbol }) => (
  <div className={isActive ? styles.active : styles.container} data-testid={`score-for-player-${symbol}`}>
    <span className={styles.mark}>
      <Mark type={symbol} overrideColor={DARK_GRAY} />
    </span>
    <span aria-live='polite' className={styles.score} title={`Player ${symbol} has ${score} points`}>{score}</span>
  </div>
);

Score.propTypes = {
  isActive: bool.isRequired,
  score: oneOfType([number, string]).isRequired,
  symbol: string.isRequired,
};

export default React.memo(Score);
