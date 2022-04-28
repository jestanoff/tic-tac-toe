import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './index';

describe('<Heading />', () => {
  test('should display a H1 heading with text', () => {
    render(<Heading title='Proud heading' />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Proud heading');
  });
});
