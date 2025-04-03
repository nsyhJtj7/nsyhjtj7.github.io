const todoThings = document.getElementById("todoInput");
const listItems = document.getElementById("listItems");
const addItem = document.getElementById("addItem");

let todo = JSON.parse(localStorage.getItem("todoList"));
if (!todo) {
  todo = [];
}

let count = parseInt(sessionStorage.getItem("task"));
if (!count) {
  count = 0;
}
document.getElementById("number").textContent = "Number of Tasks: " + count;

addItem.addEventListener("click", AddToDoItem);

function AddToDoItem() {
  const newlist = todoThings.value.trim();

  if (todo.some(task => task.item === newlist)) {
      alert("This item already exists!");
      return;
  }

  const newTask = { item: newlist, done: false };
  todo.push(newTask);
  setLocalStorage();
  CreateToDoList();

  count++;
  sessionStorage.setItem("task", count);
  Count();

  todoThings.value = "";
}

function CreateToDoList() {
  listItems.innerHTML = "";
  todo.forEach((element) => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.gap = "10px";

    const taskDiv = document.createElement("div");

    if (element.done) {
      const doneText = document.createElement("span");
      doneText.textContent = "✔ DONE! ";
      doneText.style.color = "green";
      doneText.style.fontWeight = "bold";
      taskDiv.appendChild(doneText);

      const taskText = document.createElement("span");
      taskText.textContent = element.item;
      taskText.style.textDecoration = "line-through";
      taskDiv.appendChild(taskText);
    } else {
        const taskText = document.createElement("span");
        taskText.textContent = element.item;
        taskDiv.appendChild(taskText);
    }

    container.appendChild(taskDiv);

    if (!element.done) {
      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.onclick = function () { CompleteToDoItems(element); };
      container.appendChild(completeButton);
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () { DeleteToDoItems(element); };

    container.appendChild(deleteButton);
    container.classList.add("task-container");

    listItems.appendChild(container);
});
}

function CompleteToDoItems(item) {
  item.done = true;

  if (count > 0)
    count--;
  sessionStorage.setItem("task", count);
  Count();
  setLocalStorage();
  CreateToDoList();
}

function UpdateToDoItems(item) {
  const newTask = prompt("Edit your task:", item.item);
  if (newTask !== null) {
    const trimmedTask = newTask.trim();
    if (trimmedTask !== "") {
        item.item = trimmedTask;
        setLocalStorage();
        CreateToDoList();
    }
  }
}

function DeleteToDoItems(item) {
  const index = todo.indexOf(item);
    if (index !== -1) {
        todo.splice(index, 1);
        setLocalStorage();
        CreateToDoList();

        if (count > 0)
          count--;
        sessionStorage.setItem("task", count);
        Count();
    }
}

function setLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todo));
}

function Count() {
  document.getElementById("number").textContent = "Number of Tasks: " + count;
}

CreateToDoList();
Count();

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    let [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
}

function toggleDarkMode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.cookie = "mode=dark"
}

function toggleDefault() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.cookie = "mode=default"
}

const savedTheme = getCookie('mode');
if (savedTheme === 'dark') {
  document.body.style.backgroundColor = 'black';
  document.body.style.color = 'white';
} else {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
document.getElementById('dark').addEventListener('click', toggleDarkMode);
document.getElementById('default').addEventListener('click', toggleDefault);

async function getJoke() {
  try {
    let response = await fetch('https://official-joke-api.appspot.com/random_joke');
    let data = await response.json();

    document.getElementById('jokeSetUp').innerHTML = data.setup;
    document.getElementById('jokePunchline').innerHTML = data.punchline;
  }
  catch (error) {
    document.getElementById('jokeSetUp').innerHTML = 'Sorry, there was an error fetching a really funny joke.';
  }
}

document.getElementById("get").addEventListener('click', getJoke);