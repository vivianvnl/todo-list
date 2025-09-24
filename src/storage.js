import { addProjectToList, projectList } from './todos.js';

export function saveProjectData() {
    for (let i = 0; i < projectList.length; i++) {
        localStorage.setItem(projectList[i].name, JSON.stringify(projectList[i]));
    }
    const allValues = Object.values(localStorage);
    console.log(allValues);
}

export function getProjectData() {
    projectList.length = 0;
    console.log(projectList);
    function retrieveData(project) {
        const projectString = localStorage.getItem(project);
        const projectObject = JSON.parse(projectString);
        console.log(projectObject);

        addProjectToList(projectObject);
        console.log(projectList);
    }

    const allKeys = Object.keys(localStorage);
    for (let i = 0; i < allKeys.length; i++) {
        retrieveData(allKeys[i]);
    }
}

//priority changes ?? when tasks r deleted and project switches, could b proj display or storage issue