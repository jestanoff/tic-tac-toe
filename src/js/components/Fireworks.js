import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/fireworks.css';
import { startFireworks } from '../helpers';

class Fireworks extends Component {
  componentDidMount() {
    startFireworks();
    this.timer = setTimeout(this.props.handleClick, 30000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <canvas id="canvas" className={styles.canvas} onClick={this.props.handleClick} />;
  }
}

Fireworks.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Fireworks;
