import { Project, projectList, addProjectToList, Task } from './todos.js';

export const newTaskForm = function newTaskForm() {
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

        const selectedProject = document.getElementById('selectedProject');
        const selectedProjectHeader = selectedProject.querySelector('h2');
        const foundSelectedProject = projectList.find(project => project.name === selectedProjectHeader.textContent);

        if (foundSelectedProject.name) {
            foundSelectedProject.addTaskToProject(newTask);
            createTasks(foundSelectedProject);
        };

        taskDialog.close();
        taskForm.reset();
    });
}

export const createTasks = function createTaskUI(project) {
    const selectedProject = document.getElementById('selectedProject');
    selectedProject.innerHTML = `
    <h2>${project.name}</h2>
    `;
    const currentProject = project.project;

    for (let i = 0; i < currentProject.length; i++) {
        const task = document.createElement('div');
        task.id = 'task';
        if (currentProject[i].priority === 'high') {
            task.setAttribute('style', 'background-color: #ff8465ff');
        }
        if (currentProject[i].priority === 'medium') {
            task.setAttribute('style', 'background-color: #FFBF65');
        }
        if (currentProject[i].priority === 'low') {
            task.setAttribute('style', 'background-color: #B8E85F');
        }

        const checkbox = document.createElement('div');
        checkbox.id = 'checkbox';

        const taskName = document.createElement('p');
        taskName.textContent = currentProject[i].taskName;
        taskName.id = 'taskName';
        const dueDate = document.createElement('p');
        dueDate.textContent = currentProject[i].dueDate;
        dueDate.id = 'dueDate';
        const description = document.createElement('p');
        description.textContent = currentProject[i].description;
        description.id = 'description';

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.id = 'editButton';
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "+";
        deleteButton.id = 'deleteButton';
        deleteButton.addEventListener('click', function() {
            this.parentElement.remove(); 
            currentProject.splice([i], 1);
            console.log(currentProject);
        });

        const taskNameAndDueDate = document.createElement('div');
        taskNameAndDueDate.id = 'taskNameAndDueDate';

        taskNameAndDueDate.append(taskName, dueDate);
        task.append(checkbox, taskNameAndDueDate, description, editButton, deleteButton);
        selectedProject.append(task);
    }
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

    createTasks(projectList[0]);

    projectsToClick.addEventListener('click', (event) => {
        selectedProject.innerHTML = '';

        const foundProject = projectList.find(project => project.name === event.target.textContent);

        if (event.target.tagName === 'BUTTON') {
            if (foundProject.project.length > 0) {
                createTasks(foundProject);
            } else if (foundProject.project.length === 0) {
            selectedProject.innerHTML = `
            <h2>${foundProject.name}</h2>
            `;
            }
        }
    });
}

