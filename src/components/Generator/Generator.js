import { Alert } from '../Alert/Alert';
import { Button } from '../Button/Button';
import styles from './Generator.module.css';
import PropTypes from 'prop-types';

export function Generator(props) {
  const MAX_CLICKS_AMOUNT = 10;

  const handleClick = () => {
    if (props.clicksCount < MAX_CLICKS_AMOUNT) {
      const random = Math.round(Math.random());
      let isNegative = random === 0;
      const number = Math.round(Math.random() * (isNegative ? -100 : 100));
      props.onClick(number);
    }
  };

  return (
    <div className={`${styles.container} ${props.className}`}>
      <Button type='default' disabled={props.clicksCount === 10} onClick={handleClick}>+- Click</Button>
      <p>Clicks left: {MAX_CLICKS_AMOUNT - props.clicksCount}</p>
      {props.clicksCount === 10 &&
        <div className={styles.alertContainer} >
          <Alert type='warning'><p>You've reached the maximum amount of {MAX_CLICKS_AMOUNT} clicks</p></Alert>
        </div>}
    </div>
  )
}

Generator.propTypes = {
  clicksCount: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string
};
