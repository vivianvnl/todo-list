import "./globalStyles.css";
import "./domStyles.css";

import { projectStorage } from './storage.js';
import { addProjectToList, Project, Task } from './todos.js';
import { newTaskForm, newProjectForm, showProject, createProjectUI } from './dom.js';

const taskOne = new Task('Clean', 'bathroom, kitchen', 'tomorrow', 'high');
const taskTwo = new Task('Organize', 'closet', '9:00pm', 'medium');
const taskThree = new Task('have fun', 'yay', '09/13/25', 'low');

const newProject = new Project('General');
addProjectToList(newProject);
newProject.addTaskToProject(taskOne);
newProject.addTaskToProject(taskTwo);
newProject.addTaskToProject(taskThree);

projectStorage();
newTaskForm();
newProjectForm();
showProject();