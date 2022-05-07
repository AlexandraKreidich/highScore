import logo from '../../assets/icons/logo-symbol.svg';
import styles from './Loader.module.css';

export function Loader() {
  return (<img className={styles.loadIcon} src={logo} alt='loader'></img>)
}