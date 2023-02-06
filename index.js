let task = document.getElementById("Task-El")
let description = document.getElementById("description-el")
var date = document.getElementById("completionDate-el")
let addTaskBtn = document.getElementById("addTask-btn")
let ToDos= document.getElementById("theTask")
let saveTaskBtn= document.getElementById("completed")
let checkbox= document.getElementById("checkbox")
let completed = document.getElementById("completedTasks")
let uncompleted = document.getElementById("uncompleted")
let UncompletedTasks = document.getElementById("UncompletedTasks")
//let try = document.getElementById("try")
const taskArr = []
var taskObj =   {
  task: "",
  Description: "",
  date: "",
  completed: false,
  id: Math.floor( Math.random()*1000)
}
task.addEventListener("input", function(event){
  taskObj.task = event.target.value
})
description.addEventListener("input", function(event){
  taskObj.Description= event.target.value
})
date.addEventListener("input",function(event){
  taskObj.date = event.target.value
})
function cloneTodo() {
  let clone = {};
  for(let key in taskObj) {
    if(taskObj.hasOwnProperty(key)) {
      clone[key] = taskObj[key];
    }
  }
  return clone;
}
addTaskBtn.addEventListener("click", (event)=>{
  taskObj.id = Math.floor( Math.random()*1000)
  // checkbox.addEventListener("change", function(){
  //   taskObj.completed = checkbox.checked
  // })
  //console.log(taskObj.completed);
  console.log(taskObj)
  taskArr.push( cloneTodo(taskObj) );
  console.log(taskArr);
  task.value= ""
 date.value= ""
  description.value = ""
  localStorage.setItem("MyTodos", JSON.stringify(taskArr))
  ToDos.innerHTML+= `<li><span id="task">Task:${taskObj.task}</span> <span id= "description">Description: ${taskObj.Description}</span> <span id= "date">Completion Date: ${taskObj.date}</span></li><span><button id = "${taskObj.id}" onclick= "hold()">Completed</button></span>` 
return taskArr
})

let currentTodos = []
currentTodos.push(JSON.parse( localStorage.getItem("MyTodos")))

//console.log(currentTodos)
let Todos= localStorage.getItem("MyTodos")
Todos = JSON.parse(Todos)
Todos.forEach(element => {
  ToDos.innerHTML+= `<li><span id="task">Task:${element.task}</span> <span id= "description">Description: ${element.Description}</span> <span id= "date">Completion Date: ${element.date}</span></li><span><button onclick= "hold()">Completed</button></span>` 
});
function hold(item){
  Todos=[]
  Todos=localStorage.getItem("MyTodos")
  Todos = JSON.parse(Todos)
  Todos.forEach((item, index) => {
      Todos[index].completed = true;
    });

  console.log(Todos);
  
}
saveTaskBtn.addEventListener("click", function(){

  Todos.forEach(element => {
    if(element.completed){
      
   completed.innerHTML+=  `<li><span id="task">Task:${element.task}</span> <span id= "description">Description: ${element.Description}</span> <span id= "date">Completion Date: ${element.date}</span></li>` 
  }});
 
})
function uncomplete(){
  Todos.forEach(element => {
    if(element.completed===false){
   UncompletedTasks.innerHTML+=  `<li><span id="task">Task:${element.task}</span> <span id= "description">Description: ${element.Description}</span> <span id= "date">Completion Date: ${element.date}</span></li>` 
    }}) 
  }





