import { useCallback, useState } from 'react';

export function useA(apiFunction, dependencyArr) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const call = useCallback(
    async (...params) => {
      try {
        setIsLoading(true);
        const data = await apiFunction(...params);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencyArr,
  )

  return (
    {
      data,
      isLoading,
      isError,
      errorMessage,
      call
    }
  )
}