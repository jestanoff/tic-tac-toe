import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/mark.css';
import { DARK_GRAY, WHITE } from '../constants/constants';

const Mark = ({ isAnimated, overrideColor, type }) => {
  const circle = () => {
    const color = overrideColor || WHITE;
    return (
      <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className={styles.svg}>
        <circle
          cx="250"
          cy="250"
          r="125"
          stroke={color}
          strokeWidth="45"
          fill="transparent"
          strokeDasharray="800"
          strokeDashoffset="-800"
        >
          <animate
            attributeType="XML"
            attributeName="stroke-dashoffset"
            from="-800"
            to="0"
            dur={isAnimated ? '250ms' : '1ms'}
            repeatCount="1"
            fill="freeze"
          />
        </circle>
      </svg>
    );
  };

  const cross = () => {
    const color = overrideColor || DARK_GRAY;
    return (
      <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className={styles.svg}>
        <line x1="130" y1="130" x2="130" y2="130" strokeWidth="50" stroke={color}>
          <animate
            attributeType="XML"
            attributeName="x2"
            from="130"
            to="370"
            dur={isAnimated ? '125ms' : '1ms'}
            repeatCount="1"
            id="first"
            fill="freeze"
          />
          <animate
            attributeType="XML"
            attributeName="y2"
            from="130"
            to="370"
            dur={isAnimated ? '125ms' : '1ms'}
            repeatCount="1"
            fill="freeze"
          />
        </line>
        <line x1="370" y1="130" x2="370" y2="130" strokeWidth="50" stroke={color} opacity="0">
          <animate
            attributeType="XML"
            attributeName="opacity"
            from="0"
            to="1"
            dur="1ms"
            repeatCount="1"
            fill="freeze"
            begin={isAnimated ? '125ms' : '0s'}
          />
          <animate
            attributeType="XML"
            attributeName="x2"
            from="370"
            to="130"
            dur={isAnimated ? '125ms' : '1ms'}
            repeatCount="1"
            begin={isAnimated ? '125ms' : '0s'}
            fill="freeze"
          />
          <animate
            attributeType="XML"
            attributeName="y2"
            from="130"
            to="370"
            dur={isAnimated ? '125ms' : '1ms'}
            repeatCount="1"
            fill="freeze"
            begin={isAnimated ? '125ms' : '0s'}
          />
        </line>
      </svg>
    );
  };

  return (
    <div className={styles.container}>
      {type === 'cross' && cross()}
      {type === 'circle' && circle()}
    </div>
  );
};

Mark.propTypes = {
  isAnimated: PropTypes.bool,
  overrideColor: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Mark.defaultProps = {
  isAnimated: false,
  overrideColor: '',
};

export default Mark;
