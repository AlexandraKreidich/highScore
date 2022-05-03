import { useState } from 'react';
import styles from './Generator.module.css';

export function Generator(props) {
  const [clicksCount, setClicksCount] = useState(0);

  const handleClick = () => {
    if (clicksCount < 10) {
      const random = Math.round(Math.random());
      let isNegative = random === 0;
      setClicksCount(clicksCount + 1);
      const number = Math.round(Math.random() * (isNegative ? -100 : 100));
      props.onClick(number);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={clicksCount === 10} onClick={handleClick}>+-Click</button>
      <p>Clicks done: {clicksCount}</p>
    </div>
  )
}
