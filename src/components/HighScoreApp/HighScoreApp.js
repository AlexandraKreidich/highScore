import styles from './HighScoreApp.module.css';
import { useEffect, useState } from 'react';
import Generator from '../Generator';
import SubmitForm from '../SubmitForm';
import { fetchRecords } from '../../api/RecordsAPI';
import { RecordsTable } from '../RecordsTable/RecordsTable';

export function HighScoreApp() {
  const [sum, setSum] = useState(0);
  const [clicksCount, setClicksCount] = useState(0);

  const [records, setRecords] = useState([]);
  const [recordsLoading, setRecordsLoading] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setRecordsLoading(true);
    try {
      fetchRecords().then(data => {
        setRecords(data);
        setRecordsLoading(false);
      });
    }
    catch (e) {
      setRecordsLoading(false);
      setIsError(true);
      setErrorMessage(e);
    }
  }, [])


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
    <div className={styles.app}>
      <div className={styles.play}>
        <Generator clicksCount={clicksCount} onClick={handleClick}></Generator>
        <h2>Your score: {sum}</h2>
        <SubmitForm onSubmit={onSubmit}></SubmitForm>
      </div>
      <div className={styles.rating}>
        {recordsLoading && <p>Loading...</p>}
        {!recordsLoading && !isError && <RecordsTable items={records}></RecordsTable>}
      </div>
    </div>
  );
}