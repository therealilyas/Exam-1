let taskOne = document.getElementById("taskOne");
let taskTwo = document.getElementById("taskTwo");
let taskThree = document.getElementById("taskThree");

document.querySelectorAll('.upBtn').forEach(button => {
    button.addEventListener('click', (e) => {
        const taskDiv = e.target.parentElement;
        const previousDiv = taskDiv.previousElementSibling;

        if (previousDiv) {
            const currentTask = taskDiv.querySelector('span').innerText;
            const previousTask = previousDiv.querySelector('span').innerText;

            taskDiv.querySelector('span').innerText = previousTask;
            previousDiv.querySelector('span').innerText = currentTask;
        }
    });
});

document.querySelectorAll('.downBtn').forEach(button => {
    button.addEventListener('click', (e) => {
        const taskDiv = e.target.parentElement;
        const nextDiv = taskDiv.nextElementSibling;

        if (nextDiv) {
            const currentTask = taskDiv.querySelector('span').innerText;
            const nextTask = nextDiv.querySelector('span').innerText;

            taskDiv.querySelector('span').innerText = nextTask;
            nextDiv.querySelector('span').innerText = currentTask;
        }
    });
});
