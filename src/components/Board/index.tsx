import * as React from 'react';
import * as PropTypes from 'prop-types';
import Space from 'components/Space';
import styles from './Board.css';
import { NUMBER_OF_SPACES } from '../../constants';

const Board = ({ boardStatus, handleSpaceClick }) => (
  <section className={styles.container}>
    {Array.from({ length: NUMBER_OF_SPACES }, (_, i) => i).map((index) => (
      <Space
        handleSpaceClick={handleSpaceClick}
        id={index}
        key={index}
        status={boardStatus[index]}
      />
    ))}
  </section>
);

Board.propTypes = {
  boardStatus: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleSpaceClick: PropTypes.func.isRequired,
};

export default React.memo(Board);
