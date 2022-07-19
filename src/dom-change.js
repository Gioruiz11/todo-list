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

    // Create break
    let br = document.createElement("br");

    // Create title
    let taskTitle = document.createElement("label");
    taskTitle.setAttribute("for","tasktitle");
    taskTitle.textContent = "Task Title";
    let taskTitleInput = document.createElement("input");
    taskTitleInput.setAttribute("type", "text");
    taskTitleInput.setAttribute("id", "tasktitle");
    taskTitleInput.setAttribute("name", "tasktitle");
    taskTitleInput.setAttribute("required", "");

    // Create due date
    let taskDueDate = document.createElement("label");
    taskDueDate.setAttribute("for", "duedate");
    taskDueDate.textContent = "Due date";
    let taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateInput.setAttribute("id", "duedate");
    taskDueDateInput.setAttribute("name", "duedate");
    taskDueDateInput.setAttribute("required", "");


    // Create priority
    let taskPriority = document.createElement("label");
    taskPriority.setAttribute("for", "priority");
    taskPriority.textContent = "Priority";
    let taskPriorityInput = document.createElement("select");
    taskPriorityInput.setAttribute("name", "priority");
    taskPriorityInput.setAttribute("id", "priority");
    // Create the 3 options
    let priorityOption1 = document.createElement("option");
    priorityOption1.textContent = "Low";
    priorityOption1.setAttribute("value", "low");
    let priorityOption2 = document.createElement("option");
    priorityOption2.textContent = "Medium";
    priorityOption2.setAttribute("value", "medium");
    let priorityOption3 = document.createElement("option");
    priorityOption3.textContent = "High";
    priorityOption3.setAttribute("value", "high");
    // Append options to priority input
    taskPriorityInput.append(priorityOption1, priorityOption2, priorityOption3);

    // Create Description
    let taskDescription = document.createElement("label");
    taskDescription.setAttribute("for", "description");
    taskDescription.textContent = "Description";
    let taskDescriptionInput = document.createElement("textarea");
    taskDescriptionInput.setAttribute("name", "description");
    taskDescriptionInput.setAttribute("id", "description");

    // Create submit button
    let taskSubmit = document.createElement("input");
    taskSubmit.setAttribute("type", "submit");
    taskSubmit.textContent = "Submit";

    // Append all input elements to form
    form.append(taskTitle, br.cloneNode(), taskTitleInput, 
    br.cloneNode(), br.cloneNode(), taskDueDate, br.cloneNode(), 
    taskDueDateInput, br.cloneNode(), br.cloneNode(), 
    taskPriority, br.cloneNode(), taskPriorityInput,
    br.cloneNode(), br.cloneNode(), taskDescription,
    br.cloneNode(), taskDescriptionInput, br.cloneNode(),
    br.cloneNode(), taskSubmit);

    // Append form to modalContent, then modalContent to body
    modalContent.append(taskHeader, form);
    modal.append(modalContent);
    let body = document.getElementsByTagName("body")[0];
    body.append(modal);

    // make modal visible on addtask button click
    let open = document.getElementsByClassName("addtask")[0];
    open.onclick = function() {
        modal.style.display = "block";
    }
    
    // close and delete modal when user clicks outside of modal
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