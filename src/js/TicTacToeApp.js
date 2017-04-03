import React, { Component } from 'react';
import Button from './components/Button';
import Board from './containers/Board';
import Header from './components/Header';
import NotificationBar from './components/NotificationBar';
import WinningLine from './components/WinningLine';
import ScoresSection from './containers/ScoresSection';
import Select from './components/Select';
import Fireworks from './components/Fireworks';
import styles from '../css/ticTacToe.css';
import { isGameOver, computeAIMove, getNotification } from './helpers';
import {
  AI_WAITING_TIME, DRAW, PLAYER_O, PLAYER_X, NUM_OF_CELLS, SYMBOLS, UNRESOLVED, EASY, HARD, RESET,
} from './constants/constants';

const initialState = {
    boardStatus: Array(NUM_OF_CELLS).fill(0),
    difficulty: EASY,
    isUIdisabled: false,
    notification: 'Start game by clicking on any cell',
    outcome: { winner: UNRESOLVED, line: UNRESOLVED },
    playerTurn: PLAYER_X,
};

class TicTacToeApp extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.timerAI = 0;
    }

    resetGame = () => {
        clearTimeout(this.timerAI);
        this.setState(Object.assign(initialState, { difficulty: this.state.difficulty }));
    }

    handleCellClick = (id) => {
        const { boardStatus, isUIdisabled, outcome, playerTurn } = this.state;
        if (boardStatus[id] === 0 && !isUIdisabled) {
            const nextBoardStatus = boardStatus.map((status, i) => (id === i ? PLAYER_X : status));
            const nextOutcome = isGameOver(nextBoardStatus);
            const nexPlayerTurn = playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X;
            this.setState({
                boardStatus: nextBoardStatus,
                isUIdisabled: true,
                notification: getNotification(nextOutcome.winner),
                playerTurn: nexPlayerTurn,
                outcome: nextOutcome,
            }, () => {
                if (nextOutcome.winner === UNRESOLVED) {
                    this.timerAI = setTimeout(() => {
                        const { difficulty } = this.state;
                        const AIBoardStatus = computeAIMove(nextBoardStatus, difficulty);
                        const AIOutcome = isGameOver(AIBoardStatus);
                        this.setState({
                            boardStatus: AIBoardStatus,
                            isUIdisabled: false,
                            notification: getNotification(AIOutcome.winner),
                            playerTurn: nexPlayerTurn === PLAYER_X ? PLAYER_O : PLAYER_X,
                            outcome: AIOutcome,
                        });
                    }, AI_WAITING_TIME);
                }
            });
        }
        if (outcome.winner === DRAW) this.resetGame();
    }

    handleDifficultyChange = (event) => {
        this.setState({ difficulty: event.target.value,
            outcome: { winner: UNRESOLVED, line: UNRESOLVED } },
            () => this.resetGame());
    }

    render() {
        const { boardStatus, difficulty, outcome, playerTurn } = this.state;
        const showIcon = boardStatus.some(Boolean) && outcome.winner !== 0;
        const icon = SYMBOLS[outcome.winner] || SYMBOLS[playerTurn];
        const showWinningLine = outcome.line > UNRESOLVED;

        return (
            <div className={ styles.container } id='main-container'>
                { outcome.winner === PLAYER_X && <Fireworks handleClick={ this.resetGame } /> }
                <Select
                  current={ difficulty }
                  options={ [EASY, HARD] }
                  onChange={ this.handleDifficultyChange }
                />
                <Header title='Tic Tac Toe' />
                <ScoresSection
                  outcome={ outcome.winner }
                  playerTurn={ playerTurn }
                />
                <NotificationBar
                  icon={ icon }
                  msg={ this.state.notification }
                  showIcon={ showIcon }
                />
                <section className={ styles.board }>
                    <div className={ styles.innerContainer }>
                        { showWinningLine && <WinningLine
                          line={ outcome.line }
                          handleClick={ this.resetGame }
                        />}
                        <Board
                          boardStatus={ boardStatus }
                          handleCellClick={ this.handleCellClick }
                        />
                    </div>
                </section>
                <Button text={ RESET } handleClick={ this.resetGame } />
            </div>
        );
    }
}

export default TicTacToeApp;
