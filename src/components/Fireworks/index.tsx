import * as React from 'react';
import * as PropTypes from 'prop-types';
import { startFireworks } from 'helpers';
import styles from './Fireworks.css';

const Fireworks = ({ handleClick }) => {
  React.useEffect(() => {
    startFireworks();
    const id = setTimeout(handleClick, 30000);
    return () => clearTimeout(id);
  }, [handleClick]);

  return <canvas id="canvas" className={styles.canvas} onClick={handleClick} />;
};

Fireworks.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default React.memo(Fireworks);
