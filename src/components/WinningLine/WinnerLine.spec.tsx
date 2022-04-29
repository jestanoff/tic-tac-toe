import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WinnerLine from './index';

const emptyFn = () => null;

describe('<WinnerLine />', () => {
  test('should render an animated line with color', () => {
    const { asFragment } = render(<WinnerLine color="#fff000" line={3} handleClick={emptyFn} />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('should call handleClick on clicking on the line', async () => {
    const handleClickMock = jest.fn();
    render(<WinnerLine color="#fff000" line={3} handleClick={handleClickMock} />);

    await userEvent.click(screen.getByTestId('winner-line'));
    await waitFor(() => expect(handleClickMock).toHaveBeenCalled());
    expect(handleClickMock).toHaveBeenCalledTimes(1);
    expect(handleClickMock).toHaveBeenCalledWith(expect.any(Object));
  });
});
