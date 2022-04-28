import * as React from 'react';
import { DARK_GRAY, SYMBOLS, WHITE } from '../../constants';
import styles from './Mark.css';

type MarkProps = {
  isAnimated?: boolean;
  overrideColor?: string;
  type: string;
};

const Mark = ({ isAnimated = false, overrideColor, type }: MarkProps) => (
  <div className={styles.container}>
    {type === SYMBOLS[1] && (
      <svg
        className={styles.svg}
        data-testid='cross-mark'
        preserveAspectRatio='xMinYMin meet'
        version='1.1'
        viewBox='0 0 500 500'
      >
        <line x1='130' y1='130' x2='130' y2='130' strokeWidth='50' stroke={overrideColor ?? DARK_GRAY}>
          <animate
            attributeName='x2'
            attributeType='XML'
            dur={isAnimated ? '125ms' : '1ms'}
            fill='freeze'
            from='130'
            id='first'
            repeatCount='1'
            to='370'
          />
          <animate
            attributeName='y2'
            attributeType='XML'
            dur={isAnimated ? '125ms' : '1ms'}
            fill='freeze'
            from='130'
            repeatCount='1'
            to='370'
          />
        </line>
        <line
          stroke={overrideColor || DARK_GRAY} opacity='0'
          strokeWidth='50'
          x1='370'
          x2='370'
          y1='130'
          y2='130'
        >
          <animate
            attributeName='opacity'
            attributeType='XML'
            begin={isAnimated ? '125ms' : '0s'}
            dur={isAnimated ? '125ms' : '1ms'}
            fill='freeze'
            from='0'
            repeatCount='1'
            to='1'
          />
          <animate
            attributeName='x2'
            attributeType='XML'
            begin={isAnimated ? '125ms' : '0s'}
            dur={isAnimated ? '125ms' : '1ms'}
            fill='freeze'
            from='370'
            repeatCount='1'
            to='130'
          />
          <animate
            attributeName='y2'
            attributeType='XML'
            begin={isAnimated ? '125ms' : '0s'}
            dur={isAnimated ? '125ms' : '1ms'}
            fill='freeze'
            from='130'
            repeatCount='1'
            to='370'
          />
        </line>
      </svg>
    )}
    {type === SYMBOLS[2] && (
      <svg
        className={styles.svg}
        data-testid='circle-mark'
        preserveAspectRatio='xMinYMin meet'
        version='1.1'
        viewBox='0 0 500 500'
      >
        <circle
          cx='250'
          cy='250'
          r='125'
          stroke={overrideColor || WHITE}
          strokeWidth='45'
          fill='transparent'
          strokeDasharray='800'
          strokeDashoffset='-800'
        >
          <animate
            attributeType='XML'
            attributeName='stroke-dashoffset'
            from='-800'
            to='0'
            dur={isAnimated ? '250ms' : '1ms'}
            repeatCount='1'
            fill='freeze'
          />
        </circle>
      </svg>
    )}
  </div>
);

export default React.memo(Mark);
