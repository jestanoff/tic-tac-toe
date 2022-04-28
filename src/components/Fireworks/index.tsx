import * as React from 'react';
import { startFireworks } from 'helpers';
import styles from './Fireworks.css';

type FireworksProps = {
  handleClick: () => void,
};

const Fireworks = ({ handleClick }) => {
  React.useEffect(() => {
    startFireworks();
    const id = setTimeout(handleClick, 30000);
    return () => clearTimeout(id);
  }, [handleClick]);

  return <canvas id="canvas" className={styles.canvas} onClick={handleClick} />;
};

export default React.memo(Fireworks);
