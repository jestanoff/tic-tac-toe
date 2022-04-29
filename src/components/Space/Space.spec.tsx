import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Space from './index';

const emptyFn = () => undefined;

describe('<Space />', () => {
  test('should render a top space', () => {
    const { asFragment } = render(<Space id={0} handleSpaceClick={emptyFn} />);

    expect(screen.getByRole('button', { name: /^Top left empty space$/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render top left empty space', () => {
    render(<Space id={0} handleSpaceClick={emptyFn} />);
    expect(screen.getByRole('button', { name: /^Top left empty space$/i })).toHaveClass('space top left');
  });

  test('should render top left marked by cross space', () => {
    render(<Space id={0} handleSpaceClick={emptyFn} status={1} />);
    expect(screen.getByRole('button', { name: /^Top left space marked by cross$/i })).toHaveClass('space top left');
  });

  test('should render top left marked by circle space', () => {
    render(<Space id={0} handleSpaceClick={emptyFn} status={2} />);
    expect(screen.getByRole('button', { name: /^Top left space marked by circle$/i })).toHaveClass('space top left');
  });

  test('should render top center empty space', () => {
    render(<Space id={1} handleSpaceClick={emptyFn} />);
    expect(screen.getByRole('button', { name: /^Top center empty space$/i })).toHaveClass('space top center');
  });

  test('should render top center marked by cross space', () => {
    render(<Space id={1} handleSpaceClick={emptyFn} status={1} />);
    expect(screen.getByRole('button', { name: /^Top center space marked by cross$/i })).toHaveClass('space top center');
  });

  test('should render top center marked by circle space', () => {
    render(<Space id={1} handleSpaceClick={emptyFn} status={2} />);
    expect(screen.getByRole('button', { name: /^Top center space marked by circle$/i })).toHaveClass(
      'space top center',
    );
  });

  test('should render top right empty space', () => {
    render(<Space id={2} handleSpaceClick={emptyFn} />);
    expect(screen.getByRole('button', { name: /^Top right empty space$/i })).toHaveClass('space top right');
  });

  test('should render top right marked by cross space', () => {
    render(<Space id={2} handleSpaceClick={emptyFn} status={1} />);
    expect(screen.getByRole('button', { name: /^Top right space marked by cross$/i })).toHaveClass('space top right');
  });

  test('should render top right marked by circle space', () => {
    render(<Space id={2} handleSpaceClick={emptyFn} status={2} />);
    expect(screen.getByRole('button', { name: /^Top right space marked by circle$/i })).toHaveClass('space top right');
  });

  test('should render left middle empty space', () => {
    render(<Space id={3} handleSpaceClick={emptyFn} />);
    expect(screen.getByRole('button', { name: /^Left middle empty space$/i })).toHaveClass('space left middle');
  });

  test('should render left middle marked by cross space', () => {
    render(<Space id={3} handleSpaceClick={emptyFn} status={1} />);
    expect(screen.getByRole('button', { name: /^Left middle space marked by cross$/i })).toHaveClass(
      'space left middle',
    );
  });

  test('should render left middle marked by circle space', () => {
    render(<Space id={3} handleSpaceClick={emptyFn} status={2} />);
    expect(screen.getByRole('button', { name: /^Left middle space marked by circle$/i })).toHaveClass(
      'space left middle',
    );
  });

  test('should render center middle empty space', () => {
    render(<Space id={4} handleSpaceClick={emptyFn} />);
    expect(screen.getByRole('button', { name: /^Center middle empty space$/i })).toHaveClass('space center middle');
  });

  test('should render center middle marked by cross space', () => {
    render(<Space id={4} handleSpaceClick={emptyFn} status={1} />);
    expect(screen.getByRole('button', { name: /^Center middle space marked by cross$/i })).toHaveClass(
      'space center middle',
    );
  });

  test('should render center middle marked by circle space', () => {
    render(<Space id={4} handleSpaceClick={emptyFn} status={2} />);
    expect(screen.getByRole('button', { name: /^Center middle space marked by circle$/i })).toHaveClass(
      'space center middle',
    );
  });

  test('should execute handleSpaceClick function on click', async () => {
    const handleSpaceClickMock = jest.fn();
    render(<Space id={6} handleSpaceClick={handleSpaceClickMock} status={1} />);

    await userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(handleSpaceClickMock).toHaveBeenCalled());
    expect(handleSpaceClickMock).toHaveBeenCalledTimes(1);
    expect(handleSpaceClickMock).toHaveBeenCalledWith(6);
  });
});
