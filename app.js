//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const form1 = document.getElementById('form1');
//Event Listaners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

form1.addEventListener('submit' , (event) => {
    event.preventDefault();
    checkInputs();
    
});


//Functions

function addTodo(event){
    
    event.preventDefault();
    
    //Todo DIV
    
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDIV.appendChild(newTodo);
    
   // saveLocalTodos(todoInput.value);
    
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDIV.appendChild(completedButton);
    
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDIV.appendChild(trashButton);
    
    todoList.appendChild(todoDIV);
    
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
   
   if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener("transitioned", function(){
            todo.remove();
        }); 
    }
   
   if(item.classList[0] === "complete-btn"){
       const todo = item.parentElement;
       todo.classList.toggle("completed");
   }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    
        console.log("event kliknięty przy wyborze filtra", e.target.value);
        console.log("wybrany filtr", filterOption.value)
    todos.forEach(function(todo){
        console.log('ttttoooooddddooo', todo)
        switch(filterOption.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display = 'flex';
            }else {
                todo.style.display = 'none';
            }
            break;
            case "uncompleted":
            if(!todo.classList.contains('uncompleted')){
                todo.style.display = 'flex';
            }
            break;
                
            
        }
    });
}


function checkInputs(){
    const todoInputValue =  todoInput.value.trim();
    
        if (todoInputValue === ''){
        //show error
        setErrorFor(todoInputValue, 'Username cannot be black');
    }else if(!isLiterka(todoInputValue)){
               setErrorFor(todoInpuValue, 'składnia jest zła');

    }
    
}