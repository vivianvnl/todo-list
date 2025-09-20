# To Do List

## Goal
Create a webapp where you can add to-do list tasks to different projects and add, modify, and delete tasks as necessary. Be able to add a task with a description and due date and priority level and delete it. Be able to store all the info added by the user so it doesn't all disappear after browser refresh.

## Pseudo
- input task info into object constructor to create new task to a specific project
- display (in console) all tasks added in respective projects
- UI
- view created tasks in DOM
- switch between projects and their tasks
  - task part of project content html
  - remove html and replace with another project's html when project clicked in nav --using event.target.id
- priority level
- delete tasks
- checklist (cross off)

- expand/modify tasks
- new task lets you choose which project to add to

- store task info in database
  - view database
- check browser refresh

- create array of projects and iterate over them to see if target event id is == to a project's variable name in array and if so, display that project's contents in selectedProject div