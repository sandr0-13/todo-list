const input = document.querySelector('.todo-input');
const button = document.querySelector('.add-button');
const taskList = document.querySelector('.task-list');

button.addEventListener('click', () => {
    const initial = input.value.trim();
    const task = initial.charAt(0).toUpperCase() + initial.slice(1);

    if (task !== '') {

        const existingTasks = document.querySelectorAll('.task-list li');
        const duplicate = Array.from(existingTasks).some(li =>
            li.textContent.replace('X', '').trim().toLowerCase() === task.toLowerCase()
        );

        if (duplicate) {
            alert('Task already exists!');
            return;
        }

        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.className = 'remove-button';

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task));
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        removeBtn.addEventListener('click', () => {
            li.classList.add('removing'); // Optional: if you want animation
            setTimeout(() => {
                li.remove();
            }, 1500);
        });

        checkbox.addEventListener('change', () => {
            li.classList.toggle('checked');
            if (checkbox.checked) {
                setTimeout(() => li.remove(), 1500);
            }
        });

        input.value = '';
        input.placeholder = 'Enter a new task...';
    }
});



