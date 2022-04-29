import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';

const emptyFn = () => undefined;

describe('<Button />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render disabled button with text', () => {
    render(<Button disabled handleClick={emptyFn} text="A button" />);
    const button = screen.getByRole('button', { name: /^A button$/i });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toMatchInlineSnapshot(`
      <button
        class="button"
        disabled=""
      >
        A button
      </button>
    `);
  });

  test('should render enabled button with text', () => {
    render(<Button disabled={false} handleClick={emptyFn} text="Enabled button" />);
    const button = screen.getByRole('button', { name: /^Enabled button$/i });

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test('should execute handleClick function when clicked', async () => {
    expect.hasAssertions();
    const handleClickMock = jest.fn();
    render(<Button disabled={false} handleClick={handleClickMock} text="Clickable button" />);
    const button = screen.getByRole('button', { name: /^Clickable button$/i });

    expect(button).toBeInTheDocument();
    userEvent.click(button);

    await waitFor(() => expect(handleClickMock).toHaveBeenCalled());
    expect(handleClickMock).toHaveBeenCalledTimes(1);
    expect(handleClickMock).toHaveBeenCalledWith(expect.any(Object));
  });
});
