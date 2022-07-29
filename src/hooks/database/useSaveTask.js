import { useState } from 'react';
import ShortUniqueId from 'short-unique-id';
import { Client } from '../../database/client/client';

const client = new Client();

export function useSaveTasks() {
  const [loading, setLoading] = useState(false);

  async function exec(task) {
    setLoading(true);
    await client.save(task);
    setLoading(false);
  }

  return {
    exec,
    loading,
  };
}

export const taskBuilder = (
  task = {
    id: '',
    title: '',
    completed: false,
    order: 0,
  }
) => {
  const errors = Object.values(task)
    .map((value) => {
      if (typeof value === 'string') {
        if (!value.length) {
          return true;
        }
        return undefined;
      } else if (typeof value === 'number') {
        if (!value) {
          return true;
        }
        return undefined;
      } else {
        return undefined;
      }
    })
    .filter((error) => typeof error !== 'undefined');
  if (errors.length) throw new Error('object values invalid');
  const buildedTask = { ...task, id: new ShortUniqueId().stamp(10) };
  return buildedTask;
};
