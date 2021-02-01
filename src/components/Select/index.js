import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.css';

const Select = ({ current, onChange, options }) => (
  <section className={styles.container}>
    <select onChange={onChange} value={current}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </section>
);

Select.propTypes = {
  current: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(Select);
