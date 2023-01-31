let task = document.getElementById("Task-El")
console.log(task.value);
let description = document.getElementById("description-el")
let completionDate = document.getElementById("completionDate-el")
let toDoEl = document.getElementById("theTask")
let todos = []
let Todos = ""
let i = 0;
let addTask = document.getElementById("addTask-btn")

addTask.addEventListener("click", function(){
  console.log(todos);
  let newTodo = {title:task.value, description:description.value, date:completionDate.value}
    todos.push(newTodo)
    let Mytodos=[]
    
i++
console.log(i)
    localStorage.setItem("Mytodos",JSON.stringify(todos))
    Mytodos =JSON.parse(localStorage.getItem("Mytodos"))
   // console.log(Mytodos[i].title)
//    let =0  
//    i=Math.floor( Math.random()*10);
//    console.log(i);
  Todos+= `<li><span id="task">Task:${newTodo.title}</span> <span id= "description">Description: ${newTodo.description}</span> <span id= "date">Completion Date: ${newTodo.date}</span></li><span><button onclick= "hold()">Completed</button></span>` 

  toDoEl.innerHTML=Todos
 task.value= ""
 description.value = ""
 completionDate.value = ""
 console.log({title:task.value, description:description.value, date:completionDate.value})
 console.log(todos)
})
function hold(){
  alert('task deleted')
  toDoEl.innerHTML= "task deleted"
  console.log(todos)
}
