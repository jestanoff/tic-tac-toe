import * as React from 'react';
import { render, screen } from '@testing-library/react'
import App from './index';

describe('<App />', () => {
  test('should render the initial state of the game board with difficulty selector and start notification', () => {
    const { asFragment } = render(<App />);

    expect(screen.getByRole('combobox', { name: /Difficulty selector/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tic Tac Toe');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Start the game by selecting any empty space');
    expect(screen.getByRole('button', { name: /^Top left empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Top center empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Top right empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Left middle empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Center middle empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Right middle empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Bottom left empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Bottom center empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Bottom right empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should show difficulty selector with "Easy" selected by default', async () => {
    expect.assertions(3);
    render(<App />);

    await screen.findByRole('combobox', { name: /Difficulty selector/i }); // Not actually async but just in case it becomes
    const easyOption: HTMLOptionElement = screen.getByRole('option', { name: /Easy/i });
    expect(easyOption).toBeInTheDocument();
    expect(easyOption.selected).toBe(true)
    expect(screen.getByRole('option', { name: /Impossible/i })).toBeInTheDocument();
  });

  test('should show the score board with initially no score for each player', () => {
    render(<App />);

    expect(screen.getByTestId('score-for-player-cross')).toHaveTextContent('—');
    expect(screen.getByTitle('Player cross has 0 points')).toBeInTheDocument();
    expect(screen.getByTestId('score-for-player-circle')).toHaveTextContent('—');
    expect(screen.getByTitle('Player circle has 0 points')).toBeInTheDocument();
  });

  test('should display a notification message helping the human player make its first move', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Start the game by selecting any empty space');
    expect(screen.getByTitle('Player cross can start the game by selecting any empty space')).toBeInTheDocument();
  });
  
  test('should show "Reset" button that is disabled if no spaces has been marked', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: /Reset/i })).toBeDisabled();
  });
});
