import {showTaskModal} from "./dom-change.js";

let addTask = document.getElementsByClassName("addtask")[0];
addTask.addEventListener("click", showTaskModal);