
let todoArray = []

const submitButton = document.querySelector('.btn')

let deleteTodo = function(e){
  console.log(e.target)
  e.target.parentElement.parentElement.remove()
  e.preventDefault()
}


submitButton.addEventListener('click', onclick)
function onclick(e){
  let todoItems = document.createElement('li');
  todoItems.className = 'collection-item'
  let todoDel = document.createElement('a');
  todoDel.className = 'delete-item secondary-content'
  let todoDelIcon = document.createElement('i')
  todoDelIcon.className = 'fa fa-remove'
  todoDel.appendChild(todoDelIcon)
  const task = document.getElementById("task")
  todoItems.textContent = task.value;
  todoItems.appendChild(todoDel)
  todoDel.addEventListener('click',deleteTodo) // referencing deleteTodo function(callback)
  console.log(todoItems)

  todoArray.push(todoItems)
  console.log(todoArray) 
  document.querySelector(".collection").appendChild(todoItems)
  e.preventDefault();
}


document.querySelector(".clear-tasks").addEventListener("click", function(e){
  const todoContainer = document.querySelector(".collection")
  console.log(todoContainer);
  todoContainer.children.remove();
  e.preventDefault();
})


document.querySelector("#task").addEventListener('input', function(e){
  e.preventDefault();
})
