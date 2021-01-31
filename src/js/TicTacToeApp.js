import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
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
  AI_WAITING_TIME,
  DRAW,
  PLAYER_O,
  PLAYER_X,
  NUM_OF_CELLS,
  SYMBOLS,
  UNRESOLVED,
  EASY,
  HARD,
  RESET,
  DARK_GRAY,
  WHITE,
} from './constants/constants';
import '../css/font.css';

const initialState = {
  boardStatus: new Array(NUM_OF_CELLS).fill(0),
  difficulty: EASY,
  isBoardUiDisabled: false,
  notification: 'Start game by clicking on any cell',
  outcome: { winner: UNRESOLVED, line: UNRESOLVED },
  playerTurn: PLAYER_X,
  history: [{ board: new Array(NUM_OF_CELLS).fill(0) }],
};

class TicTacToeApp extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);
    this.timerAI = 0;
  }

  componentDidUpdate() {
    const { boardStatus, difficulty, outcome, playerTurn, history } = this.state;
    if (outcome.winner === UNRESOLVED && playerTurn === PLAYER_O) {
      this.timerAI = setTimeout(() => {
        const AIBoardStatus = computeAIMove(boardStatus, difficulty);
        const AIOutcome = isGameOver(AIBoardStatus);
        this.setState({
          boardStatus: AIBoardStatus,
          isBoardUiDisabled: false,
          notification: getNotification(AIOutcome.winner),
          playerTurn: PLAYER_X,
          outcome: AIOutcome,
          history: [...history, { board: AIBoardStatus }],
        });
      }, AI_WAITING_TIME);
    }
  }

  resetGame = () => {
    const cx = this.board.classList;
    cx.contains(styles.flip) ? cx.remove(styles.flip) : cx.add(styles.flip); // eslint-disable-line no-unused-expressions
    clearTimeout(this.timerAI);
    setTimeout(() => {
      this.setState(Object.assign({}, initialState, { difficulty: this.state.difficulty }));
    }, 200);
  };

  handleCellClick = (cellIndex) => {
    const { boardStatus, isBoardUiDisabled, outcome, history } = this.state;
    if (boardStatus[cellIndex] === 0 && !isBoardUiDisabled) {
      const nextBoardStatus = boardStatus.slice();
      nextBoardStatus[cellIndex] = PLAYER_X;
      const nextOutcome = isGameOver(nextBoardStatus);
      this.setState({
        boardStatus: nextBoardStatus,
        isBoardUiDisabled: true,
        notification: getNotification(nextOutcome.winner),
        playerTurn: PLAYER_O,
        outcome: nextOutcome,
        history: [...history, { board: nextBoardStatus }],
      });
    }
    if (outcome.winner === DRAW) this.resetGame();
  };

  handleDifficultyChange = (event) => {
    this.setState(
      {
        difficulty: event.target.value,
        outcome: { winner: UNRESOLVED, line: UNRESOLVED },
      },
      () => this.resetGame(),
    );
  };

  render() {
    const { boardStatus, difficulty, outcome, playerTurn } = this.state;
    const showIcon = boardStatus.some(Boolean) && outcome.winner !== 0;
    const icon = SYMBOLS[outcome.winner] || SYMBOLS[playerTurn];
    const showWinningLine = outcome.line > UNRESOLVED;

    return (
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={false}
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div className={styles.container} id="main-container">
          {outcome.winner === PLAYER_X && <Fireworks handleClick={this.resetGame} />}
          <Select current={difficulty} options={[EASY, HARD]} onChange={this.handleDifficultyChange} />
          <Header title="Tic Tac Toe" />
          <ScoresSection outcome={outcome.winner} playerTurn={playerTurn} />
          <NotificationBar icon={icon} msg={this.state.notification} showIcon={showIcon} />
          <section
            className={styles.board}
            ref={(board) => {
              this.board = board;
            }}
          >
            <div className={styles.innerContainer}>
              {showWinningLine && (
                <WinningLine
                  line={outcome.line}
                  handleClick={this.resetGame}
                  color={outcome.winner === PLAYER_X ? DARK_GRAY : WHITE}
                />
              )}
              <Board boardStatus={boardStatus} handleCellClick={this.handleCellClick} />
            </div>
          </section>
          <Button text={RESET} handleClick={this.resetGame} />
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default TicTacToeApp;
