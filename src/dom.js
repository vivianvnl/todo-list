import { Project, Task } from './todos.js';

//const taskOne = new Task('Clean a crap ton yay', 'cool', 'tomorrow', 'high');
//const taskTwo = new Task('have fun', 'yay', '09/13/25', 'low');
//taskOne.taskComplete();

export function newTaskForm() {
    const newTaskButton = document.getElementById('newTaskButton');
    const taskDialog = document.getElementById('newTaskDialog');
    const createTaskBtn = taskDialog.querySelector("#createTaskButton");
    const taskForm = document.getElementById('newTaskForm');

    newTaskButton.addEventListener("click", () => {
    taskDialog.showModal();
    });

    createTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const taskName = document.getElementById('taskNameValue').value;
    const description = document.getElementById('descriptionValue').value;
    const dueDate = document.getElementById('dueDateValue').value;
    const priority = document.querySelector('input[name="priorityChoice"]:checked').value;
    const projectSelection = document.getElementById('projectSelection').value;

    const newTask = new Task(taskName, description, dueDate, priority, projectSelection);
    projectSelection.addTaskToProject(newTask);
    console.log(projectSelection.project);

    taskDialog.close();
    taskForm.reset();
    return createTaskUI(projectSelection.project);
    });
}

export function newProjectForm() {
    const newProjectButton = document.getElementById('newProjectButton');
    const projectDialog = document.getElementById('newProjectDialog');
    const createProjectButton = projectDialog.querySelector("#createProjectButton");
    const projectForm = document.getElementById('newProjectForm');

    newProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
    });

    createProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
//want the object variable name to be same as name property within obj
    const projectName = document.getElementById('projectNameValue').value;
    const newProject = new Project(projectName);

    projectDialog.close();
    projectForm.reset();
    return createProjectUI(newProject);
    });
}

export function createProjectUI(project) {
    //add project to nav bar
    const projectList = document.getElementById('projectsToClick');
    const projectListItem = document.createElement('button');
    projectListItem.textContent = project.name;
    projectListItem.classList.add('projectButtons');
    projectList.append(projectListItem);

    //add project to 'new task' form
    const projectSelection = document.getElementById('projectSelection');
    const projectSelectionOption = document.createElement('option');
    projectSelectionOption.textContent = project.name;
    projectSelectionOption.value = project.name;
    projectSelection.append(projectSelectionOption);
}

export function showProject() {
    const selectedProject = document.getElementById('selectedProject');
    const projectsToClick = document.getElementById('projectsToClick');

    projectsToClick.addEventListener('click', (event) => {
        selectedProject.innerHTML = '';

        if (event.target.tagName === 'BUTTON') {
            selectedProject.innerHTML = `
            <h2>${event.target.textContent}</h2>
            <p>${event.target.textContent}</p>
        `;
        }
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