import * as React from 'react';
import Mark from 'components/Mark';
import { DARK_GRAY } from '../../constants';
import styles from './Score.css';

type ScoreProps = {
  isActive: boolean,
  score: number | string,
  symbol: string,
};

const Score = ({ isActive, score, symbol }: ScoreProps) => (
  <div className={isActive ? styles.active : styles.container} data-testid={`score-for-player-${symbol}`}>
    <span className={styles.mark}>
      <Mark type={symbol} overrideColor={DARK_GRAY} />
    </span>
    <span aria-live='polite' className={styles.score} title={`Player ${symbol} has ${Number(score) || 0} points`}>{score}</span>
  </div>
);

export default React.memo(Score);
