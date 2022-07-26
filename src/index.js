import {showTaskModal, addTaskToDOM, test} from "./dom-change.js";

// make todo modal appear on button press
let addTask = document.getElementsByClassName("addtask")[0];
addTask.addEventListener("click", showTaskModal);
let submit = document.getElementById("Submit");
submit.addEventListener("click", test);