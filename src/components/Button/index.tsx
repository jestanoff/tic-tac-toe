import * as React from 'react';
import styles from './Button.css';

type ButtonProps = {
  disabled: boolean;
  handleClick: () => void;
  text: string;
};

const Button = ({ disabled, handleClick, text }: ButtonProps) => (
  <div className={styles.container}>
    <button className={styles.button} disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  </div>
);

export default React.memo(Button);
