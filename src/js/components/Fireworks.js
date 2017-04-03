import React, { Component, PropTypes } from 'react';
import { canvas } from '../../css/fireworks.css';

class Fireworks extends Component {
    componentDidMount() {
        window.startFireworks();
        setTimeout(this.props.handleClick, 60000);
    }

    render() {
        return <canvas id='canvas' className={ canvas } onClick={ this.props.handleClick } />;
    }
}

Fireworks.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default Fireworks;
