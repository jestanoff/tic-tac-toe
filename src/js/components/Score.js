import React from 'react';
import PropTypes from 'prop-types';
import Mark from './Mark';
import styles from '../../css/score.css';
import { DARK_GRAY } from '../constants/constants';

const Score = ({ isActive, score, symbol }) => (
    <div className={ isActive ? styles.active : styles.container }>
        <span className={ styles.mark } ><Mark type={ symbol } overrideColor={ DARK_GRAY } /></span>
        <span className={ styles.score } >{ score }</span>
    </div>
);

Score.propTypes = {
    isActive: PropTypes.bool.isRequired,
    score: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
};

export default Score;
