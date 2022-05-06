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
    setName('');
  }

  return (<div className={styles.submitForm}>
    <div>
      <label className={styles.label}>Name</label>
      <input className={styles.input} value={name} onChange={onChange}></input>
    </div>
    <Button type='primary' disabled={name === ''} onClick={onClick}>Send</Button>
  </div>);
}