import React, { PropTypes } from 'react';
import styles from '../../css/winningLine.css';
import { COORDS, DARK_GRAY } from '../constants/constants';

const WinningLine = ({ line, handleClick }) => {
    const drawLine = (x1, y1, x2, y2) => (
        <svg
          onClick={ handleClick }
          version='1.1'
          viewBox='0 0 500 500'
          preserveAspectRatio='xMinYMin meet'
          className={ styles.svgContent }
        >
            <line x1={ x1 } y1={ y1 } x2={ x1 } y2={ y1 } strokeWidth='16' stroke={ DARK_GRAY } >
                <animate
                  attributeType='XML' attributeName='x2' from={ x1 } to={ x2 }
                  dur='125ms' repeatCount='1' begin='250ms' fill='freeze'
                />
                <animate
                  attributeType='XML' attributeName='y2' from={ y1 } to={ y2 }
                  dur='125ms' repeatCount='1' begin='250ms' fill='freeze'
                />
            </line>
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
