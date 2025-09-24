import { addProjectToList, projectList } from './todos.js';

export function saveProjectData() {
    localStorage.clear();
    for (let i = 0; i < projectList.length; i++) {
        localStorage.setItem(projectList[i].name, JSON.stringify(projectList[i]));
    }
}

export function getProjectData() {
    projectList.length = 0;
    function retrieveData(project) {
        const projectString = localStorage.getItem(project);
        const projectObject = JSON.parse(projectString);

        addProjectToList(projectObject);
    }

    const allKeys = Object.keys(localStorage);
    for (let i = 0; i < allKeys.length; i++) {
        retrieveData(allKeys[i]);
    }
}