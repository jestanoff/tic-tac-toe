import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Fireworks from './index';

const emptyFn = () => undefined;

describe('<Fireworks />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should display third party fireworks animation when human player wins the game', () => {
    const { asFragment } = render(
      <div id="main-container">
        <Fireworks handleClick={emptyFn} />
      </div>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('should hide the execute the handleClick function when clicking on the canvas', async () => {
    const handleClickMock = jest.fn();
    render(
      <div id="main-container">
        <Fireworks handleClick={handleClickMock} />
      </div>,
    );

    const canvas = screen.getByRole('button');
    userEvent.click(canvas);

    await waitFor(() => expect(handleClickMock).toHaveBeenCalled());
    expect(handleClickMock).toHaveBeenCalledTimes(1);
    expect(handleClickMock).toHaveBeenCalledWith(expect.any(Object));
  });
});
