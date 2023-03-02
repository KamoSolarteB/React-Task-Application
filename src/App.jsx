import React from "react";
import { TaskList, TaskForm } from "./components";

function App() {
  return (
    <main className="bg-zinc-900 h-screen w-full">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
