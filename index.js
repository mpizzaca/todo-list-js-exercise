// Create a new task
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,
    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted: function() {
      this.complete = true;
    },
  };
  return task;
};

// DRIVER CODE BELOW
const task0 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box'); // task 0
const task1 = newTask('Do Laundry', '😨'); // task 1
const tasks = [task0, task1];

task0.logState();
task0.markCompleted();
task0.logState();
