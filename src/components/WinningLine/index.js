import React from 'react';
import PropTypes from 'prop-types';
import { COORDS } from 'constants';
import styles from './WinningLine.css';

const WinningLine = ({ color, line, handleClick }) => {
  const drawLine = (x1, y1, x2, y2) => (
    <svg
      onClick={handleClick}
      version="1.1"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMinYMin meet"
      className={styles.svgContent}
    >
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
  );

  return (
    <div className={styles.container}>
      <div className={styles.line}>{drawLine(...COORDS[line])}</div>
    </div>
  );
};

WinningLine.propTypes = {
  color: PropTypes.string.isRequired,
  line: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default WinningLine;
