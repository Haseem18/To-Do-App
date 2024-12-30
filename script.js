const taskInputElement = document.querySelector('#taskInput');
const addTaskElement = document.querySelector('#addTask');

addTaskElement.addEventListener("click", (event) => {
    addTask();
});

taskInput.addEventListener("keydown", (click) => {
  if (event.key === "Enter") {
    addTask();
  }
})

const listItems = [];

function addTask() {
  const taskListElement = document.querySelector('#taskList');
  
  const liElement = document.createElement('li');
  if (!taskInputElement.value || taskInputElement.value.trim().length === 0) {
    alert("Task cannot be empty or only spaces!");
    return;
  }
  if (listItems.includes(taskInputElement.value.toLowerCase())) {
    alert("Aleady Exist");
    return;
  }
  listItems.push(taskInputElement.value.toLowerCase());
  liElement.textContent = taskInputElement.value;
  
  const btnElement = document.createElement('button')
  btnElement.innerHTML = "Delete";
  taskInputElement.value = "";
  liElement.appendChild(btnElement);
  taskListElement.appendChild(liElement);
  btnElement.addEventListener("click", () => {
    listItems.pop(liElement.remove());
  });
}
