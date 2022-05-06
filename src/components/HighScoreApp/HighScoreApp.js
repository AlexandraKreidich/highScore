import './HighScoreApp.css';
import { useState } from 'react';
import Generator from '../Generator';
import SubmitForm from '../SubmitForm';

export function HighScoreApp() {
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
      <h2>Sum: {sum}</h2>
      <SubmitForm onSubmit={onSubmit}></SubmitForm>
    </div>
  );
}