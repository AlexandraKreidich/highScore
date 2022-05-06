import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${styles.button} ${styles[props.type]}`}
    >{props.children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};