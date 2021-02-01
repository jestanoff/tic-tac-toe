import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/mark.css';
import { DARK_GRAY, WHITE } from '../constants';

const Mark = ({ isAnimated, overrideColor, type }) => (
  <div className={styles.container}>
    {type === 'cross' ? (
      <svg className={styles.svg} preserveAspectRatio="xMinYMin meet" version="1.1" viewBox="0 0 500 500">
        <line x1="130" y1="130" x2="130" y2="130" strokeWidth="50" stroke={overrideColor || DARK_GRAY}>
          <animate
            attributeName="x2"
            dur={isAnimated ? '125ms' : '1ms'}
            fill="freeze"
            from="130"
            id="first"
            repeatCount="1"
            to="370"
          />
          <animate
            attributeName="y2"
            dur={isAnimated ? '125ms' : '1ms'}
            fill="freeze"
            from="130"
            repeatCount="1"
            to="370"
          />
        </line>
        <line x1="370" y1="130" x2="370" y2="130" strokeWidth="50" stroke={overrideColor || DARK_GRAY} opacity="0">
          <animate
            attributeName="opacity"
            begin={isAnimated ? '125ms' : '0s'}
            dur="1ms"
            fill="freeze"
            from="0"
            repeatCount="1"
            to="1"
          />
          <animate
            attributeName="x2"
            begin={isAnimated ? '125ms' : '0s'}
            dur={isAnimated ? '125ms' : '1ms'}
            fill="freeze"
            from="370"
            repeatCount="1"
            to="130"
          />
          <animate
            attributeName="y2"
            begin={isAnimated ? '125ms' : '0s'}
            dur={isAnimated ? '125ms' : '1ms'}
            fill="freeze"
            from="130"
            repeatCount="1"
            to="370"
          />
        </line>
      </svg>
    ) : (
      <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className={styles.svg}>
        <circle
          cx="250"
          cy="250"
          fill="transparent"
          r="125"
          stroke={overrideColor || WHITE}
          strokeDasharray="800"
          strokeDashoffset="-800"
          strokeWidth="45"
        >
          <animate
            attributeName="stroke-dashoffset"
            dur={isAnimated ? '250ms' : '1ms'}
            fill="freeze"
            from="-800"
            repeatCount="1"
            to="0"
          />
        </circle>
      </svg>
    )}
  </div>
);

Mark.propTypes = {
  isAnimated: PropTypes.bool,
  overrideColor: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Mark.defaultProps = {
  isAnimated: false,
  overrideColor: undefined,
};

export default memo(Mark);
