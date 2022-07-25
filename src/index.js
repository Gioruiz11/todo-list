import {showTaskModal} from "./dom-change.js";

// make todo modal appear on button press
let addTask = document.getElementsByClassName("addtask")[0];
addTask.addEventListener("click", showTaskModal);
