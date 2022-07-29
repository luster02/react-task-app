import { useState } from 'react';
import { Client } from '../../database/client/client';

const client = new Client();

export function useDeleteTasks() {
  const [loading, setLoading] = useState(false);

  async function exec(id) {
    setLoading(true);
    await client.delete(id);
    setLoading(false);
  }

  return {
    exec,
    loading,
  };
}
