import { Project, Task } from './todos.js';

//const taskOne = new Task('Clean a crap ton yay', 'cool', 'tomorrow', 'high');
//const taskTwo = new Task('have fun', 'yay', '09/13/25', 'low');
//taskOne.taskComplete();

export function newTaskForm() {
    const newTaskButton = document.getElementById('newTaskButton');
    const dialog = document.querySelector('dialog');
    const createTaskBtn = dialog.querySelector("#createTaskButton");
    const form = document.querySelector('form');

    newTaskButton.addEventListener("click", () => {
    dialog.showModal();
    });

    createTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.querySelector('input[name="priorityChoice"]:checked').value;

    const newTask = new Task(taskName, description, dueDate, priority);
    const newProject = new Project();
    newProject.addTaskToProject(newTask);
    console.log(newProject.project);

    dialog.close();
    form.reset();
    return createTaskUI(newProject.project);
    });
}

export function createTaskUI(project) {
    const selectedProject = document.getElementById('selectedProject');

    const task = document.createElement('div');
    task.id = 'task';
    task.setAttribute('style', 'background-color: #FFBF65');

    const checkbox = document.createElement('div');
    checkbox.id = 'checkbox';

    const taskName = document.createElement('p');
    taskName.textContent = project[0].taskName;
    taskName.id = 'taskName';
    const dueDate = document.createElement('p');
    dueDate.textContent = project[0].dueDate;
    dueDate.id = 'dueDate';
    const description = document.createElement('p');
    description.textContent = project[0].description;
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