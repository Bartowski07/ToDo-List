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
    input.type = "text";
    input.value = testTextGet;
    selectedParagraph.parentNode.replaceChild(input, selectedParagraph);
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