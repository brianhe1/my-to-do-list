// declare listOfTasksArray without assigning value
let listOfTasksArray;
// if there is an item in localStorage with the key 'todos'
if (localStorage.getItem('todos')) {
    // parses value to JSON object and assigned to listOfTasksArray
    listOfTasksArray = JSON.parse(localStorage.getItem('todos'));
} else {
    // assigned to new empty array
    listOfTasksArray = [];
}

// function to display today's date
function displayDate(){
    // get the current date
    let currentDate = new Date();
    // get the weekday as a string
    let weekday = currentDate.toLocaleString('default', { weekday: 'long' });
    // get the month as a string
    let month = currentDate.toLocaleString('default', { month: 'long' });
    // get the day of the month
    let day = currentDate.getDate();
    // display the date in the format "weekday, month day"
    let dateString = `${weekday}, ${month} ${day}`;
    // set date's innerHTML to dateString
    document.getElementById("date").innerHTML = dateString;
}

// function to display all the to dos on UI
function displayTasks() {
    // loop through every element in listOfTasksArray
    for(let i = 0; i < listOfTasksArray.length; i++) {
      // import a copy of the template element
      let template = document.querySelector("#template");
      let clone = document.importNode(template.content, true);
      // modify the content of the textarea to the corresponding task in listOfTasksArray
      let textarea = clone.querySelector("textarea");
      textarea.textContent = listOfTasksArray[i];
      // add the cloned template to UI
      document.querySelector(".to-do-list").appendChild(clone);
    }
    // call to deleteListeners() function to delete tasks when pressed
    deleteListeners();
}

// function to delete tasks when pressed
function deleteListeners(){
    // select button from html
    let deleteBtn = document.querySelectorAll("#deleteBtn");
    // for every button on UI, add event listeners and delete corresponding task when clicked
    deleteBtn.forEach((dB, i) => {
        dB.addEventListener("click", () => { deleteTask(i) });
    })
}

// function to delete task at index i
function deleteTask(i){
    // delete from listOfTasksArray
    listOfTasksArray.splice(i,1);
    // delete from local storage
    localStorage.setItem('todos', JSON.stringify(listOfTasksArray));
    // reload webpage (re-render)
    location.reload();
}

// adds new task to list when submitted with '+' button
let addTaskButton = document.querySelector("#add-task")
addTaskButton.addEventListener("click", () => {
    const task = document.querySelector("#new-todo");
    createTask(task);
})

// function to create task and push at end of listOfTasksArray
function createTask(task){
    // pushes (adds) new task to listOfTasksArray
    listOfTasksArray.push(task.value);
    // saves to local storage
    localStorage.setItem('todos', JSON.stringify(listOfTasksArray));
    // reload webpage (re-render)
    location.reload();
}

// obtain image and checkbox from HTML
const checkbox = document.getElementById("remove-image-checkbox");
const image = document.getElementById("image");
// add event listener for the change event on the checkbox
checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        // if the checkbox is checked, hide the image
        image.style.display = "none";
      } else {
        // If the checkbox is not checked, show the image
        image.style.display = "block";
      }
});

// load at window startup
window.onload = function() {
    // display today's date
    displayDate();
    // display to do tasks
    displayTasks();
};