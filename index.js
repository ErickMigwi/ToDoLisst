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

 
 toDoEl.innerHTML=Todos
 task.value= ""
 description.value = ""
 completionDate.value = ""
 console.log({title:task.value, description:description.value, date:completionDate.value})
 console.log(todos)

})
function hold(){
  todos.splice(1, 1)
  console.log(todos)
}

// let sum=(num1, num2)=>{
//     return num1+num2
//     //console.log(perimeter)
// }
// console.log(sum(1,2))

// let toDos = []
// let toDosDesc = []
// let toDosDate = []
// let listItems =""

// let addTask = document.getElementById("addTask-btn")
// addTask.addEventListener("click", function(){
//     toDos.push(task.value)
//    toDosDesc.push(description.value)
// toDosDate.push(completionDate.value)
//     console.log(toDos)
//     task.value= ""
//     description.value = ""
//     completionDate = ""
//     for(let i= 0; i<toDos.length; i++){
//         for(let j =0; j<toDosDesc.length; j++){
//             for(let c=0; c<toDosDate.length; c++){
//         listItems+=`<li><span id="task">Task:${toDos}</span> <span id= "description">Description: ${toDosDesc}</span> <span id= "date">Completion Date: ${toDosDate}</span></li><span><button onclick= "hold()">Completed</button></span>`
//             }
//     }
//     }
//     //console.log(toDos[i]+toDosDesc[i]+toDosDate[i])

//     toDoEl.innerHTML= listItems
// })