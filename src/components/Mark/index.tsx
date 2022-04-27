import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DARK_GRAY, WHITE } from '../../constants';
import styles from './Mark.css';

const Mark = ({ isAnimated, overrideColor, type }) => {
  return (
    <div className={styles.container}>
      {type === 'cross' && (
        <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className={styles.svg}>
          <line x1="130" y1="130" x2="130" y2="130" strokeWidth="50" stroke={overrideColor || DARK_GRAY}>
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
          <line x1="370" y1="130" x2="370" y2="130" strokeWidth="50" stroke={overrideColor || DARK_GRAY} opacity="0">
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
      )}
      {type === 'circle' && (
        <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className={styles.svg}>
          <circle
            cx="250"
            cy="250"
            r="125"
            stroke={overrideColor || WHITE}
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
      )}
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
  overrideColor: undefined,
};

export default React.memo(Mark);
