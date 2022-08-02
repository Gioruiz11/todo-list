let Project = (title) => {
    let taskArray = [];

    return {
        // read
        getTitle(){
            return title;
        },
        getArray(){
            return taskArray;
        },
        // update
        setTitle(title){
            this.title = title;
        },
        setTask(task){
            taskArray.push(task)
        }
    }
}

let Task = (title, duedate, priority, description) => {
// CRUD factory function

    let id = crypto.randomUUID();

    return {
        // read
        getId(){
            return id;
        },
        getTitle() {
            return title;
        },
        getDueDate(){
            return duedate;
        },
        getPriority(){
            return priority;
        },
        getDescription(){
            return description;
        },
        // update
        setTitle(title){
            this.title = title;
        },
        setDueDate(duedate){
            this.duedate = duedate;
        },
        setPriority(priority){
            this.priority = priority;
        },
        setDescription(description){
            this.description = description;
        },

    }

}

function createNewTask(){
    let title = document.getElementById("title").value;
    let duedate = document.getElementById("duedate").value;
    let priority = document.getElementById("priority").value;
    let description = document.getElementById("description").value;
    let newTask = Task(title, duedate, priority, description);
    return newTask;
}

function createNewProject(){
    // get project name
    // return new project
}




export{Task, createNewTask};
