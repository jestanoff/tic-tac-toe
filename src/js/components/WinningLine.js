import React, { PropTypes } from 'react';
import styles from '../../css/winningLine.css';
import { COORDS } from '../constants/constants';

const WinningLine = ({ line, handleClick }) => {
    const drawLine = (x1, y1, x2, y2) => (
        <svg
          onClick={ handleClick }
          version='1.1'
          viewBox='0 0 500 500'
          preserveAspectRatio='xMinYMin meet'
          className={ styles.svgContent }
        >
            <line x1={ x1 } y1={ y1 } x2={ x2 } y2={ y2 } strokeWidth='16' stroke='#444' />
        </svg>
    );

    return (
        <div className={ styles.container }>
            <div className={ styles.line }>
                { drawLine(...COORDS[line]) }
            </div>
        </div>
    );
};

WinningLine.propTypes = {
    line: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default WinningLine;
