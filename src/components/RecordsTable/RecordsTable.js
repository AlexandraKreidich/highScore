import styles from './RecordsTable.module.css';
import PropTypes from 'prop-types';
import { TableRow } from './TableRow/TableRow';

export function RecordsTable(props) {
  return (
    <div className={styles.container}>
      <div className={styles.tableHeader}>
        <div className={styles.headerCell}>Name</div>
        <div className={styles.headerCell}>Total points</div>
        <div className={styles.headerCell}>Clicks</div>
      </div>
      {props.items.map(item => (<TableRow key={item.name} record={item}></TableRow>))}
    </div>
  )
}

RecordsTable.propTypes = {
  items: PropTypes.array
};