import styles from './HighScoreApp.module.css';
import { useCallback, useEffect, useState } from 'react';
import Generator from '../Generator';
import SubmitForm from '../SubmitForm';
import * as recordsAPI from '../../api/RecordsAPI';
import { RecordsTable } from '../RecordsTable/RecordsTable';

export function HighScoreApp() {
  const [sum, setSum] = useState(0);
  const [clicksCount, setClicksCount] = useState(0);

  const [records, setRecords] = useState([]);
  const [recordsLoading, setRecordsLoading] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchRecords = useCallback(
    async () => {
      try {
        const data = await recordsAPI.fetchRecords();
        setRecords(data);
        setRecordsLoading(false);
      } catch (error) {
        setRecordsLoading(false);
        setIsError(true);
        setErrorMessage(error);
      }
    },
    []
  )

  useEffect(() => {
    setRecordsLoading(true);
    fetchRecords();
  }, [fetchRecords])

  const handleClick = (number) => {
    setSum(sum + number);
    setClicksCount(clicksCount + 1);
  };

  const onSubmit = async (name) => {
    try {
      await recordsAPI.createRecord({ name, totalPoints: sum, clicks: clicksCount });
      await fetchRecords();
      reset();
    }
    catch (e) {
      // hook
    }
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