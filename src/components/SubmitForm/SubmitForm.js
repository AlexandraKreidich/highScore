import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './SubmitForm.module.css';

export function SubmitForm(props) {
  const [name, setName] = useState('');

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onClick = () => {
    props.onSubmit(name);
  }

  return (<div className={styles.submitForm}>
    <input className={styles.input} placeholder='name' value={name} onChange={onChange}></input>
    <Button type='primary' disabled={name === ''} onClick={onClick}>send!</Button>
  </div>);
}