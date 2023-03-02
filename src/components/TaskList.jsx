import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { Context } from "../Context/Context";

function TaskList() {
  const { tasks } = useContext(Context);

  if (tasks.length === 0) {
    return <h1>No tasks yet</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
