document.querySelector('button').onclick = function() {
    const input = document.querySelector('#newtask input');
    const taskValue = input.value.trim();

    if (taskValue.length === 0) {
        alert("Please enter a task first 👀");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class='task'>
                <span id='taskname'>
                    ${taskValue}
                </span>
                <button class='delete'>Delete</button>
            </div>
        `;

        input.value = ""; // clear input field

        // Attach delete functionality to all delete buttons
        const deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach(btn => {
            btn.onclick = function() {
                this.parentElement.remove();
            };
        });
    }
}
