var taskId = 1000;

function addItem() {
    var list = document.getElementById("tasks");
    var newtask = document.getElementById("newitem");
    var comp = document.createElement("li");
    var label = document.createElement("label");
    var close = document.createElement("label");

    //Component attributes
    comp.setAttribute('id', 'task-' + taskId);
    comp.setAttribute('class', "task");
    comp.setAttribute('onClick', 'markCompleted("' + 'task-' + taskId + '")');
    //Component value
    label.appendChild(document.createTextNode(newtask.value));
    //Close button
    close.setAttribute('class', "close");
    close.appendChild(document.createTextNode("X"));
    close.setAttribute('onClick', 'removeItem("' + 'task-' + taskId + '")');
    //Add labels to component
    comp.appendChild(label);
    comp.appendChild(close);
    //Add component to list
    list.appendChild(comp);

    newtask.value = "";
    taskId++;

}

function removeItem(itemId) {
    var list = document.getElementById("tasks");
    var item = document.getElementById(itemId);
    list.removeChild(item);
}

function markCompleted(itemId) {
    var item = document.getElementById(itemId);
    item.style.backgroundColor = "#35424b";
    item.style.textDecoration = "line-through"
}