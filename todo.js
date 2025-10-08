const add = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

let tasks = [];

function addTask(txt) {
    const task = {
        id: Date.now(),
        task: txt,
        fin: false
    };
    tasks.push(task);
}

function showTask() {
    todoList.innerHTML = "";
    
    tasks.forEach(task => {
        let check = document.createElement("input");
        check.type = "checkBox";
        check.id = task.id;
        check.checked = task.fin;

        let todo = document.createElement("label");
        todo.textContent = task.task;    
        todo.htmlFor = task.id;    

        todoList.appendChild(check);
        todoList.appendChild(todo);
        todoList.appendChild(document.createElement("br"));


    });   
}

function updateTask(id, fin) {
    tasks.forEach(task => {
        if(id == task.id) {
            task.fin = fin;
        }
    });
}

add.addEventListener('submit', e => {
    e.preventDefault();

    let txt = add.task.value.trim();
    //console.log(txt);

    if(txt != "") {
        addTask(txt);
        showTask();
    }

    console.log(add.task.value);
    add.task.value = "";
    console.log(tasks);
});

todoList.addEventListener('change', e => {
    const target = e.target;
    if(target.tagName === "INPUT" && target.type === "checkbox") {
        updateTask(target.id, target.checked);
    }
});