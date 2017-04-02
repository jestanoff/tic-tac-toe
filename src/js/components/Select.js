import React, { PropTypes } from 'react';
import styles from '../../css/select.css';

const Select = ({ current, onChange, options }) => (
    <section className={ styles.container } >
        <select value={ current } onChange={ onChange } className={ styles.select }>
            { options.map((option, i) =>
                <option value={ option } key={ i }>{ option }</option>,
            )}
        </select>
    </section>
);

Select.propTypes = {
    current: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
