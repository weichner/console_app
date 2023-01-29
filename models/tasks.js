import colors from 'colors';
import { Task } from './task.js';
/**
 * _lists:
 * { uuid-12545255-241646-21: { id:12, description:sadas, completed:82 }}
 */

class Tasks {
  _lists = {};

  //getter
  get arrayOfLists() {
    const list = [];
    Object.keys(this._lists).forEach((key) => {
      const task = this._lists[key];
      list.push(task);
    });

    return list;
  }

  constructor() {
    this._lists = {};
  }

  uploadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._lists[task.id] = task;
    });
  }

  createTask(description = '') {
    const task = new Task(description);
    this._lists[task.id] = task;
  }

  completedList() {
    console.log();
    this.arrayOfLists.forEach((task, index) => {
      const idx = `${index + 1}`.green;
      const { description, completed } = task;

      const status = { completed } ? 'Completed'.green : 'Pending'.red;

      console.log(`${idx} ${description} :: ${status}`);
    });
  }

  pendingOrCompletedList(completedOnes = true) {
    console.log();
    let counter = 0;

    this.arrayOfLists.forEach((task) => {
      const { description, completed } = task;

      const status = { completed } ? 'Completed'.green : 'Pending'.red;

      if (completedOnes) {
        // Show completed
        if (completed) {
          counter += 1;
          console.log(
            ` ${(counter + '.').green} ${description} :: ${completed.green}`
          );
        }
      } else {
        // Show pending
        if (!completed) {
          counter += 1;
          console.log(` ${(counter + '.').green} ${description} :: ${status}`);
        }
      }
    });
  }

  deleteTask(id = '') {
    if (this._lists[id]) {
      delete this._lists[id];
    }
  }

  toggleCompleted(ids = []) {
    ids.forEach((id) => {
      const task = this._lists[id];
      if (!task.completed) {
        task.completed = new Date().toISOString();
      }
    });

    this.arrayOfLists.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._lists[task.id].completed = null;
      }
    });
  }
}

export { Tasks };
