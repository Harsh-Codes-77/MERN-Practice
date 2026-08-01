// const inp = document.querySelector("input")
// const btn = document.querySelector("#add");
// const todoBox = document.querySelector(".todo-list")

// btn.addEventListener("click",()=>{
//     const value = inp.value;
//     if(value.trim() === "") return;
//     todoBox.innerHTML += `<div class="li">
//                     <h3>${value}</h3>
//                     <div>
//                         <button class="btn edit" >Edit</button>
//                         <button class="btn del">Delete</button>
//                     </div>`

//     inp.value = "";
// })

const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

btn.addEventListener("click", addTask);

function addTask() {

    const value = inp.value.trim();

    if(value === "") return;

    // Main div
    const li = document.createElement("div");
    li.className = "li";

    // Task
    const task = document.createElement("h3");
    task.innerText = value;

    // Button Box
    const btnBox = document.createElement("div");

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "btn edit";

    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "btn del";

    // Append Buttons
    btnBox.appendChild(editBtn);
    btnBox.appendChild(delBtn);

    // Append in li
    li.appendChild(task);
    li.appendChild(btnBox);

    // Append in Todo List
    todoBox.appendChild(li);

    // Clear Input
    inp.value = "";

    // Delete
    delBtn.addEventListener("click", function () {
        li.remove();
    });

    // Edit
    editBtn.addEventListener("click", function () {

        const newTask = prompt("Edit Task", task.innerText);

        if(newTask !== null && newTask.trim() !== ""){
            task.innerText = newTask;
        }

    });

}