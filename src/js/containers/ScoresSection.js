import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Score from '../components/Score';
import styles from '../../css/scoresSection.css';
import { SYMBOLS, PLAYER_X, PLAYER_O, M_DASH } from '../constants/constants';

class ScoresSection extends Component {
    constructor(props) {
        super(props);
        this.state = { [PLAYER_X]: M_DASH, [PLAYER_O]: M_DASH };
    }

    componentWillReceiveProps({ outcome }) {
        if (outcome === PLAYER_X) {
            this.setState({ [PLAYER_X]: this.incrementScore(PLAYER_X) });
        } else if (outcome === PLAYER_O) {
            this.setState({ [PLAYER_O]: this.incrementScore(PLAYER_O) });
        }
    }

    incrementScore(player) {
        return Number.isInteger(this.state[player]) ? this.state[player] + 1 : 1;
    }

    isScoreActive(player) {
        const { playerTurn, outcome } = this.props;
        if (outcome === 0) return false;
        return outcome > 0 ? outcome === player : playerTurn === player;
    }

    render() {
        return (
            <section className={ styles.container }>
                <Score
                  score={ this.state[PLAYER_X].toString() }
                  isActive={ this.isScoreActive(PLAYER_X) }
                  symbol={ SYMBOLS[PLAYER_X] }
                />
                <Score
                  score={ this.state[PLAYER_O].toString() }
                  isActive={ this.isScoreActive(PLAYER_O) }
                  symbol={ SYMBOLS[PLAYER_O] }
                />
            </section>
        );
    }
}

ScoresSection.propTypes = {
    outcome: PropTypes.number,
    playerTurn: PropTypes.number.isRequired,
};

ScoresSection.defaultProps = {
    outcome: -1,
};

export default ScoresSection;
