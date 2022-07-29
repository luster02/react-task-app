import Tasks from '../data/tasks.json';
import { sleep } from '../../utils/sleep';

export class Client {
  #tasks;

  constructor() {
    this.#tasks = Tasks;
  }

  async find() {
    await sleep(1500);
    return this.#tasks;
  }

  async save(task) {
    this.#tasks.push(task);
  }

  async update(id, task) {
    const index = this.#tasks.findIndex((_taks) => _taks.id === id);
    await sleep(1500);
    if (index < 0) return undefined;
    this.#tasks[index] = task;
  }

  async delete(id) {
    await sleep(1500);
    this.#tasks = this.#tasks.filter((_task) => _task.id !== id);
  }
}
