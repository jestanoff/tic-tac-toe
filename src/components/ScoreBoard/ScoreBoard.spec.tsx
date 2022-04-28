import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ScoreBoard from './index';

describe('<ScoreBoard />', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('should render the score board with empty score for each player', () => {
    const { asFragment } = render(<ScoreBoard playerTurn={1} />);

    expect(screen.getByTitle('Player cross has 0 points')).toBeInTheDocument();
    expect(screen.getByTitle('Player circle has 0 points')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should increment the score by 1 when circle player wins', () => {
    render(<ScoreBoard playerTurn={1} outcome={1} />);

    expect(screen.getByTitle('Player cross has 1 points')).toBeInTheDocument();
    expect(screen.getByTitle('Player circle has 0 points')).toBeInTheDocument();
  });

  test('should increment the score by 1 when circle player wins', () => {
    render(<ScoreBoard playerTurn={2} outcome={2} />);

    expect(screen.getByTitle('Player cross has 0 points')).toBeInTheDocument();
    expect(screen.getByTitle('Player circle has 1 points')).toBeInTheDocument();
  });

  test('should get the score from localStorage', () => {
    localStorage.playerX = 10;
    localStorage.playerO = 99;
    render(<ScoreBoard playerTurn={1} />);

    expect(screen.getByTitle('Player cross has 10 points')).toBeInTheDocument();
    expect(screen.getByTitle('Player circle has 99 points')).toBeInTheDocument();
  });

  test('should persist the score into localStorage', () => {
    localStorage.playerX = 5;
    localStorage.playerO = 5;
    render(<ScoreBoard playerTurn={2} outcome={2} />);

    expect(screen.getByTitle('Player cross has 5 points')).toBeInTheDocument();
    expect(screen.getByTitle('Player circle has 6 points')).toBeInTheDocument();
    expect(localStorage.playerX).toBe('5');
    expect(localStorage.playerO).toBe('6');
  });

  test('should show the player that has to play their turn as active', () => {
    render(<ScoreBoard playerTurn={2} />);

    expect(screen.getByTestId('score-for-player-circle')).toHaveClass('active');
    expect(screen.getByTestId('score-for-player-cross')).toHaveClass('container');
  });
});
