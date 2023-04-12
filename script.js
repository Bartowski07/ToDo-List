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
});


/* Edit Function */
const testItem = document.querySelector('.item2');
const listItemText = document.querySelectorAll('.listItemTxt');
function taskEdit (e) {
    const input = document.createElement("input");
    const testTextGet = testItem.innerHTML;
    input.type = "text";
    input.value = testTextGet;
    testItem.parentNode.replaceChild(input, testItem);
    console.log(testTextGet);
    document.addEventListener('keydown', function(event) {
      if (event.code === 'Enter') {
        const replacedText = input.value;
        console.log(replacedText);
        const editedTask = document.createElement("p");
        editedTask.classList.add("listItemTxt item2");
        editedTask.innerHTML = replacedText;
        console.log(editedTask);
        // input.parentNode.replaceChild()
      }
    });
}
console.log(listItemText);
testItem.addEventListener("click", taskEdit);


