import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';


const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`);
        
       
        const result = Array.isArray(response.data) 
          ? response.data 
          : response.data.courses;

        setData(result || []);
      } catch (err) {
        setError(err as AxiosError);
        console.error(`Error fetching from ${endpoint}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;