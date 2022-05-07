import { render, screen } from '@testing-library/react';
import { RecordsTable } from './RecordsTable';

test('renders records', () => {
  let items = [
    { name: "Jane Doe", totalPoints: 157, clicks: 5 },
    { name: "Lily Allen", totalPoints: 234, clicks: 8 },
    { name: "John Smith", totalPoints: 390, clicks: 10 },
    { name: "Alexandra", totalPoints: 200, clicks: 1 }
  ];

  render(<RecordsTable items={items} onSortChanged={jest.fn()} sortField='totalPoints'></RecordsTable>);
  let rows = screen.queryAllByTestId('table-row');
  expect(rows).toHaveLength(4);
});