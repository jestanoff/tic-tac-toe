import React, { Component } from 'react';
import Button from './components/Button';
import Board from './containers/Board';
import Header from './components/Header';
import NotificationBar from './components/NotificationBar';
import WinningLine from './components/WinningLine';
import styles from '../css/ticTacToe.css';
import { checkBoardSolved, computerAI, getNotification } from './helpers';
import {
        AI_WAITING_TIME, DRAW, PLAYER_O, PLAYER_X, NUM_OF_CELLS, SYMBOLS, UNRESOLVED,
    } from './constants/constants';

const initialState = {
    boardStatus: Array(NUM_OF_CELLS).fill(0),
    notification: 'Start game by clicking any cell',
    isUIdisabled: false,
    playerTurn: PLAYER_X,
    outcome: UNRESOLVED,
};

class TicTacToeApp extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    resetGame = () => this.setState(initialState);

    handleCellClick = (id) => {
        const { boardStatus, isUIdisabled, outcome, playerTurn } = this.state;
        if (boardStatus[id] === 0 && !isUIdisabled) {
            const nextBoardStatus = boardStatus.map((status, i) => (id === i ? PLAYER_X : status));
            const nextOutcome = checkBoardSolved(nextBoardStatus);
            const nexPlayerTurn = playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X;
            this.setState({
                boardStatus: nextBoardStatus,
                isUIdisabled: true,
                notification: getNotification(nextOutcome),
                playerTurn: nexPlayerTurn,
                outcome: nextOutcome,
            }, () => {
                if (nextOutcome === UNRESOLVED) {
                    setTimeout(() => {
                        const AIBoardStatus = computerAI(nextBoardStatus);
                        const AIOutcome = checkBoardSolved(AIBoardStatus);
                        this.setState({
                            boardStatus: AIBoardStatus,
                            isUIdisabled: false,
                            notification: getNotification(AIOutcome),
                            playerTurn: nexPlayerTurn === PLAYER_X ? PLAYER_O : PLAYER_X,
                            outcome: AIOutcome,
                        });
                    }, AI_WAITING_TIME);
                }
            });
        }

        if (outcome === DRAW) this.resetGame();
    }

    render() {
        const { outcome, playerTurn, boardStatus } = this.state;
        const showIcon = boardStatus.some(Boolean) && outcome !== 0;
        const icon = SYMBOLS[outcome[0]] || SYMBOLS[playerTurn];
        const showWinningLine = outcome[1];

        return (
            <div className={ styles.container }>
                <Header title='Tic Tac Toe' />
                <NotificationBar
                  icon={ icon }
                  msg={ this.state.notification }
                  showIcon={ showIcon }
                />
                <div className={ styles.board }>
                    { showWinningLine !== undefined && <WinningLine
                      line={ showWinningLine }
                      handleClick={ this.resetGame }
                    />}
                    <Board
                      boardStatus={ boardStatus }
                      handleCellClick={ this.handleCellClick }
                    />
                </div>
                <Button text='Reset' handleClick={ this.resetGame } />
            </div>
        );
    }
}

export default TicTacToeApp;
