require('colors');

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log('========================='.green);
    console.log('   Select an option  '.green);
    console.log('==========================\n'.green);

    console.log(`${'1.'.green} Create a task`);
    console.log(`${'2.'.green} List of tasks`);
    console.log(`${'3.'.green} List of completed tasks`);
    console.log(`${'4.'.green} List of pending tasks`);
    console.log(`${'5.'.green} Complete a task(s)`);
    console.log(`${'6.'.green} Delete a task`);
    console.log(`${'0.'.green} Exit \n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question('Select an option: ', (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${'ENTER'.green} to continue\n`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
