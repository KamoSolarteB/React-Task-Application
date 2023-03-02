import React, { useContext } from "react";
import { Context } from "../Context/Context";

function TaskCard({ task }) {
  const { deleteTask } = useContext(Context)

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>
        Delete Task
      </button>
    </div>
  );
}

export default TaskCard;
