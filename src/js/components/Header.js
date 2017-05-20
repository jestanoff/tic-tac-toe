import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/header.css';

const Header = ({ title }) => (
    <h1 className={ styles.header }>{ title }</h1>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
