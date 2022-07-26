let Project = (title) => {
    this.title = title;
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
        }
    }
}

let Task = (title, duedate, priority, description) => {
// CRUD factory function
    this.title = title;
    this.duedate = duedate;
    this.priority = priority;
    this.description = description;

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
export{Task};
