import { useState } from 'react';

export function SubmitForm(props) {
  const [name, setName] = useState('');

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onClick = () => {
    props.onSubmit(name);
  }

  return (<div>
    <input value={name} onChange={onChange}></input>
    <button onClick={onClick}>send!</button>
  </div>);
}