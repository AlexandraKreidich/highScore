import PropTypes from 'prop-types';
import styles from './Alert.module.css';

export function Alert(props) {

  return (
    <div role='alert' className={`${styles.alert} ${styles[props.type]}`}>
      {props.children}
    </div>
  )
}

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};