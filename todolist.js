document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const categoryInput = document.getElementById('category-input');
    const dueDateInput = document.getElementById('due-date-input');
    const priorityInput = document.getElementById('priority-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', manageTask);

    function addTask(event) {
        event.preventDefault();

        const taskText = taskInput.value;
        const category = categoryInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>
                <strong>${taskText}</strong> (${priority}) - ${category} - ${dueDate}
            </span>
            <span>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </span>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        categoryInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'low';
    }
    function manageTask(event) {
        if (event.target.classList.contains('complete-btn')) {
            const taskItem = event.target.parentElement.parentElement;
            taskItem.classList.toggle('complete');
        } else if (event.target.classList.contains('delete-btn')) {
            const taskItem = event.target.parentElement.parentElement;
            taskItem.remove();
        }
    }
});
