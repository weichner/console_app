import inquirer from 'inquirer';

import colors from 'colors';

const menuOpts = [
  {
    type: 'list',
    name: 'Option',
    message: 'Select an option',
    choices: [
      {
        value: '1',
        name: '1. Create a task',
      },
      {
        value: '2',
        name: '2. List tasks',
      },
      {
        value: '3',
        name: '3. List completed tasks',
      },
      {
        value: '4',
        name: '4. List pending tasks',
      },
      {
        value: '5',
        name: '5. Complete task(s)',
      },
      {
        value: '6',
        name: '6. Delete task(s)',
      },
      {
        value: '0',
        name: '0. Exit',
      },
    ],
  },
];

const inquirerMenu = async () => {
  //console.clear();
  console.log('==========================='.green);
  console.log('   Select an Option'.green);
  console.log('===========================\n'.green);

  const option = await inquirer.prompt(menuOpts);

  return option;
};

const pause = async () => {
  const optionsForPause = [
    {
      type: 'input',
      name: 'enter',
      message: `Please tap ${'ENTER'.blue} to continue`,
    },
  ];

  console.log('\n');
  await inquirer.prompt(optionsForPause);
};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please enter a value';
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

export { inquirerMenu, pause, readInput };
