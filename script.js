/////////////////ADD TASK & DELETE TASKS & LOCALSTORAGE START/////////////////

// Add event listener for the add button
const addButton = document.querySelector(".addBtn");
addButton.addEventListener("click", function () {
  const taskInput = document.querySelector("#task");
  const task = taskInput.value;

  const newTask = document.createElement("div");
  newTask.classList.add("listItem", "todayItem");
  newTask.innerHTML = `
    <input type="checkbox" id="check1">
    <p class="listItemTxt">${task}</p>
    <button class="deleteItemBtn">x</button>
  `;

  const todayList = document.querySelector("#todayList");
  todayList.appendChild(newTask);

  // Save the task to localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Add event listener for the delete button on the new task
  const deleteButton = newTask.querySelector(".deleteItemBtn");
  deleteButton.addEventListener("click", function () {
    const listItem = deleteButton.parentElement;
    listItem.remove();

    // Remove the task from localStorage
    const taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });

  // Clear the task input field
  taskInput.value = "";

  // Focus on the task input field
  taskInput.focus();
});

// Add event listeners for the delete buttons on page load
const deleteButtons = document.querySelectorAll(".deleteItemBtn");
for (let i = 0; i < deleteButtons.length; i++) {
  const deleteButton = deleteButtons[i];
  deleteButton.addEventListener("click", function () {
    const listItem = deleteButton.parentElement;
    listItem.remove();

    // Remove the task from localStorage
    const task = listItem.querySelector(".listItemTxt").textContent;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });
}

// Load tasks from localStorage on page load
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const todayList = document.querySelector("#todayList");
for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];

  const newTask = document.createElement("div");
  newTask.classList.add("listItem", "todayItem");
  newTask.innerHTML = `
    <input type="checkbox" id="check1">
    <p class="listItemTxt">${task}</p>
    <button class="deleteItemBtn">x</button>
  `;

  todayList.appendChild(newTask);

  // Add event listener for the delete button on the new task
  const deleteButton = newTask.querySelector(".deleteItemBtn");
  deleteButton.addEventListener("click", function () {
    const listItem = deleteButton.parentElement;
    listItem.remove();

    // Remove the task from localStorage
    const taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });
}
``;

/////////////////ADD TASK & DELETE TASKS & LOCALSTORAGE END/////////////////

/////// EDIT FUNCTION START ////////
const main = document.querySelector('main');
const listItemText = document.querySelectorAll('.listItemTxt');
function taskEdit (event) {
  console.log(event);
  if (event.target.nodeName !== "P") {
    return;
  } 
    const selectedParagraph = event.target;
    console.log(selectedParagraph);
    const input = document.createElement("input");
    const testTextGet = selectedParagraph.innerHTML;
    input.classList.add("editInputBox");
    input.type = "text";
    input.value = testTextGet;
    console.log("Input field: " + input);
    selectedParagraph.parentNode.replaceChild(input, selectedParagraph);
    input.select();
    console.log(testTextGet);
    document.addEventListener('keydown', function(event) {
      if (event.code === 'Enter') {
        const replacedText = input.value;
        console.log(replacedText);
        const editedTask = document.createElement("p");
        editedTask.classList.add("listItemTxt", "item1");
        editedTask.innerHTML = replacedText;
        console.log(editedTask);
        input.parentNode.replaceChild(editedTask, input);
      }
    });
}
console.log(listItemText);
main.addEventListener("click", taskEdit);

/*
function Browser.addEventListener(method, callbackFunction) {
  const event = new Event(method);
  {method: click, target: whatEverWasClicked}

  callbackFunction(event);
}
*/

/////// EDIT FUNCTION END ////////