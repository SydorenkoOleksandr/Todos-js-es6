// const person = {
//     name: 'Alex',
//     age: '28',
//     'double name': 'name', 
//     greet (){console.log('Greet')},

// }


// Object.prototype.sayHello = () =>{
//     console.log('Hello')
// }

// const lena = Object.create(person)

// lena.name = 'Elena'



// get all  active elements from html

const form = document.getElementById("form");
const input = document.getElementById("input");
// const button = document.getElementById("button");
const todo = document.getElementById("todo");
// if()
let todoList = [];
render()
//event to add todos
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo() {

    const newTodo = input.value;

    if (!newTodo) return;
    todoList.push({ 
        text: newTodo,
         completed: false ,
        });
        localStorage.setItem("todos", JSON.stringify(todoList));
    render()
}







function render() {
    todo.innerHTML = null;
    const todos = localStorage.getItem("todos");
    todoList = JSON.parse(todos) || [];

    for (let i = 0; i < todoList.length; i++) {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.addEventListener("click", (e) => {
            todoList[i].completed = e.target.checked;
            localStorage.setItem("todos", JSON.stringify(todoList));
            if (todoList[i].completed) {
                item.classList.add("completed");
                item.classList.remove("uncompleted");
                checkbox.checked = todoList[i].completed;
            } else {
                item.classList.add("uncompleted");
                item.classList.remove("completed");
                checkbox.checked = todoList[i].completed;
            }
            
            
        });
        const text = document.createElement("p");
            text.innerHTML = todoList[i].text;
    
            const button = document.createElement("button");
            button.innerText = "X";
            button.addEventListener("click", (e) => {
                todoList.splice(i, 1);
                localStorage.setItem("todos", JSON.stringify(todoList))
                render()
            })
           
            item.appendChild(checkbox);
            item.appendChild(text);
            item.appendChild(button);
            todo.appendChild(item);
            input.value = null;
    
        
    }
}

