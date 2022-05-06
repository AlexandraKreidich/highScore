import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Generator.module.css';

export function Generator(props) {
  const [clicksCount, setClicksCount] = useState(0);

  const MAX_CLICKS_AMOUNT = 10;

  const handleClick = () => {
    if (clicksCount < MAX_CLICKS_AMOUNT) {
      const random = Math.round(Math.random());
      let isNegative = random === 0;
      setClicksCount(clicksCount + 1);
      const number = Math.round(Math.random() * (isNegative ? -100 : 100));
      props.onClick(number);
    }
  };

  return (
    <div className={styles.container}>
      <Button type='default' disabled={clicksCount === 10} onClick={handleClick}>+- Click</Button>
      <p>Clicks left: {MAX_CLICKS_AMOUNT - clicksCount}</p>
    </div>
  )
}
