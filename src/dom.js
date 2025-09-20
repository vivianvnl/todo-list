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
        const selectedProjectOption = document.getElementById('projectSelect').value;

        const newTask = new Task(taskName, description, dueDate, priority);

        const foundSelectedProject = projectList.find(project => project.name === selectedProjectOption);
        
        if (foundSelectedProject === undefined) {
            projectList[0].addTaskToProject(newTask);
            createTasks(projectList[0]);
        } else {
            foundSelectedProject.addTaskToProject(newTask);
            createTasks(foundSelectedProject);
        }

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
        } else if (currentProject[i].priority === 'medium') {
            task.setAttribute('style', 'background-color: #FFBF65');
        } else if (currentProject[i].priority === 'low') {
            task.setAttribute('style', 'background-color: #B8E85F');
        }

        let checkbox = document.createElement("input");
        const crossOff = document.createElement('div');
        crossOff.setAttribute("id", "crossOff");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "checkbox");
        
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                currentProject[i].taskComplete();

                task.setAttribute('style', 'background-color: #D6D6D6');
                if (dueDate) {
                    taskNameAndDueDate.removeChild(dueDate);
                }
                task.append(crossOff);
            } else {
                currentProject[i].taskComplete();

                if (dueDate) {
                    taskNameAndDueDate.append(dueDate);
                }

                if (crossOff) {
                    task.removeChild(crossOff);
                }

                if (currentProject[i].priority === 'high') {
                    task.setAttribute('style', 'background-color: #ff8465ff');
                } else if (currentProject[i].priority === 'medium') {
                    task.setAttribute('style', 'background-color: #FFBF65');
                } else if (currentProject[i].priority === 'low') {
                    task.setAttribute('style', 'background-color: #B8E85F');
                }
            }
        });

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
        editButton.addEventListener('click', function(event) {
            const editDialog = document.getElementById('editDialog');

            const taskName = document.getElementById('taskNameEdited').value;
            const description = document.getElementById('descriptionEdited').value;
            const dueDate = document.getElementById('dueDateEdited').value;
            const priority = document.querySelector('input[name="priorityChoiceEdited"]:checked').value;
            const selectedProjectOption = document.getElementById('projectSelectEdited').value;
        });

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

        if (currentProject[i].completed === false) {
            taskNameAndDueDate.append(taskName, dueDate);
        } else if (currentProject[i].completed === true) {
                checkbox.checked = true;
                console.log(currentProject[i].completed);
                task.setAttribute('style', 'background-color: #D6D6D6');
                if (dueDate) {
                    taskNameAndDueDate.append(taskName);
                }
                task.append(crossOff);
        } 

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

    //add project to new task form
    const projectOptions = document.getElementById('project-select');
    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', project.name);
    projectOption.setAttribute('id', project.name);
    projectOption.textContent = project.name;
    projectOptions.appendChild(projectOption);
}

export function showProject() {
    const selectedProject = document.getElementById('selectedProject');
    const projectsToClick = document.getElementById('projectsToClick');

    /* editable div test
    const main = document.querySelector('main');
    const editableDiv = document.createElement('div');
    editableDiv.textContent = 'Click here to edit this content.';
    editableDiv.setAttribute('contenteditable', 'true'); // Make it editable
    main.append(editableDiv);

    editableDiv.addEventListener('blur', () => {
        console.log('Content updated:', editableDiv.textContent);
        // Here you would typically send the updated content to a server or store it.
    });
    */

    //create default 'general' project
    createTasks(projectList[0]);

    //add starting projects to new task form
    for (let i = 0; i < projectList.length; i++) {
        const projectOptions = document.getElementById('project-select');
        const foundProjectOption = projectOptions.querySelector(`#${projectList[i].name}`)

        if (!foundProjectOption) {
            const projectOption = document.createElement('option');
            projectOption.setAttribute('value', projectList[i].name);
            projectOption.setAttribute('id', projectList[i].name);
            projectOption.textContent = projectList[i].name;
            projectOptions.appendChild(projectOption);
        }
    }

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

