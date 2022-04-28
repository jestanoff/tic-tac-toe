import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Mark from './index';

describe('<Mark />', () => {
  test('should render cross mark as SVG', () => {
    render(<Mark type='cross' />);

    expect(screen.getByTestId('cross-mark')).toBeInTheDocument();
    expect(screen.queryByTestId('circle-mark')).not.toBeInTheDocument();
    expect(screen.getByTestId('cross-mark')).toMatchSnapshot();
  });

  test('should render circle mark as SVG', () => {
    render(<Mark type='circle' />);

    expect(screen.getByTestId('circle-mark')).toBeInTheDocument();
    expect(screen.queryByTestId('cross-mark')).not.toBeInTheDocument();
    expect(screen.getByTestId('circle-mark')).toMatchSnapshot();
  });

  test('should add animation to circle mark', () => {
    render(<Mark isAnimated type='circle' />);

    expect(screen.getByTestId('circle-mark').children[0].children[0].getAttribute('dur')).toBe('250ms');
  });

  test('should not add animation to circle mark', () => {
    render(<Mark isAnimated={false} type='circle' />);

    expect(screen.getByTestId('circle-mark').children[0].children[0].getAttribute('dur')).toBe('1ms');
  });

  test('should add animation to cross mark', () => {
    render(<Mark isAnimated type='cross' />);
    const mark = screen.getByTestId('cross-mark');

    expect(mark.children[0].children[0].getAttribute('dur')).toBe('125ms');
    expect(mark.children[0].children[1].getAttribute('dur')).toBe('125ms');
    expect(mark.children[1].children[0].getAttribute('dur')).toBe('125ms');
    expect(mark.children[1].children[0].getAttribute('begin')).toBe('125ms');
    expect(mark.children[1].children[1].getAttribute('dur')).toBe('125ms');
    expect(mark.children[1].children[1].getAttribute('begin')).toBe('125ms');
    expect(mark.children[1].children[2].getAttribute('dur')).toBe('125ms');
    expect(mark.children[1].children[2].getAttribute('begin')).toBe('125ms');
  });

  test('should not add animation to cross mark', () => {
    render(<Mark isAnimated={false} type='cross' />);
    const mark = screen.getByTestId('cross-mark');

    expect(mark.children[0].children[0].getAttribute('dur')).toBe('1ms');
    expect(mark.children[0].children[1].getAttribute('dur')).toBe('1ms');
    expect(mark.children[1].children[0].getAttribute('dur')).toBe('1ms');
    expect(mark.children[1].children[0].getAttribute('begin')).toBe('0s');
    expect(mark.children[1].children[1].getAttribute('dur')).toBe('1ms');
    expect(mark.children[1].children[1].getAttribute('begin')).toBe('0s');
    expect(mark.children[1].children[2].getAttribute('dur')).toBe('1ms');
    expect(mark.children[1].children[2].getAttribute('begin')).toBe('0s');
  });
});
