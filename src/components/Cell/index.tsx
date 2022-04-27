import * as React from 'react';
import * as PropTypes from 'prop-types';
import Mark from 'components/Mark';
import { PLAYER_X } from '../../constants';
import styles from './Cell.css';

const Cell = ({ id, cssClasses, handleCellClick, status }) => {
  const generateStyles = () =>
    cssClasses.length ? cssClasses.map((val) => `${styles[val]} ${styles.cell}`).join(' ') : styles.cell;
  const handleClick = React.useCallback(() => {
    handleCellClick(id);
  }, [handleCellClick, id]);

  return (
    <article className={generateStyles()} onClick={handleClick}>
      {status ? status === PLAYER_X ? <Mark type="cross" isAnimated /> : <Mark type="circle" isAnimated /> : ''}
    </article>
  );
};

Cell.propTypes = {
  cssClasses: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCellClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.number,
};

Cell.defaultProps = {
  status: 0,
};

export default React.memo(Cell);
