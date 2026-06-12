const add = document.querySelector("#add");
const todolist = document.querySelector(".todo-list");
add.addEventListener("click", () => {
  let list = document.createElement("div");
  list.classList.add("list");
  todolist.append(list);

  let para = document.createElement("h3");
  para.classList.add("para");
  list.append(para);

  let todoListButtons = document.createElement("div");
  todoListButtons.classList.add("todo-list-buttons");
  list.append(todoListButtons);

  let edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.classList.add("edit");
  edit.classList.add("btn");
  todoListButtons.append(edit);

  let del = document.createElement("button");
  del.textContent = "Delete";
  del.classList.add("delete");
  del.classList.add("btn");
  todoListButtons.append(del);
});
