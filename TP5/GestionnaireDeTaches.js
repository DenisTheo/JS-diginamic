// Step 1: Define the TaskManager function that manages tasks
function TaskManager()
{
    // Initialize an empty array of tasks
    let tasks = [];

    // Method to add a new task with a description
    this.addTask = function(description)
    {
        tasks.push({description: description, completed: false});
        console.log(`Task added: "${description}"`);
    };

    // Method to mark a task as completed by index
    this.completeTask = function(index)
    {
        if (tasks[index])
        {
            tasks[index].completed = true;
            console.log(`Task "${tasks[index].description}" marked as completed.`);
        } else
        {
            console.log(`Task at index ${index} does not exist.`);
        }
    };

    // Method to display all tasks with their status
    this.showTasks = function()
    {
        if (tasks.length === 0)
        {
            console.log("No tasks to display.");
        } else
        {
            console.log("Tasks List:");
            tasks.forEach((task, index) =>
            {
                const status = task.completed ? "Completed" : "Not Completed";
                console.log(`[${index}] ${task.description} - ${status}`);
            });
        }
    };
}

// Step 2: Simulate some tasks and actions with hardcoded instructions

// Create a new TaskManager instance
const taskManager = new TaskManager();

// Add tasks to the manager
taskManager.addTask("Finish the project report");
taskManager.addTask("Buy groceries");
taskManager.addTask("Clean the house");

// Display all tasks
taskManager.showTasks();

// Complete a few tasks
taskManager.completeTask(0); // Mark "Finish the project report" as completed
taskManager.completeTask(1); // Mark "Buy groceries" as completed

// Display tasks after completion
taskManager.showTasks();

// Attempt to mark a non-existent task as completed
taskManager.completeTask(5); // This will show an error message

// Final tasks list
taskManager.showTasks();
