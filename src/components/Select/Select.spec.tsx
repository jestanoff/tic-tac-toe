import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './index';

describe('<Select />', () => {
  test('should render a select html control with options', () => {
    const { asFragment } = render(
      <Select current='Pick Me' options={['Choose Me', 'Pick Me']} handleChange={() => {}} />,
    );

    expect(screen.getByRole('combobox', { name: /Difficulty selector/i })).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(2);
    expect(screen.getByRole('option', { name: /choose me/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /pick me/i })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should execute handleChange when a non active option is picked', async () => {
    expect.hasAssertions();
    const handleChangeMock = jest.fn();
    render(<Select current='1' options={['1', '2', '3']} handleChange={handleChangeMock} />);

    await userEvent.selectOptions(screen.getByRole('combobox', { name: /Difficulty selector/i }), '3')
    await waitFor(() => expect(handleChangeMock).toHaveBeenCalled());
    expect(handleChangeMock).toHaveBeenCalledTimes(1);
    expect(handleChangeMock).toHaveBeenCalledWith(expect.any(Object));
  });
});
