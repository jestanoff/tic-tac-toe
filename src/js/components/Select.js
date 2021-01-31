import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import styles from '../../css/select.css';

const Select = ({ current, onChange, options }) => {
  const children = options.map((option) => (
    <option value={option} key={uuid()}>
      {option}
    </option>
  ));

  return (
    <section className={styles.container}>
      <select onChange={onChange} value={current}>
        {children}
      </select>
    </section>
  );
};

Select.propTypes = {
  current: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
