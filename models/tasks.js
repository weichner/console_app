import { Task } from './task.js';
/**
 * _lists:
 * { uuid-12545255-241646-21: { id:12, description:sadas, completed:82 }}
 */

class Tasks {
  _lists = {};

  constructor() {
    this._lists = {};
  }

  createTask(description) {
    const task = new Task(description);
    this._lists[task.id] = task;
  }
}

export { Tasks };
