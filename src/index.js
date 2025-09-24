import "./globalStyles.css";
import "./domStyles.css";

import { saveProjectData, getProjectData } from './storage.js';
import { projectList, addProjectToList, Project, Task } from './todos.js';
import { newTaskForm, newProjectForm, showProject } from './dom.js';

const taskOne = new Task('Clean', 'bathroom, kitchen', 'tomorrow', 'high');
const taskTwo = new Task('Organize', 'closet', '9:00pm', 'medium');
const taskThree = new Task('have fun', 'yay', '09/13/25', 'low');

const newProject = new Project('General');
addProjectToList(newProject);
newProject.addTaskToProject(taskOne);
newProject.addTaskToProject(taskTwo);
newProject.addTaskToProject(taskThree);

////reset local storage to initial ---only use to reset page to default tasks
//saveProjectData();

getProjectData();
console.log(projectList);

newTaskForm();
newProjectForm();
showProject();