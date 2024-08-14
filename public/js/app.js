let form = document.querySelector(".form");
let inputTask = document.querySelector("input");
let buttonTask = document.querySelector("button");
let todo = document.querySelector(".list");

buttonTask.addEventListener("click", () => {
  let value = inputTask.value;
  if (!value) {
    return;
  } else {
    let newDivTask = document.createElement("div");
    newDivTask.className = "swim-lane";
    let newTask = document.createElement("input");
    newTask.readOnly = true;
    newTask.classList.add = "task";
    let icons = document.createElement("div");
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "bi bi-trash3";
    let editIcon = document.createElement("i");
    editIcon.className = "bi bi-pencil-square";
    newDivTask.setAttribute("draggable", "true");
    newTask.value = value;
    console.log(newDivTask);
    todo.appendChild(newDivTask);
    newDivTask.appendChild(newTask);
    newDivTask.appendChild(icons);
    icons.appendChild(deleteIcon);
    icons.appendChild(editIcon);
    inputTask.value = "";
    deleteIcon.addEventListener("click", () => {
      newDivTask.remove();
    });
    editIcon.addEventListener("click", () => {
      if (newTask.readOnly == true) {
        newTask.readOnly = false;

        newTask.focus();
      } else {
        newTask.readOnly = true;
      }
    });
  }
  dragTasks();
});

// & Drag and Drop
let drag = null;
const dragTasks = () => {
  let taskes = document.querySelectorAll(".swim-lane");
  console.log(taskes);

  taskes.forEach((task) => {
    console.log(task);

    task.addEventListener("dragstart", () => {
      drag = task;
      task.style.opacity = "0.5";
    });
    task.addEventListener("dragend", () => {
      drag = null;
      task.style.opacity = "1";
    });
    let boxes = document.querySelectorAll(".list")
    boxes.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault()
        box.style.background = "#d28d5f";
        box.style.color = "#fefefe";
      });
      box.addEventListener("dragleave", () => {
        box.style.background = "#fefefe";
        box.style.color = "#d28d5f";
      });
      box.addEventListener("drop", ()=>{
        box.append(drag )
        box.style.background = "#fefefe";
        box.style.color = "#d28d5f";
      })
    });
  });
};

dragTasks();
