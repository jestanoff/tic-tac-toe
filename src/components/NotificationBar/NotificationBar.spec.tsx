import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationBar from './index';

describe('<NotificationBar />', () => {
  test('should show notification message with preceding cross icon', () => {
    const { asFragment } = render(<NotificationBar icon="cross" message="Important! message" showIcon />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Important! message');
    expect(screen.getByTestId('cross-mark')).toBeInTheDocument();
    expect(screen.queryByTestId('circle-mark')).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should show notification message with preceding circle icon', () => {
    render(<NotificationBar icon="circle" message="A Message" showIcon />);

    expect(screen.getByTestId('circle-mark')).toBeInTheDocument();
    expect(screen.queryByTestId('cross-mark')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('A Message');
  });

  test('should show only notification message without icon', () => {
    render(<NotificationBar icon="circle" message="Only Message" showIcon={false} />);

    expect(screen.queryByTestId('circle-mark')).not.toBeInTheDocument();
    expect(screen.queryByTestId('cross-mark')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Only Message');
  });
});
