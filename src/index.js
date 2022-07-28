import {showTaskModal, addTaskToDOM} from "./dom-change.js";

// make todo modal appear on button press
let addTask = document.getElementsByClassName("addtask")[0];
addTask.addEventListener("click", showTaskModal);
// add task to DOM on submit click
let submit = document.getElementsByClassName("submit")[0];
submit.addEventListener("click", addTaskToDOM);