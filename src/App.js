import "./App.css";

import Header from "./components/Header";
import Add from "./components/Add";
import Tasks from "./components/Tasks";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faRectangleList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(faRectangleList, faTrash);

function App() {
  // State: Track input in the form
  const [newTask, setNewTask] = useState("");

  // State: Array, All Tasks send in the form
  const [tasks, setTasks] = useState([]);

  // State: Update input in the form
  const handleNewTask = (event) => {
    const value = event.target.value;
    setNewTask(value);
  };

  // Submit Form : When Send Button is press, Update the list of Tasks and reset new task field
  const handleSubmit = (event) => {
    const newTasks = [...tasks];
    newTasks.push({ name: newTask, done: false, time: Date.now() });
    setTasks(newTasks);
    setNewTask("");
    event.preventDefault();
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Tasks tasks={tasks} setTasks={setTasks} />
        <Add
          handleSubmit={handleSubmit}
          newTask={newTask}
          handleNewTask={handleNewTask}
        />
      </div>
    </div>
  );
}

export default App;
