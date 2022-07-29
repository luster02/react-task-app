import { useState } from 'react';
import { Client } from '../../database/client/client';

const client = new Client();

export function useUpdateTasks() {
  const [loading, setLoading] = useState(false);

  async function exec(id, task) {
    setLoading(true);
    await client.update(id, task);
    setLoading(false);
  }

  return {
    exec,
    loading,
  };
}
