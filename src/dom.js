import { Project, projectList, addProjectToList, Task } from './todos.js';

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

        const newTask = new Task(taskName, description, dueDate, priority);

        taskDialog.close();
        taskForm.reset();
        return createTaskUI(newTask);
    });
}

export function createTaskUI(newTask) {
    const selectedProject = document.getElementById('selectedProject');

    const task = document.createElement('div');
    task.id = 'task';
    task.setAttribute('style', 'background-color: #FFBF65');

    const checkbox = document.createElement('div');
    checkbox.id = 'checkbox';

    const taskName = document.createElement('p');
    taskName.textContent = newTask.taskName;
    taskName.id = 'taskName';
    const dueDate = document.createElement('p');
    dueDate.textContent = newTask.dueDate;
    dueDate.id = 'dueDate';
    const description = document.createElement('p');
    description.textContent = newTask.description;
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
    
    addProjectToList(project);
}

export function showProject() {
    const selectedProject = document.getElementById('selectedProject');
    const projectsToClick = document.getElementById('projectsToClick');

    projectsToClick.addEventListener('click', (event) => {
        selectedProject.innerHTML = '';
        console.log(projectList);
        const foundProject = projectList.find(project => project.name === event.target.textContent);
        console.log(foundProject);

        if (event.target.tagName === 'BUTTON') {
            if (foundProject) {
                console.log(foundProject.project);
                selectedProject.innerHTML = `
                <h2>${foundProject.name}</h2>
                <p>${foundProject.project}</p>
            `;
            }
            
            //selectedProject.innerHTML = `
            //<h2>${event.target.textContent}</h2>
            //<p>${event.target.textContent}</p>
        //`;
        }
    });
}

