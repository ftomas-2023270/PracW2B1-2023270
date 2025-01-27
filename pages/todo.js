const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const taskModal = new bootstrap.Modal(document.getElementById("addTaskModal"));
let tasks = []; // Array para almacenar las tareas

// Función para renderizar tareas
function renderTasks() {
    taskList.innerHTML = "";

    // Ordenar tareas por prioridad
    tasks.sort((a, b) => {
        const priorities = { Alta: 1, Media: 2, Baja: 3 };
        return priorities[a.priority] - priorities[b.priority];
    });

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center shadow-sm";
        taskItem.innerHTML = `
            <div>
                <h5>${task.title} <span class="badge bg-${getPriorityColor(task.priority)}">${task.priority}</span></h5>
                <p class="text-muted small">${task.details}</p>
            </div>
            <div>
                <button class="btn btn-sm btn-warning me-2" onclick="editTask(${index})">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Eliminar</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Función para asignar color según la prioridad
function getPriorityColor(priority) {
    if (priority === "Alta") return "danger";
    if (priority === "Media") return "warning";
    return "success";
}

// Función para agregar o editar tarea
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("taskTitle").value.trim();
    const details = document.getElementById("taskDetails").value.trim();
    const priority = document.getElementById("taskPriority").value;
    const taskId = document.getElementById("taskId").value;

    if (taskId) {
        // Editar tarea
        tasks[taskId] = { title, details, priority };
    } else {
        // Agregar nueva tarea
        tasks.push({ title, details, priority });
    }

    renderTasks();
    taskForm.reset();
    document.getElementById("taskId").value = "";
    taskModal.hide();
});

// Función para editar tarea
function editTask(index) {
    const task = tasks[index];
    document.getElementById("taskTitle").value = task.title;
    document.getElementById("taskDetails").value = task.details;
    document.getElementById("taskPriority").value = task.priority;
    document.getElementById("taskId").value = index;

    taskModal.show();
}

// Función para eliminar tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
