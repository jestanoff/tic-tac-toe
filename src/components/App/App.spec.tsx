import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import App from './index';

describe('<App />', () => {
  test('should render the initial state of the game', () => {
    const { asFragment } = render(<App />);

    expect(screen.getByRole('combobox', { name: 'Difficulty selector' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tic Tac Toe');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Start game by clicking on any cell');
    expect(screen.getByRole('button', { name: /^top left space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^top center space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^top right space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^left middle space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^center middle space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^right middle space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^bottom left space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^bottom center space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^bottom right space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
