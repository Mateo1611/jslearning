// Seleccionamos los elementos
const addTaskButton = document.getElementById('addTaskButton');
const taskInputContainer = document.getElementById('taskInputContainer');
const newTaskInput = document.getElementById('newTaskInput');
const saveTaskButton = document.getElementById('saveTaskButton');
const taskList = document.getElementById('taskList');

// Mostrar el cuadro de texto para agregar una nueva tarea al presionar el botón "+"
addTaskButton.addEventListener('click', function() {
    taskInputContainer.style.display = 'block';  // Mostrar el cuadro de texto
});

// Agregar una nueva tarea a la lista cuando se presione "Agregar"
saveTaskButton.addEventListener('click', function() {
    const taskText = newTaskInput.value;

    // Verificamos que el texto no esté vacío
    if (taskText.trim() !== '') {
        const newTaskItem = document.createElement('li');
        newTaskItem.innerHTML = `<input type="checkbox"> ${taskText}`;
        taskList.appendChild(newTaskItem);  // Agregamos la nueva tarea a la lista

        // Limpiamos el input
        newTaskInput.value = '';
        taskInputContainer.style.display = 'none';  // Ocultar el cuadro de texto nuevamente
    }
});
