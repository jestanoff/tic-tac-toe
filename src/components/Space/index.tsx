import * as React from 'react';
import * as PropTypes from 'prop-types';
import Mark from 'components/Mark';
import { PLAYER_X } from '../../constants';
import styles from './Space.css';

const Space = ({ id, cssClasses, handleSpaceClick, status }) => {
  const title = `${cssClasses.join(' ')} space`;
  const generateStyles = () =>
    cssClasses.length ? cssClasses.map((val) => `${styles[val]} ${styles.space}`).join(' ') : styles.space;
  const handleClick = React.useCallback(() => {
    handleSpaceClick(id);
  }, [handleSpaceClick, id]);

  return (
    <button className={generateStyles()} onClick={handleClick} title={title}>
      {status ? status === PLAYER_X ? <Mark type="cross" isAnimated /> : <Mark type="circle" isAnimated /> : ''}
    </button>
  );
};

Space.propTypes = {
  cssClasses: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSpaceClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.number,
};

Space.defaultProps = {
  status: 0,
};

export default React.memo(Space);
