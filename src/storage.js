import { addProjectToList, projectList } from './todos.js';

export function projectStorage() {
    function saveProjectData(project) {
    localStorage.setItem(project.name, JSON.stringify(project));
    }

    for (let i = 0; i < projectList.length; i++) {
        saveProjectData(projectList[i]);
    }

    function getProjectData(project) {
        const projectString = localStorage.getItem(project.name);
        const projectObject = JSON.parse(projectString);
        console.log(projectString);
        console.log(projectObject);
        //fix, also priority changes ?? when tasks r deleted and project switches, could b proj display or storage issue
        //addProjectToList(projectObject);
    }

    for (let i = 0; i < projectList.length; i++) {
        getProjectData(projectList[i]);
    }
}