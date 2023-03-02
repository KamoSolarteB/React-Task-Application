import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { Context } from "../Context/Context";

function TaskList() {
  const { tasks } = useContext(Context);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No tasks yet</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
