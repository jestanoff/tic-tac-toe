import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Cell from 'components/Cell';
import styles from './Board.css';
import { CSS_CLASSES, NUM_OF_CELLS } from 'constants';

const Board = ({ boardStatus, handleCellClick }) => (
  <section className={styles.container}>
    {Array.from({ length: NUM_OF_CELLS }, (_, i) => i).map((index) => (
      <Cell
        cssClasses={CSS_CLASSES[index]}
        handleCellClick={handleCellClick}
        id={index}
        key={index}
        status={boardStatus[index]}
      />
    ))}
  </section>
);

Board.propTypes = {
  boardStatus: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleCellClick: PropTypes.func.isRequired,
};

export default memo(Board);
