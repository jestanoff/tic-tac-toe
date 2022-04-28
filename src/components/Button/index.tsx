import * as React from 'react';
import * as PropTypes from 'prop-types';
import styles from './Button.css';

interface Props {
  disabled: boolean,
  handleClick: Function,
  text: string,
}

const Button = ({ disabled, handleClick, text }: Props) => (
  <div className={styles.container}>
    <button className={styles.button} disabled={disabled} onClick={() => handleClick()}>
      {text}
    </button>
  </div>
);

export default React.memo(Button);
