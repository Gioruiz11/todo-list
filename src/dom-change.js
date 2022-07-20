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

function addTask(){
// add task to DOM, with proper buttons and functionality
}

function removeTask(){
// remove task from dom
}

export {showTaskModal};