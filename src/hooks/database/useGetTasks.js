import { useState, useEffect } from 'react';
import { Client } from '../../database/client/client';

const client = new Client();

export function useGetTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    (async () => {
      setRefetch(false);
      setLoading(true);
      const result = await client.find();
      setTasks(result);
      setLoading(false);
    })();
  }, [refetch]);

  const refetchEffect = () => setRefetch(true);

  return {
    tasks,
    loading,
    refetchEffect,
  };
}
