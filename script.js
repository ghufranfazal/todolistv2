const add = document.querySelector("#add");
const todolist = document.querySelector(".todo-list");
const inp = document.querySelector("input");

function addTodo() {
  if (inp.value.trim() === "") return;

  let list = document.createElement("div");
  list.classList.add("list");
  todolist.prepend(list);

  let para = document.createElement("h3");
  para.classList.add("para");
  para.textContent = inp.value;
  list.append(para);

  let todoListButtons = document.createElement("div");
  todoListButtons.classList.add("todo-list-buttons");
  list.append(todoListButtons);

  let edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.classList.add("edit", "btn");
  todoListButtons.append(edit);

  let del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("delete", "btn");
  todoListButtons.append(del);

  // Delete
  del.addEventListener("click", () => {
    list.remove();
  });

  // Edit / Save
  edit.addEventListener("click", () => {
    if (edit.textContent === "Edit") {
      para.contentEditable = true;
      para.focus();

      edit.textContent = "Save";
      edit.style.backgroundColor = "green";
    } else {
      para.contentEditable = false;

      edit.textContent = "Edit";
      edit.style.backgroundColor = "#cc9f0a";
    }
  });

  inp.value = "";
}

// Add button click
add.addEventListener("click", addTodo);


