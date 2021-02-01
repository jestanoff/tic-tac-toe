import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Mark from '../Mark';
import styles from './NotificationBar.css';

const NotificationBar = ({ icon, msg, showIcon }) => (
  <div className={styles.container}>
    {showIcon && (
      <span className={styles.icon}>
        <Mark type={icon} overrideColor="black" />
      </span>
    )}
    {msg}
  </div>
);

NotificationBar.propTypes = {
  msg: PropTypes.string.isRequired,
  icon: PropTypes.string,
  showIcon: PropTypes.bool,
};

NotificationBar.defaultProps = {
  icon: '',
  showIcon: false,
};

export default memo(NotificationBar);
