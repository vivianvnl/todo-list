import { saveProjectData } from './storage.js';
import { Project, projectList, addProjectToList, Task, addTaskToExistingProject } from './todos.js';

export const newTaskForm = function newTaskForm() {
    const newTaskButton = document.getElementById('newTaskButton');
    const taskDialog = document.getElementById('newTaskDialog');
    const createTaskBtn = taskDialog.querySelector("#createTaskButton");
    const taskForm = document.getElementById('newTaskForm');

    newTaskButton.addEventListener("click", () => {
        taskDialog.showModal();
    });

    const form = document.getElementById('newTaskForm');
    const nullErrorMessage = document.createElement('legend');
    nullErrorMessage.textContent = 'Please fill out fields.';
    const requiredErrorMessage = document.createElement('legend');
    requiredErrorMessage.textContent = 'Please fill out required fields.';
    createTaskBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const taskName = document.getElementById('taskNameValue').value;
        const description = document.getElementById('descriptionValue').value;
        const dueDate = document.getElementById('dueDateValue').value;

        let priority = null;
        if (document.querySelector('input[name="priorityChoice"]:checked') !== null) {
            priority = document.querySelector('input[name="priorityChoice"]:checked').value;
        }
        const selectedProjectOption = document.getElementById('projectSelect').value;

        if (taskName !== '' && priority !== null) {
            const newTask = new Task(taskName, description, dueDate, priority);

            const foundSelectedProject = projectList.find(project => project.name === selectedProjectOption);

            if (foundSelectedProject === undefined) {
                addTaskToExistingProject(projectList[0], newTask);
                createTasks(projectList[0]);
            } else {
                addTaskToExistingProject(foundSelectedProject, newTask);
                createTasks(foundSelectedProject);
            }

            //save project to local storage
            saveProjectData();

            taskDialog.close();
            taskForm.reset();
        } else if (taskName === '' && description === '' && dueDate === '' && priority === null && selectedProjectOption === '') {
            if (form.contains(nullErrorMessage) === false) {
                form.append(nullErrorMessage);
            }
        } else if (taskName === '' || priority === null) {
            if (form.contains(requiredErrorMessage) === false) {
                if (form.contains(nullErrorMessage) === true) {
                    form.removeChild(nullErrorMessage);
                }
                form.append(requiredErrorMessage);
            }
        }
    });
    const cancelNewTaskButton = document.getElementById('cancelNewTaskButton');
    cancelNewTaskButton.addEventListener('click', function () {
        taskDialog.close();
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
        task.classList.add('tasks');
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

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                currentProject[i].completed = true;

                task.setAttribute('style', 'background-color: #D6D6D6');
                if (dueDate) {
                    taskNameAndDueDate.removeChild(dueDate);
                }
                task.append(crossOff);
                task.removeChild(editButton);

                //save project to local storage
                saveProjectData();

            } else {
                currentProject[i].completed = false;

                task.append(editButton);

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

                //save project to local storage
                saveProjectData();
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

        function createEditDialog() {
            const editDialog = document.createElement('dialog');
            editDialog.id = 'editDialog';

            const editDialogHeader = document.createElement('legend');
            editDialogHeader.textContent = 'Edit Task';
            const editTaskForm = document.createElement('form');
            editTaskForm.id = 'editTaskForm';
            const fieldset = document.createElement('fieldset');

            const taskNameEditedDiv = document.createElement('div');
            const taskNameEditedLabel = document.createElement('label');
            taskNameEditedLabel.textContent = 'Task Name:';
            taskNameEditedLabel.setAttribute('for', 'taskNameEdited');
            const taskNameEditedInput = document.createElement('input');
            taskNameEditedInput.setAttribute('type', 'text');
            taskNameEditedInput.setAttribute('name', 'taskName');
            taskNameEditedInput.setAttribute('id', 'taskNameEdited');
            taskNameEditedDiv.append(taskNameEditedLabel, taskNameEditedInput);

            const descriptionEditedDiv = document.createElement('div');
            const descriptionEditedLabel = document.createElement('label');
            descriptionEditedLabel.textContent = 'Description:';
            descriptionEditedLabel.setAttribute('for', 'descriptionEdited');
            const descriptionEditedInput = document.createElement('input');
            descriptionEditedInput.setAttribute('type', 'text');
            descriptionEditedInput.setAttribute('name', 'description');
            descriptionEditedInput.setAttribute('id', 'descriptionEdited');
            descriptionEditedDiv.append(descriptionEditedLabel, descriptionEditedInput);

            const dueDateEditedDiv = document.createElement('div');
            const dueDateEditedLabel = document.createElement('label');
            dueDateEditedLabel.textContent = 'Due Date:';
            dueDateEditedLabel.setAttribute('for', 'dueDateEdited');
            const dueDateEditedInput = document.createElement('input');
            dueDateEditedInput.setAttribute('type', 'text');
            dueDateEditedInput.setAttribute('name', 'dueDate');
            dueDateEditedInput.setAttribute('id', 'dueDateEdited');
            dueDateEditedDiv.append(dueDateEditedLabel, dueDateEditedInput);


            const priorityCategoryEditedDiv = document.createElement('div');
            const priorityCategoryEditedLabel = document.createElement('p');
            priorityCategoryEditedLabel.textContent = 'Priority Level:';
            const priorityChoicesEditedDiv = document.createElement('div');
            priorityChoicesEditedDiv.classList.add('priorityChoices');

            const priorityChoiceHighEditedDiv = document.createElement('div');
            priorityChoiceHighEditedDiv.id = 'priorityChoiceHighEditedDiv';
            const priorityChoiceHighEditedInput = document.createElement('input');
            priorityChoiceHighEditedInput.setAttribute('type', 'radio');
            priorityChoiceHighEditedInput.setAttribute('name', 'priorityChoiceEdited');
            priorityChoiceHighEditedInput.setAttribute('id', 'optionHigh');
            priorityChoiceHighEditedInput.setAttribute('value', 'high');
            const priorityChoiceHighEditedLabel = document.createElement('label');
            priorityChoiceHighEditedLabel.textContent = 'High';
            priorityChoiceHighEditedLabel.setAttribute('for', 'optionHigh');
            priorityChoiceHighEditedDiv.append(priorityChoiceHighEditedInput, priorityChoiceHighEditedLabel);

            const priorityChoiceMediumEditedDiv = document.createElement('div');
            priorityChoiceMediumEditedDiv.id = 'priorityChoiceMediumEditedDiv';
            const priorityChoiceMediumEditedInput = document.createElement('input');
            priorityChoiceMediumEditedInput.setAttribute('type', 'radio');
            priorityChoiceMediumEditedInput.setAttribute('name', 'priorityChoiceEdited');
            priorityChoiceMediumEditedInput.setAttribute('id', 'optionMedium');
            priorityChoiceMediumEditedInput.setAttribute('value', 'medium');
            const priorityChoiceMediumEditedLabel = document.createElement('label');
            priorityChoiceMediumEditedLabel.textContent = 'Medium';
            priorityChoiceMediumEditedLabel.setAttribute('for', 'optionMedium');
            priorityChoiceMediumEditedDiv.append(priorityChoiceMediumEditedInput, priorityChoiceMediumEditedLabel);

            const priorityChoiceLowEditedDiv = document.createElement('div');
            priorityChoiceLowEditedDiv.id = 'priorityChoiceLowEditedDiv';
            const priorityChoiceLowEditedInput = document.createElement('input');
            priorityChoiceLowEditedInput.setAttribute('type', 'radio');
            priorityChoiceLowEditedInput.setAttribute('name', 'priorityChoiceEdited');
            priorityChoiceLowEditedInput.setAttribute('id', 'optionLow');
            priorityChoiceLowEditedInput.setAttribute('value', 'low');
            const priorityChoiceLowEditedLabel = document.createElement('label');
            priorityChoiceLowEditedLabel.textContent = 'Low';
            priorityChoiceLowEditedLabel.setAttribute('for', 'optionLow');
            priorityChoiceLowEditedDiv.append(priorityChoiceLowEditedInput, priorityChoiceLowEditedLabel);

            priorityChoicesEditedDiv.append(priorityChoiceHighEditedDiv, priorityChoiceMediumEditedDiv, priorityChoiceLowEditedDiv);
            priorityCategoryEditedDiv.append(priorityCategoryEditedLabel, priorityChoicesEditedDiv);

            const projectSelectEditedDiv = document.createElement('div');
            const projectSelectEditedLabel = document.createElement('label');
            projectSelectEditedLabel.textContent = 'Choose a project:';
            projectSelectEditedLabel.setAttribute('for', 'projectSelectEdited');
            const projectSelectEditedSelect = document.createElement('select');
            projectSelectEditedSelect.setAttribute('name', 'selectedProjectOptionEdited');
            projectSelectEditedSelect.setAttribute('id', 'projectSelectEdited');

            const projectSelectEditedDefaultOption = document.createElement('option');
            projectSelectEditedDefaultOption.setAttribute('value', '');
            projectSelectEditedDefaultOption.textContent = 'Please select:';
            projectSelectEditedSelect.append(projectSelectEditedDefaultOption);
            projectSelectEditedDiv.append(projectSelectEditedLabel, projectSelectEditedSelect);

            fieldset.append(taskNameEditedDiv, descriptionEditedDiv, dueDateEditedDiv, priorityCategoryEditedDiv, projectSelectEditedDiv);


            const dialogButtons = document.createElement('div');
            dialogButtons.classList.add('dialogButtons');
            const cancelButton = document.createElement('button');
            cancelButton.setAttribute('value', 'cancel');
            cancelButton.setAttribute('formmethod', 'dialog');
            cancelButton.id = 'cancelButton';
            cancelButton.textContent = 'Cancel';
            const editTaskButton = document.createElement('button');
            editTaskButton.setAttribute('type', 'submit');
            editTaskButton.setAttribute('value', 'default');
            editTaskButton.id = 'editTaskButton';
            editTaskButton.textContent = 'Save';

            dialogButtons.append(cancelButton, editTaskButton);


            editTaskForm.append(fieldset, dialogButtons);
            editDialog.append(editDialogHeader, editTaskForm);

            document.body.appendChild(editDialog);

            let currentPriority = currentProject[i].priority;
            const priorityChoiceEditedButtons = editDialog.querySelectorAll('[name="priorityChoiceEdited"]');
            const projectName = selectedProject.querySelector('h2').innerHTML;

            editButton.addEventListener('click', function (event) {
                //add created projects to edit dialog
                for (let i = 0; i < projectList.length; i++) {
                    const foundProjectEditDialog = projectSelectEditedSelect.querySelector(`#${projectList[i].name}`);
                    if (!foundProjectEditDialog) {
                        const projectOptionEditDialog = document.createElement('option');
                        projectOptionEditDialog.setAttribute('value', projectList[i].name);
                        projectOptionEditDialog.setAttribute('id', projectList[i].name);
                        projectOptionEditDialog.textContent = projectList[i].name;
                        projectSelectEditedSelect.append(projectOptionEditDialog);
                    }
                }

                taskNameEditedInput.value = taskName.textContent;
                dueDateEditedInput.value = dueDate.textContent;
                descriptionEditedInput.value = description.textContent;
                projectSelectEditedSelect.value = projectName;

                for (let i = 0; i < priorityChoiceEditedButtons.length; i++) {
                    if (priorityChoiceEditedButtons[i].value === currentPriority) {
                        priorityChoiceEditedButtons[i].checked = true;
                        break;
                    }
                }
                editDialog.showModal();
            });

            editTaskForm.addEventListener('submit', function (event) {
                event.preventDefault();

                taskName.textContent = taskNameEditedInput.value;
                currentProject[i].taskName = taskName.textContent;
                dueDate.textContent = dueDateEditedInput.value;
                currentProject[i].dueDate = dueDate.textContent;
                description.textContent = descriptionEditedInput.value;
                currentProject[i].description = description.textContent;

                for (let i = 0; i < priorityChoiceEditedButtons.length; i++) {
                    if (priorityChoiceEditedButtons[i].checked === true) {
                        currentPriority = priorityChoiceEditedButtons[i].value;

                        if (currentPriority === 'high') {
                            task.setAttribute('style', 'background-color: #ff8465ff');
                        } else if (currentPriority === 'medium') {
                            task.setAttribute('style', 'background-color: #FFBF65');
                        } else if (currentPriority === 'low') {
                            task.setAttribute('style', 'background-color: #B8E85F');
                        }
                        break;
                    }
                }
                currentProject[i].priority = currentPriority;

                if (projectSelectEditedSelect.value === '') {
                    projectSelectEditedSelect.value = projectName;
                }

                if (projectSelectEditedSelect.value !== projectName && projectSelectEditedSelect.value !== '') {
                    const projectToAppendTask = projectList.find(project => project.name === projectSelectEditedSelect.value);
                    const [taskToMove] = currentProject.splice([i], 1);
                    addTaskToExistingProject(projectToAppendTask, taskToMove);
                    createTasks(project);
                }
                //save project to local storage
                saveProjectData();

                editDialog.close();
            });

            cancelButton.addEventListener('click', function () {
                editDialog.close();
            });
        }
        createEditDialog();



        const deleteButton = document.createElement('button');
        deleteButton.textContent = "+";
        deleteButton.id = 'deleteButton';

        deleteButton.addEventListener('click', function () {
            this.parentElement.remove();
            currentProject.splice([i], 1);
            console.log(projectList);

            //save project to local storage
            saveProjectData();
        });

        const taskNameAndDueDate = document.createElement('div');
        taskNameAndDueDate.id = 'taskNameAndDueDate';

        if (currentProject[i].completed === false) {
            taskNameAndDueDate.append(taskName, dueDate);
        } else if (currentProject[i].completed === true) {
            checkbox.checked = true;

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

    const nullErrorMessage = document.createElement('legend');
    nullErrorMessage.textContent = 'Please fill out field.';
    createProjectButton.addEventListener("click", (event) => {
        event.preventDefault();

        const projectName = document.getElementById('projectNameValue').value;
        if (projectName !== '') {
            const newProject = new Project(projectName);
            addProjectToList(newProject);

            //save project to local storage
            saveProjectData();

            projectDialog.close();
            projectForm.reset();
            return createProjectUI(newProject);
        } else {
            if (projectForm.contains(nullErrorMessage) === false) {
                projectForm.append(nullErrorMessage);
            }
        }
    });

    const cancelNewProjectButton = document.getElementById('cancelNewProjectButton');
    cancelNewProjectButton.addEventListener('click', function () {
        projectDialog.close();
    });
}

export function createProjectUI(project) {
    //add project to nav bar
    const projectsToClick = document.getElementById('projectsToClick');
    const projectListItem = document.createElement('div');
    projectListItem.classList.add('projectListItem');
    const projectListButton = document.createElement('button');
    projectListButton.textContent = project.name;
    projectListButton.classList.add('projectButtons');

    const selectedProject = document.getElementById('selectedProject');
    projectListButton.addEventListener('click', (event) => {
        selectedProject.innerHTML = '';

        const foundProject = projectList.find(project => project.name === event.target.textContent);

        if (foundProject.project.length > 0) {
            createTasks(foundProject);
        } else if (foundProject.project.length === 0) {
            selectedProject.innerHTML = `
        <h2>${foundProject.name}</h2>
        `;
        }
    });

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.textContent = "+";
    deleteProjectButton.id = 'deleteProjectButton';

    projectListItem.append(projectListButton, deleteProjectButton);
    projectsToClick.append(projectListItem);

    deleteProjectButton.addEventListener('click', function () {
        this.parentElement.remove();

        const projectToDeleteIndex = projectList.indexOf(project);
        projectList.splice(projectToDeleteIndex, 1);
        console.log(projectList);

        //save project to local storage
        saveProjectData();

        showDefaultProject();
    });

    //add project to new task form
    const projectOptions = document.getElementById('projectSelect');

    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', project.name);
    projectOption.setAttribute('id', project.name);
    projectOption.textContent = project.name;
    projectOptions.append(projectOption);
}

export function showPreExistingProjects() {
    for (let i = 0; i < projectList.length; i++) {
        createProjectUI(projectList[i]);
        if (projectList[i].project.length > 0) {
            createTasks(projectList[i]);
        }
    }
}

export function showDefaultProject() {
    const selectedProject = document.getElementById('selectedProject');
    selectedProject.innerHTML = '';

    const defaultProjectDisplay = projectList[0];

    if (defaultProjectDisplay.project.length > 0) {
        createTasks(defaultProjectDisplay);
    } else if (defaultProjectDisplay.project.length === 0) {
        selectedProject.innerHTML = `
    <h2>${defaultProjectDisplay.name}</h2>
    `;
    }
}

