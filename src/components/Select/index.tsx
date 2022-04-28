import * as React from 'react';
import styles from './Select.css';

type SelectProps = {
  current: string,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  options: string[],
};

const Select = ({ current, onChange, options }: SelectProps) => (
  <section className={styles.container}>
    <select onChange={onChange} title='Difficulty selector' value={current}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </section>
);

export default React.memo(Select);
