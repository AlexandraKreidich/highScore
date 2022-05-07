import { fireEvent, render, screen } from '@testing-library/react';
import { Generator } from './Generator';

test('button click generates new value', () => {
  const mockOnClick = jest.fn();
  render(<Generator onClick={mockOnClick} clicksCount={0} />);
  const btn = screen.getByText('+- Click');
  fireEvent(btn, new MouseEvent('click', { bubbles: true, cancelable: true }));
  expect(mockOnClick).toHaveBeenCalledTimes(1);
  expect(mockOnClick.mock.calls[0][0]).toBeGreaterThan(-101);
  expect(mockOnClick.mock.calls[0][0]).toBeLessThanOrEqual(100);
});