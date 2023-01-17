import { v4 as uuidv4 } from 'uuid';

class Task {
  id = '';
  description = '';
  completed = null;

  constructor(description) {
    this.id = uuidv4();
    this.description = description;
    this.completed = null;
  }
}

export { Task };
