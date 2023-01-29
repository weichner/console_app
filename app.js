import colors from 'colors';
import {
  inquirerMenu,
  pause,
  readInput,
  deleteTaskList,
  confirmation,
  showCheckList,
} from './helpers/inquirer.js';
import { Task } from './models/task.js';
import { Tasks } from './models/tasks.js';
import { saveDB, readDB } from './helpers/saveFile.js';

console.clear();

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  const dbTasks = readDB();

  if (dbTasks) {
    tasks.uploadTasksFromArray(dbTasks);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        // Creating an option
        const desc = await readInput('Description: ');
        tasks.createTask(desc);
        break;

      case '2':
        tasks.completedList();
        break;

      case '3':
        tasks.pendingOrCompletedList(true);
        break;

      case '4':
        tasks.pendingOrCompletedList(true);
        break;

      case '5':
        const ids = await showCheckList(tasks.arrayOfLists);
        tasks.toggleCompleted(ids);
        break;

      case '6':
        // Delete
        const id = await deleteTaskList(tasks.arrayOfLists);
        if (id !== '0') {
          const ok = await confirmation('Are you sure?');
          if (ok) {
            tasks.deleteTask(id);
          }
        }
        break;
    }

    saveDB(tasks.arrayOfLists);

    await pause();
  } while (opt !== '0');
};

main();
