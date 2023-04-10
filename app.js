document.querySelector('#push').onclick = ()=> {
    if(document.querySelector("#newTask input").value.length == 0){
    alert("Ples enter your task");
    }
    else{
        document.querySelector('#tasks').innerHTML +=`
        <div class = "task">
        <span id="taskName">
        ${document.querySelector('#newTask input').value}
        </span> 
        <button class="delete">
        remove
        </button>
        </div>
`;
var current_tasks = document.querySelectorAll(".delete");
for(var i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
        this.parentNode.remove();
    }
}

    }

    
}