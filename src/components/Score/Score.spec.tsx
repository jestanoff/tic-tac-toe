import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Score from './index';

describe('<Score />', () => {
  test('should render active score for cross', () => {
    const { asFragment } = render(<Score isActive score="?" symbol="cross" />);

    expect(screen.getByTestId('score-for-player-cross')).toHaveClass('active');
    expect(screen.queryByTestId('score-for-player-cross')).not.toHaveClass('container');
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render not active score', () => {
    render(<Score isActive={false} score="-" symbol="cross" />);

    expect(screen.getByTestId('score-for-player-cross')).toHaveClass('container');
    expect(screen.queryByTestId('score-for-player-cross')).not.toHaveClass('active');
  });

  test('should render 5 score points', () => {
    render(<Score isActive score={5} symbol="circle" />);

    expect(screen.getByTitle('Player circle has 5 points')).toHaveTextContent('5');
  });
});
