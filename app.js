import colors from 'colors';
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { Task } from './models/task.js';
import { Tasks } from './models/tasks.js';

console.clear();

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await readInput('Description: ');
        console.log(desc);
        break;

      case '2':
        console.log(tasks._lists);
        break;
    }

    await pause();
  } while (opt !== '0');
};

main();