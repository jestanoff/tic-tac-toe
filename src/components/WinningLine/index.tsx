import * as React from 'react';
import { COORDS } from '../../constants';
import styles from './WinningLine.css';

type WinningLineProps = {
  color: string;
  line: number;
  handleClick: () => void;
};

const WinningLine = ({ color, line, handleClick }) => {
  const [x1, y1, x2, y2] = COORDS[line];

  return (
    <div className={styles.container}>
      <div>
        <svg
          data-testid='winner-line'
          onClick={handleClick}
          preserveAspectRatio="xMinYMin meet"
          version="1.1"
          viewBox="0 0 500 500"
        >
          <line x1={x1} y1={y1} x2={x1} y2={y1} strokeWidth="16" stroke={color}>
            <animate
              attributeName="x2"
              attributeType="XML"
              begin="250ms"
              dur="125ms"
              fill="freeze"
              from={x1}
              repeatCount="1"
              to={x2}
            />
            <animate
              attributeName="y2"
              attributeType="XML"
              begin="250ms"
              dur="125ms"
              fill="freeze"
              from={y1}
              repeatCount="1"
              to={y2}
            />
          </line>
        </svg>
      </div>
    </div>
  );
};

export default React.memo(WinningLine);
