import * as React from 'react';
import Mark from 'components/Mark';
import { SYMBOLS } from '../../constants';
import styles from './NotificationBar.css';

type NotificationBarProps = {
  message: string,
  icon?: string,
  showIcon?: boolean,
}

const NotificationBar = ({ icon, message, showIcon = false }: NotificationBarProps) => (
  <h2 className={styles.container}>
    {showIcon && !!icon && (
      <span className={styles.icon}>
        <Mark overrideColor="black" type={icon} />
      </span>
    )}
    <span aria-live='polite' title={`Player ${SYMBOLS[1]} can ${message.toLowerCase()}`}>{message}</span>
  </h2>
);

export default React.memo(NotificationBar);
