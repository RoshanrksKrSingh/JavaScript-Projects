const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;
//function to add todo
const addToDo = ()=>{
    const inputText= inputBox.value.trim();
    if(inputText.length <= 0){
        alert("You must right somthing in your to do");
        return false;
    }
     
    if(addBtn.value === "Edit"){
          // Passing the original text to editLocalTodos function before edit it in the todoList
        editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML=inputText;
        addBtn.value= "Add";
        inputBox.value="";
    }else{
    //creating p tag
    const li = document.createElement('li');
    const p =document.createElement('p');
    p.innerHTML=inputText;
    li.appendChild(p);

     //creating edit button
   const editBtn =document.createElement('button');
   editBtn.innerHTML='Edit';
   editBtn.classList.add('btn', 'editBtn');
   li.appendChild(editBtn);

    // create delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML= 'Remove';
    deleteBtn.classList.add('btn', 'deleteBtn');
    li.appendChild(deleteBtn);
  
    todoList.appendChild(li);
    inputBox.value="";
  
    saveLocalToDos(inputText);
}
}
//function to update(Edit/Delete) todo
const updateToDo = (e)=>{
    if(e.target.innerHTML==="Remove"){
        todoList.removeChild(e.target.parentElement);
        deleteLocalToDos(e.target.parentElement);
    }

    if(e.target.innerHTML === "Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}
//Function to Save local todos
const saveLocalToDos = (todo)=>{
   let todos;
   if(localStorage.getItem('todos')=== null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem("todos"));
   }
   todos.push(todo);
   localStorage.setItem('todos', JSON.stringify(todos));
}
// Function to Get local todos
const getLocalToDos = () =>{
    let todos;
    if(localStorage.getItem('todos')=== null){
     todos = [];
    }else{
     todos = JSON.parse(localStorage.getItem("todos"));
     todos.forEach(todo => {
         //creating p tag
    const li = document.createElement('li');
    const p =document.createElement('p');
    p.innerHTML=todo;
    li.appendChild(p);

     //creating edit button
   const editBtn =document.createElement('button');
   editBtn.innerHTML='Edit';
   editBtn.classList.add('btn', 'editBtn');
   li.appendChild(editBtn);

    // create delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML= 'Remove';
    deleteBtn.classList.add('btn', 'deleteBtn');
    li.appendChild(deleteBtn);
  
    todoList.appendChild(li);
     });
    }
}
//Function to Deletelocal todos
const deleteLocalToDos = (todo) =>{
    let todos;
   if(localStorage.getItem('todos')=== null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem("todos"));
   }
   let todoText = todo.children[0].innerHTML;
   let todoIndex = todos.indexOf(todoText);
   todos.splice(todoIndex, 1);
   localStorage.setItem("todos", JSON.stringify(todos));
}

//Function to edit local todos

const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

   document.addEventListener('DOMContentLoaded', getLocalToDos);
   addBtn.addEventListener("click", addToDo);
   todoList.addEventListener('click', updateToDo);



