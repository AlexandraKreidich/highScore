import styles from './HighScoreApp.module.css';
import { useEffect, useState } from 'react';
import Generator from '../Generator';
import SubmitForm from '../SubmitForm';
import * as recordsAPI from '../../api/RecordsAPI';
import { RecordsTable } from '../RecordsTable/RecordsTable';
import { useA } from '../../hooks/use';

export function HighScoreApp() {
  const [sum, setSum] = useState(0);
  const [clicksCount, setClicksCount] = useState(0);
  const [sortField, setSortField] = useState('totalPoints');

  const {
    data: records,
    isLoading: recordsLoading,
    isError: recordsError,
    errorMessage: recordsErrorMessage,
    call: fetchRecords
  } = useA(() => recordsAPI.fetchRecords(sortField), [sortField])

  const {
    isLoading: createRecordLoading,
    isError: createRecordError,
    errorMessage: createRecordErrorMessage,
    call: createRecord
  } = useA((name) => recordsAPI.createRecord({ name, totalPoints: sum, clicks: clicksCount }))

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords, sortField])

  const handleClick = (number) => {
    setSum(sum + number);
    setClicksCount(clicksCount + 1);
  };

  const onSubmit = async (name) => {
    await createRecord(name);
    await fetchRecords();
    reset();
  }

  const reset = () => {
    setSum(0);
    setClicksCount(0);
  }

  const onSortChanged = (sortField) => {
    setSortField(sortField);
  }

  return (
    <div className={styles.app}>
      <div className={styles.play}>
        <Generator clicksCount={clicksCount} onClick={handleClick}></Generator>
        <h2>Your score: {sum}</h2>
        <SubmitForm onSubmit={onSubmit} ></SubmitForm>
      </div>
      <div className={styles.rating}>
        {recordsLoading && <p>Loading...</p>}
        {!recordsLoading && recordsError && <p>{recordsErrorMessage}</p>}
        {!recordsLoading && !recordsError && records &&
          <RecordsTable
            items={records}
            sortField={sortField}
            onSortChanged={onSortChanged}></RecordsTable>}
      </div>
    </div>
  );
}