import React, { useState } from 'react'

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(title)
  }

  return (
      <form onSubmit={handleSubmit}>
        <input placeholder='Write your task'
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button>Save</button>
      </form>
  )
}

export default TaskForm