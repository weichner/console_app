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
        name: `${'1.'.green} Create a task`,
      },
      {
        value: '2',
        name: `${'2.'.green} List tasks`,
      },
      {
        value: '3',
        name: `${'3.'.green} List completed tasks`,
      },
      {
        value: '4',
        name: `${'4.'.green} List pending tasks`,
      },
      {
        value: '5',
        name: `${'5.'.green} Complete task(s)`,
      },
      {
        value: '6',
        name: `${'6.'.green} Delete task(s)`,
      },
      {
        value: '0',
        name: `${'0.'.green} Exit`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.log('==========================='.green);
  console.log('   Select an Option'.white);
  console.log('===========================\n'.green);

  const { Option } = await inquirer.prompt(menuOpts);

  return Option;
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

  const desc = await inquirer.prompt(question);
  return desc;
};

const deleteTaskList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: task.id,
      name: `${idx} ${task.description}`,
    };
  });

  // unshift to added at the beginning of the array
  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancel',
  });

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'delete',
      choices,
    },
  ];
  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirmation = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

const showCheckList = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: task.id,
      name: `${idx} ${task.description}`,
      checked: task.completed ? true : false,
    };
  });

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selections',
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(question);
  return ids;
};

export {
  inquirerMenu,
  pause,
  readInput,
  deleteTaskList,
  confirmation,
  showCheckList,
};
