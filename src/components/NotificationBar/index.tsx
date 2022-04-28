import * as React from 'react';
import * as PropTypes from 'prop-types';
import Mark from 'components/Mark';
import styles from './NotificationBar.css';

const NotificationBar = ({ icon, msg, showIcon }) => (
  <h2 className={styles.container}>
    {showIcon && (
      <span className={styles.icon}>
        <Mark type={icon} overrideColor="black" />
      </span>
    )}
    {msg}
  </h2>
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

export default React.memo(NotificationBar);
