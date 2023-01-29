import fs from 'fs';

const file = './db/data.json';

const saveDB = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

const readDB = () => {
  if (!fs.existsSync(file)) {
    return null;
  }

  const info = fs.readFileSync(file, { encoding: 'utf-8' });

  // Parsing the JSON to get an object
  const data = JSON.parse(info);
  //console.log(data);

  return data;
};

export { saveDB, readDB };
