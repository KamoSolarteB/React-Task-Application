import React, { useState, useEffect} from "react";
import { tasks as data } from "./data/tasks";
import { TaskList, TaskForm } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(taskTitle) {
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "something new"
    }])
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
