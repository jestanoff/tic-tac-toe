import * as React from 'react';
import * as PropTypes from 'prop-types';
import Mark from 'components/Mark';
import { SYMBOLS } from '../../constants';
import styles from './NotificationBar.css';

const NotificationBar = ({ icon, message, showIcon = false }) => (
  <h2 className={styles.container}>
    {showIcon && (
      <span className={styles.icon}>
        <Mark overrideColor="black" type={icon} />
      </span>
    )}
    <span aria-live='polite' title={`Player ${SYMBOLS[1]} can ${message.toLowerCase()}`}>{message}</span>
  </h2>
);

NotificationBar.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.oneOf([SYMBOLS[1], SYMBOLS[2]]),
  showIcon: PropTypes.bool,
};

export default React.memo(NotificationBar);
