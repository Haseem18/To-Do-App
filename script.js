const taskInputElement = document.querySelector('#taskInput');
const addTaskElement = document.querySelector('#addTask');

addTaskElement.addEventListener("click", () => {
  const taskListElement = document.querySelector('#taskList');
  const liElement = document.createElement('li');
  liElement.textContent = taskInputElement.value;
  const btnElement = document.createElement('button');
  btnElement.innerHTML = 'Delete';
  taskInputElement.value = "";
  liElement.appendChild(btnElement);
  taskListElement.appendChild(liElement);
  
  btnElement.addEventListener("click", () => {
    liElement.remove();
  });
});
