import { Project, Task } from './todos.js';


const taskOne = new Task('Clean', 'cool', 'tomorrow', 'high');
const taskTwo = new Task('have fun', 'yay', '09/13/25', 'low');
//console.log(taskOne.getTaskInfo());
//console.log(taskTwo.getTaskInfo());

//const newProject = new Project(taskOne, taskTwo);
console.log(addTaskToProject(taskOne, taskTwo));