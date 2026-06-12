const add = document.querySelector('#add')
const todoList = document.querySelector('.todo-list')
const inp = document.querySelector('input')
// const h3 = document.querySelector('h3')



add.addEventListener('click',()=>{
    let value = inp.value;

    if(value.trim() == "") return;
    todoList.innerHTML += `<div class="list">
    <h3>${value}</h3>
    <div class="todo-list-buttons">
    <button class="edit btn">Edit</button>
    <button class="delete btn">Delete</button>
    </div>
    </div>`

    // console.log(value)
    inp.value = "";
})

