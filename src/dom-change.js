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
function addTaskToDOM(){
    //let title = document.getElementById("title").nodeValue;
    //let duedate = document.getElementById("duedate").nodeValue;
    //let priority = document.getElementById("priority").nodeValue;
    //let description = document.getElementById("description").nodeValue;
    // task object
    //let newTask = Task(title, duedate, priority, description);

    let divContainer = document.getElementsByClassName("todo-container")[0];
    divContainer.style.display = "flex";
    let leftDiv = document.createElement("div")
    let rightDiv = document.createElement("div");

    
    let leftPriority = document.createElement("div");
    leftPriority.classList.add("priority-image");
    /* if(task.getPriority() == "Low"){
        leftPriority.style.borderColor = "green";
    }
    if(task.getPriority() == "Medium"){
        leftPriority.style.borderColor = "yellow";
    }
    if(task.getPriority() == "High"){
        leftPriority.style.borderColor = "red";
    } */

    let leftTitle = document.createElement("p");
   // leftTitle.textContent = task.getTitle();

    let rightDate = document.createElement("p");
    //rightDate.textContent = task.getDueDate();

    let rightEdit = document.createElement("img");
    //rightEdit.setAttribute("src", "../images/pen-to-square-solid.svg");

    let rightDelete = document.createElement("img");
    //rightDelete.setAttribute("src", "../images/trash-can-solid.svg");

    leftDiv.append(leftPriority, leftTitle);
    rightDiv.append(rightDate, rightEdit, rightDelete);
    divContainer.append(leftDiv, rightDiv);
}

function test(){
    let divContainer = document.getElementsByClassName("todo-container")[0];
    let test = document.createElement("div");
    test.textContent = "HENLO";
    test.style.color = "red"
    divContainer.append(test);

}


export {showTaskModal, addTaskToDOM, test};