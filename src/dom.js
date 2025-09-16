import { Project, Task } from './todos.js';

const taskOne = new Task('Clean a crap ton yay', 'cool', 'tomorrow', 'high');
const taskTwo = new Task('have fun', 'yay', '09/13/25', 'low');
//taskOne.taskComplete();

const chores = new Project();
chores.addTaskToProject(taskOne);
chores.addTaskToProject(taskTwo);
console.log(chores.project);
console.log(chores.project[0].description);

const selectedProject = document.getElementById('selectedProject');

export function createTaskUI() {
    const task = document.createElement('div');
    task.id = 'task';
    task.setAttribute('style', 'background-color: #FFBF65');

    const checkbox = document.createElement('div');
    checkbox.id = 'checkbox';

    const taskName = document.createElement('p');
    taskName.textContent = chores.project[0].taskName;
    taskName.id = 'taskName';
    const dueDate = document.createElement('p');
    dueDate.textContent = chores.project[0].dueDate;
    dueDate.id = 'dueDate';
    const description = document.createElement('p');
    description.textContent = chores.project[0].description;
    description.id = 'description';

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.id = 'editButton';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "+";
    deleteButton.id = 'deleteButton';

    const taskNameAndDueDate = document.createElement('div');
    taskNameAndDueDate.id = 'taskNameAndDueDate';

    selectedProject.append(task);
    taskNameAndDueDate.append(taskName, dueDate);
    task.append(checkbox, taskNameAndDueDate, description, editButton, deleteButton);
}