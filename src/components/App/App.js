import './App.css';
import { useState } from 'react';
import Generator from '../Generator';
import SubmitForm from '../SubmitForm';

export function App() {
  const [sum, setSum] = useState(0);

  const handleClick = (number) => {
    setSum(sum + number);
  };

  const onSubmit = (name) => {
    console.log(name, sum);
  }

  return (
    <div className="App">
      <Generator onClick={handleClick}></Generator>
      <h2>{sum}</h2>
      <SubmitForm onSubmit={onSubmit}></SubmitForm>
    </div>
  );
}