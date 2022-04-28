import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './index';
import { NUMBER_OF_SPACES } from '../../constants';

describe('<Board />', () => {
  const boardStatus = [0, 2, 1, 0, 0, 0, 1, 0, 2];
  const handleCellClick = () => {};

  test('should render proper markup', () => {
    const { asFragment } = render(<Board boardStatus={boardStatus} handleSpaceClick={handleCellClick} />);

    expect(asFragment()).toMatchSnapshot();
  })

  test('should render the board according to its status', () => {
    render(<Board boardStatus={boardStatus} handleSpaceClick={handleCellClick} />);

    expect(screen.getAllByRole('button')).toHaveLength(NUMBER_OF_SPACES);
    expect(screen.getByRole('button', { name: /Top left empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Top center space marked by circle/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Top right space marked by cross/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Left middle empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Center middle empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Right middle empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Bottom left space marked by cross/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Bottom center empty space/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Bottom right space marked by circle/i })).toBeInTheDocument();
  });
});
