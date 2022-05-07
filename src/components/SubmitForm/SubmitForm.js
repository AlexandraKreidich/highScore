import { useState } from 'react';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';
import logo from '../../assets/icons/logo-symbol.svg';
import styles from './SubmitForm.module.css';
import { Loader } from '../Loader/Loader';

export function SubmitForm(props) {
  const [name, setName] = useState('');

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onClick = () => {
    props.onSubmit(name);
    setName('');
  }

  return (<div className={`${styles.submitForm} ${props.className}`}>
    <div>
      <label className={styles.label}>Name</label>
      <input className={styles.input} value={name} onChange={onChange}></input>
    </div>
    <Button type='primary' disabled={name === ''} onClick={onClick}>Send</Button>
    {props.isLoading && <Loader></Loader>}
  </div>);
}

SubmitForm.propTypes = {
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string
};