import * as React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from 'components/Button';
import Board from 'components/Board';
import Header from 'components/Header';
import NotificationBar from 'components/NotificationBar';
import WinningLine from 'components/WinningLine';
import ScoreBoard from 'components/ScoreBoard';
import Select from 'components/Select';
import Fireworks from 'components/Fireworks';
import { isGameOver, computeAIMove, getNotification } from 'helpers';
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
} from '../../constants';
import 'css/font.css';
import styles from './App.css';

interface Board {
  board: Array<number>;
}

interface Outcome {
  winner: number;
  line: number;
}

interface State {
  boardStatus: Array<number>;
  difficulty: string;
  history: Array<Board>;
  isBoardUiDisabled: boolean;
  notification: string;
  outcome: Outcome;
  playerTurn: number;
  timeoutId?: ReturnType<typeof setTimeout>;
}

const initialState: State = {
  boardStatus: Array(NUM_OF_CELLS).fill(0),
  difficulty: EASY,
  history: [{ board: Array(NUM_OF_CELLS).fill(0) }],
  isBoardUiDisabled: false,
  notification: 'Start game by clicking on any cell',
  outcome: { winner: UNRESOLVED, line: UNRESOLVED },
  playerTurn: PLAYER_X,
};
const options = [EASY, HARD];

const TicTacToeApp = () => {
  const [
    { boardStatus, difficulty, isBoardUiDisabled, notification, outcome, playerTurn, timeoutId },
    setState,
  ] = React.useState(initialState);
  const board = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (outcome.winner === UNRESOLVED && playerTurn === PLAYER_O) {
      const id = setTimeout(() => {
        const AIBoardStatus = computeAIMove(boardStatus, difficulty);
        const AIOutcome = isGameOver(AIBoardStatus);

        setState(
          (prevState: State): State => ({
            ...prevState,
            boardStatus: AIBoardStatus,
            isBoardUiDisabled: false,
            notification: getNotification(AIOutcome.winner),
            playerTurn: PLAYER_X,
            outcome: AIOutcome,
            history: [...prevState.history, { board: AIBoardStatus }],
          }),
        );
      }, AI_WAITING_TIME);

      setState((prevState) => {
        return { ...prevState, timeoutId: id };
      });
    }
  }, [boardStatus, difficulty, outcome, playerTurn]);

  const resetGame = React.useCallback(() => {
    if (board.current) {
      const cx = board.current?.classList ?? '';
      cx.contains(styles.flip) ? cx.remove(styles.flip) : cx.add(styles.flip);
      setState((prevState) => ({ ...initialState, difficulty: prevState.difficulty }));
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }, [timeoutId]);

  const handleSpaceClick = React.useCallback(
    (cellIndex) => {
      if (boardStatus[cellIndex] === 0 && !isBoardUiDisabled) {
        const nextBoardStatus = boardStatus.slice();
        nextBoardStatus[cellIndex] = PLAYER_X;
        const nextOutcome = isGameOver(nextBoardStatus);
        setState((prevState) => ({
          ...prevState,
          boardStatus: nextBoardStatus,
          isBoardUiDisabled: true,
          notification: getNotification(nextOutcome.winner),
          playerTurn: PLAYER_O,
          outcome: nextOutcome,
          history: [...prevState.history, { board: nextBoardStatus }],
        }));
      }

      if (outcome.winner === DRAW) resetGame();
    },
    [boardStatus, isBoardUiDisabled, outcome, resetGame],
  );

  const handleDifficultyChange = React.useCallback(
    (event) => {
      setState((prevState) => ({
        ...prevState,
        difficulty: event.target.value,
      }));

      resetGame();
    },
    [resetGame],
  );

  const showIcon = boardStatus.some(Boolean) && outcome.winner !== 0;
  const icon = SYMBOLS[outcome.winner] || SYMBOLS[playerTurn];
  const showWinningLine = outcome.line > UNRESOLVED;
  const timeout = React.useMemo(() => ({ enter: 300, exit: 1 }), []);

  return (
    <TransitionGroup>
      <CSSTransition classNames="example" timeout={timeout}>
        <div className={styles.container} id="main-container">
          {outcome.winner === PLAYER_X && <Fireworks handleClick={resetGame} />}
          <Select current={difficulty} options={options} onChange={handleDifficultyChange} />
          <Header title="Tic Tac Toe" />
          <ScoreBoard outcome={outcome.winner} playerTurn={playerTurn} />
          <NotificationBar icon={icon} msg={notification} showIcon={showIcon} />
          <section className={styles.board} ref={board}>
            <div className={styles.innerContainer}>
              {showWinningLine && (
                <WinningLine
                  line={outcome.line}
                  handleClick={resetGame}
                  color={outcome.winner === PLAYER_X ? DARK_GRAY : WHITE}
                />
              )}
              <Board boardStatus={boardStatus} handleSpaceClick={handleSpaceClick} />
            </div>
          </section>
          <Button text={RESET} handleClick={resetGame} />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default React.memo(TicTacToeApp);
