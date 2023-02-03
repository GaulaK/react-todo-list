import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
 * Component : Tasks.js
 *
 * Return : List of Tasks sent by the User
 *
 * Contains an ordered list.
 * Each element of the list are stocked in the 'tasks' variable
 *
 */
const Tasks = ({ tasks, setTasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => {
        // Run all tasks Array, generate a li tag for each element
        return (
          <li key={index} className="task">
            <input
              type="checkbox"
              onChange={() => {
                const newTasks = [...tasks];
                if (newTasks[index].done) {
                  newTasks[index].done = false;
                } else {
                  newTasks[index].done = true;
                }
                setTasks(newTasks);
                console.log(newTasks);
              }}
            ></input>
            <label
              className={
                // Check if task is done -> strike the text
                task.done ? "task-done" : null
              }
              htmlFor={index}
            >
              {task.name}
            </label>
            <FontAwesomeIcon
              onClick={() => {
                // If the icon is pressed, delete the element in 'tasks' (Tasks Array)
                const newTasks = [...tasks];
                newTasks.splice(index, 1);
                setTasks(newTasks);
              }}
              className="icon-trash"
              icon="fa-trash"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
