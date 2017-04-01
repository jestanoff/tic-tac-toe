import React, { PropTypes } from 'react';
import styles from '../../css/mark.css';

const Mark = ({ overrideColor, type }) => {
    const circle = () => {
        const color = overrideColor || 'white';
        return (
            <svg
              version='1.1'
              viewBox='0 0 500 500'
              preserveAspectRatio='xMinYMin meet'
              className={ styles.svgContent }
            >
                <circle
                  cx='250' cy='250' r='125' stroke={ color } strokeWidth='45' fill='transparent'
                />
            </svg>
        );
    };

    const cross = () => {
        const color = overrideColor || '#444';
        return (
            <svg
              version='1.1'
              viewBox='0 0 500 500'
              preserveAspectRatio='xMinYMin meet'
              className={ styles.svgContent }
            >
                <line x1='130' y1='130' x2='370' y2='370' strokeWidth='50' stroke={ color } />
                <line x1='370' y1='130' x2='130' y2='370' strokeWidth='50' stroke={ color } />
            </svg>
        );
    };

    return (
        <div className={ styles.svgContainer }>
            { type === 'cross' && cross() }
            { type === 'circle' && circle() }
        </div>
    );
};

Mark.propTypes = {
    overrideColor: PropTypes.string,
    type: PropTypes.string.isRequired,
};

Mark.defaultProps = {
    overrideColor: '',
};

export default Mark;
