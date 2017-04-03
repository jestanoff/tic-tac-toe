import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import styles from '../../css/select.css';

const Select = ({ current, onChange, options }) => {
    const children = options.map((option, i) =>
        <MenuItem value={ option } key={ i } primaryText={ option } />,
    );

    return (
        <section className={ styles.container } >
            <SelectField
              value={ current } onChange={ onChange }
              selectedMenuItemStyle={ { color: '#1485bd' } }
            >
                { children }
            </SelectField>
        </section>
    );
};

Select.propTypes = {
    current: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
