import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/fireworks.css';
import { startFireworks } from '../helpers';

const Fireworks = ({ handleClick }) => {
  useEffect(() => {
    startFireworks();
    const id = setTimeout(handleClick, 30000);
    return () => clearTimeout(id);
  }, [handleClick]);

  return <canvas id="canvas" className={styles.canvas} onClick={handleClick} />;
};

Fireworks.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default memo(Fireworks);
