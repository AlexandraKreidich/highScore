import PropTypes from 'prop-types';
import styles from './TableRow.module.css';

export function TableRow(props) {
  return (
    <div className={styles.row}>
      {
        Object.keys(props.record).map((key, index) => (
          <div className={styles.cell} key={index}>{props.record[key]}</div>
        ))
      }
    </div>
  )
}

TableRow.propTypes = {
  record: PropTypes.object
};