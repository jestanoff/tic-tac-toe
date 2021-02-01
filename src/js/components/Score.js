import React, { memo } from 'react';
import { bool, number, oneOfType, string } from 'prop-types';
import Mark from './Mark';
import styles from '../../css/score.css';
import { DARK_GRAY } from '../constants';

const Score = ({ isActive, score, symbol }) => (
  <div className={isActive ? styles.active : styles.container}>
    <span className={styles.mark}>
      <Mark type={symbol} overrideColor={DARK_GRAY} />
    </span>
    <span className={styles.score}>{score}</span>
  </div>
);

Score.propTypes = {
  isActive: bool.isRequired,
  score: oneOfType([number, string]).isRequired,
  symbol: string.isRequired,
};

export default memo(Score);
