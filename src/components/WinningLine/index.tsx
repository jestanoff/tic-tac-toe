import * as React from 'react';
import { COORDS } from '../../constants';
import styles from './WinningLine.css';

type WinningLineProps = {
  color: string,
  line: number,
  handleClick: () => void,
};

const WinningLine = ({ color, line, handleClick }) => {
  const [x1, y1, x2, y2] = COORDS[line];

  return (
    <div className={styles.container}>
      <div>
        <svg onClick={handleClick} version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <line x1={x1} y1={y1} x2={x1} y2={y1} strokeWidth="16" stroke={color}>
            <animate
              attributeType="XML"
              attributeName="x2"
              from={x1}
              to={x2}
              dur="125ms"
              repeatCount="1"
              begin="250ms"
              fill="freeze"
            />
            <animate
              attributeType="XML"
              attributeName="y2"
              from={y1}
              to={y2}
              dur="125ms"
              repeatCount="1"
              begin="250ms"
              fill="freeze"
            />
          </line>
        </svg>
      </div>
    </div>
  );
};

export default React.memo(WinningLine);
