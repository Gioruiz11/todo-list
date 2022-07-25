import {Task} from "./application-logic.js";

function showTaskModal(){
    let modal = document.getElementsByClassName("modal")[0];
    let btn = document.getElementsByClassName("addtask")[0];
    // onclick, make modal appear
    btn.onclick = function(){
        modal.style.display = "block";
    }
    // if you click outside window, modal closes
    window.onclick = function(e){
        if(e.target == modal){
            modal.style.display = "none";
        }
    }
}

// adds created task to DOM to be displayed
function addTaskToDOM(task){

    let divContainer = document.getElementsByClassName("todo-container")[0];
    divContainer.style.display = "flex";
    let leftDiv = document.createElement("div")
    let rightDiv = document.createElement("div");

    let leftPriority = document.createElement("div");
    leftPriority.classList.add("priority-image");
    let leftTitle = document.createElement("p");
    
    let rightDate = document.createElement("p");
    let rightEdit = document.createElement("img");
    let rightDelete = document.createElement("img");
    leftDiv.append(leftPriority, leftTitle);
    rightDiv.append(rightDate, rightEdit, rightDelete);
    divContainer.append(leftDiv, rightDiv);
}


export {showTaskModal};