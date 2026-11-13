let total = 0;

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    let message = document.getElementById("message");

    if (task === "") {
        message.innerText = "Please enter a task!";
        return;
    }

    message.innerText = "";

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;
    span.className = "task-text";

    span.onclick = function() {
        span.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function() {
        li.remove();
        total--;
        updateTotal();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    total++;
    updateTotal();

    input.value = "";
}

function updateTotal() {
    document.getElementById("totalTasks").innerText = total;
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

