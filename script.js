const add = document.querySelector("#add");
const todolist = document.querySelector(".todo-list");
const inp = document.querySelector("input");

add.addEventListener("click", () => {
  if (inp.value.trim() == "") return;

  
  let list = document.createElement("div");
  list.classList.add("list");
  todolist.prepend(list);
  
  let para = document.createElement("h3");
  para.classList.add("para");
  list.append(para);
  para.textContent = inp.value;
  
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


  del.addEventListener('click',()=>{
    // todolist.removeChild('div')
    const a = document.querySelector('.list')
    console.log(a)
    list.remove()
  })

//   edit.addEventListener('click',()=>{
//     console.log("Edit Clicked")
//     let flag = true;
//     if(flag){
//         para.setAttribute('contenteditable','true')
//         edit.textContent = "Save"
//         edit.style.backgroundColor = "green"
//         flag = false;
//     }else{
//         para.removeAttribute('contenteditable')
//         console.log("Attribute removed")
//         edit.textContent = "Edit"
//         edit.style.backgroundColor = "#cc9f0a"
//         flag = true;
        
//     }
//     // para.textContent= "Edit Clicked"
//   })


// edit.addEventListener("click", () => {
//   let newText = prompt("Edit task:", para.textContent);

//   if (newText !== null && newText.trim() !== "") {
//     para.textContent = newText;
//   }
// });


edit.addEventListener("click", () => {
  if (edit.textContent === "Edit") {
    // Edit Mode ON

    para.contentEditable = true;
    para.focus();

    edit.textContent = "Save";
    edit.style.backgroundColor = "green";
    // edit.addEventListener('mouseenter',()=>{
    //   edit.style.backgroundColor = "red"
    //   console.log("Mouse ENtered")
    // })
  } else {
    // Edit Mode OFF

    para.contentEditable = false;

    edit.textContent = "Edit";
    edit.style.backgroundColor = "#cc9f0a";
  }
});
  inp.value = "";
});
