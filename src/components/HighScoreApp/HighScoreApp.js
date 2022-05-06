import './HighScoreApp.css';
import { useState } from 'react';
import Generator from '../Generator';
import SubmitForm from '../SubmitForm';

export function HighScoreApp() {
  const [sum, setSum] = useState(0);
  const [clicksCount, setClicksCount] = useState(0);

  const handleClick = (number) => {
    setSum(sum + number);
    setClicksCount(clicksCount + 1);
  };

  const onSubmit = (name) => {
    console.log(name, sum);
    reset();
  }

  const reset = () => {
    setSum(0);
    setClicksCount(0);
  }

  return (
    <div className='App'>
      <div className='play'>
        <Generator clicksCount={clicksCount} onClick={handleClick}></Generator>
        <h2>Your score: {sum}</h2>
        <SubmitForm onSubmit={onSubmit}></SubmitForm>
      </div>
      <div className='rating'></div>
    </div>
  );
}