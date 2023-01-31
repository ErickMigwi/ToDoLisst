let data = ["Harry", "Ross", "Bruce",  "Cook", "Carolyn",  "Morgan", "Albert", "Walker", "Randy", "Reed",  "Larry", "Barnes", "Lois", "Wilson", "Jesse",  "Campbell", "Ernest", "Rogers", "Theresa",  "Patterson", "Henry", "Simmons", "Michelle",  "Perry", "Frank", "Butler", "Shirley" ];
function displayData(){
  for(let names of data){
    console.log(names)
  }
}
function getData(){
  displayData()
}
// getData()
// promises 
let promise = new Promise((resolve, reject) => {
  if (data!=0){
   resolve(setTimeout(getData, 2000))
  }
  else{
    reject("Please enter a value")
  }
})
promise.then((message)=>{
  console.log(message)
})
promise.catch((message)=>{
  console.log(message)
})
Fetching data from the api
fetch('https://dummyjson.com/products')
.then(data=> data.json())
.then(data=> console.log(data))
.catch(error=> console.log("Error"))
.then(data=>{
  data.product.forEach((data) => {
  console.log(1)
})
})
function Person(name, age, education){
  this.FirstName= name,
  this. age= age,
  this.education= education,
  this.id = 30029

}

  let person =new Person("Erick", 21," softDev")
  console.log(person)
  Object.defineProperties(Person,'id',{
    configurable:false
  })
  console.log(Person)