const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


//empty array
 let todoItems = [];
 todoInput.focus()


 function addTodo(text) {
     todoItems.push(text);
}

function appendTodo(text) {
    const li = document.createElement("li");
    li.innerText = text;
    todoList.appendChild(li);
}


 function eventHandler() {
    const todoText = todoInput.value;
    if (todoText === '') {
        alert('please enter text');
         }else{
            addTodo(todoText);
            appendTodo(todoText);
            todoInput.value = '';
            todoInput.focus()

         }
    

}

addBtn.addEventListener('click', eventHandler);















// //empty array
//  let todoItems = [];
//  todoInput.focus()


//  function addTodo(text) {
//      todoItems.push(text);
// }

// function appendTodo(text) {
//     const li = document.createElement("li");
//     li.innerText = text;
//     todoList.appendChild(li);
// }


//  function eventHandler() {
//     alert('please enter text')
//     const todoText = todoInput.value;
//     addTodo(todoText);
//     appendTodo(todoText);
//     todoInput.value = '';
//     todoInput.focus()
// }

// addBtn.addEventListener('click', eventHandler);



   







