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
function addTaskToDOM(newTask){
    
    // hook to html container
    let divContainer = document.getElementsByClassName("todo-container")[0];

    let newTodo = document.createElement("div");
    newTodo.classList.add("todo")

    let leftDiv = document.createElement("div");
    leftDiv.classList.add("left-side-todo");

    let rightDiv = document.createElement("div");
    rightDiv.classList.add("right-side-todo");
    
    let leftPriority = document.createElement("div");
    leftPriority.classList.add("priority-image");
     if(newTask.getPriority() == "low"){
        leftPriority.style.borderColor = "green";
    }
    if(newTask.getPriority() == "medium"){
        leftPriority.style.borderColor = "yellow";
    }
    if(newTask.getPriority() == "high"){
        leftPriority.style.borderColor = "red";
    } 

    let leftTitle = document.createElement("p");
    leftTitle.textContent = newTask.getTitle();

    let rightDate = document.createElement("p");
    rightDate.textContent = newTask.getDueDate();

    let rightEdit = document.createElement("img");
    rightEdit.setAttribute("src", "../images/pen-to-square-solid.svg");

    let rightDelete = document.createElement("img");
    rightDelete.setAttribute("src", "../images/trash-can-solid.svg");

    leftDiv.append(leftPriority, leftTitle);
    rightDiv.append(rightDate, rightEdit, rightDelete);
    newTodo.append(leftDiv, rightDiv);
    divContainer.append(newTodo);

    // click on todo to show information on modal
    leftDiv.addEventListener("click", expandTask); 
    let counter = 0;

    // Expand task on click, shows description
    function expandTask(){
        let modal = document.getElementsByClassName("info-modal")[0];
        let leftDiv = document.getElementsByClassName("left-side-todo")[counter];
        console.log(counter);
        counter++;
        // Get description of new task
        let infoDescription = document.getElementById("info-description");
        infoDescription.textContent = newTask.getDescription();

        // onclick, make modal appear
        leftDiv.onclick = function(){
            modal.style.display = "block";
        }
        // if you click outside window, modal closes
        window.onclick = function(e){
            if(e.target == modal){
                modal.style.display = "none";
            }
        }; 
    } 

    // Delete task on click
    rightDelete.addEventListener("click", deleteTask);
    function deleteTask(){

    }
}

export {showTaskModal, addTaskToDOM};