function addNewTask() {

    var newTask = document.getElementById('task').value;
    var taskAdded = document.getElementById('taskList');

    taskAdded.innerHTML += '<p>' + newTask + '</p>';

    document.getElementById('task').value = null;
}