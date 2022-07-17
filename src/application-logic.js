function addTaskModal(){
    // Create modal
    let modal = document.createElement("div");
    modal.classList.add("modal");

    // anchor all info to this div
    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // Create modal header
    let taskHeader = document.createElement("h3");
    taskHeader.textContent = "New Task";

    // Create form on modal
    let form = document.createElement("form");

    // Create task title
    let taskTitle = document.createElement("label");
    taskTitle.setAttribute("for","tasktitle");
    taskTitle.textContent = "Task Title";
    // create break?
    let taskTitleInput = document.createElement("input");
    taskTitleInput.setAttribute("type", "text");
    taskTitleInput.setAttribute("id", "tasktitle");
    taskTitleInput.setAttribute("name", "tasktitle");

    form.append(taskTitle, taskTitleInput);
    modalContent.append(taskHeader, form);
    modal.append(modalContent);
    let body = document.getElementsByTagName("body")[0];
    body.append(modal);

    // make modal visible
    let open = document.getElementsByClassName("addtask")[0];
    open.onclick = function() {
        modal.style.display = "block";
    }
    
    // close modal when user clicks outside of modal
    window.onclick = function(event){
        if(event.target == modal){
           deleteTaskModal();
        }
    }


}

function deleteTaskModal(){
    let modal = document.getElementsByClassName("modal")[0];
    modal.remove();
}

export {addTaskModal};