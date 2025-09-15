import { Project, Task } from './todos.js';

const taskOne = new Task('Clean', 'cool', 'tomorrow', 'high');
const taskTwo = new Task('have fun', 'yay', '09/13/25', 'low');
//taskOne.taskComplete();

const chores = new Project();
chores.addTaskToProject(taskOne);
chores.addTaskToProject(taskTwo);
console.log(chores.project);