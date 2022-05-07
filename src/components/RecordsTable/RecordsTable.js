import styles from './RecordsTable.module.css';
import PropTypes from 'prop-types';
import { TableRow } from './TableRow/TableRow';

export function RecordsTable(props) {

  const headers = [
    { key: 'name', title: 'Name', sortable: false },
    { key: 'totalPoints', title: 'Total points', sortable: true },
    { key: 'clicks', title: 'Clicks', sortable: false },
    { key: 'avgPerClick', title: 'Average per click', sortable: true }];

  const setSort = (header) => {
    if (header.sortable) {
      props.onSortChanged(header.key);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.tableHeader}>
        {headers.map(header => {
          return <div
            key={header.key}
            onClick={(e) => setSort(header)}
            className={`${styles.headerCell} ${header.sortable ? styles.sortable : ''}`}>
            {header.title}
            <span className={`${styles.dot} ${header.key === props.sortField ? styles.visible : styles.invisible}`}></span>
          </div>
        })}
      </div>
      {props.items.map(item => (<TableRow key={item.name} record={item}></TableRow>))}
    </div>
  )
}

RecordsTable.propTypes = {
  items: PropTypes.array,
  onSortChanged: PropTypes.func,
  sortField: PropTypes.string
};