import * as React from 'react';
import Space from 'components/Space';
import styles from './Board.css';
import { NUMBER_OF_SPACES } from '../../constants';

type BoardProps = {
  boardStatus: number[],
  handleSpaceClick: (index: number) => void,
}

const Board = ({ boardStatus, handleSpaceClick }: BoardProps) => (
  <section className={styles.container}>
    {Array.from({ length: NUMBER_OF_SPACES }, (_, i) => i).map((index) => (
      <Space
        key={index}
        handleSpaceClick={handleSpaceClick}
        id={index}
        status={boardStatus[index]}
      />
    ))}
  </section>
);

export default React.memo(Board);
