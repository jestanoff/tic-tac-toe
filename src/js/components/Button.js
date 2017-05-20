import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/button.css';

const Button = ({ text, handleClick }) => (
    <div className={ styles.container }>
        <button className={ styles.button } onClick={ handleClick }>{ text }</button>
    </div>
);

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;
