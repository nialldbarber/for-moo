import { useState, useEffect } from 'react';

type FetchData<T> = {
  data?: T;
  loading: boolean;
  error: boolean;
};

export const useFetch = <T = unknown>(url: string): FetchData<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
