import React, { useState, useEffect} from "react";
import { tasks as data } from "./data/tasks";
import { TaskList, TaskForm } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description,
    }])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
