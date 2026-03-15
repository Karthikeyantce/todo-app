import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  const addTask = () => {
    if (input.trim() === "") return
    setTasks([...tasks, { id: Date.now(), text: input, done: false }])
    setInput("")
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1>Karthik's To-Do List</h1>
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTask()}
          placeholder="Add a task..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={addTask} style={{ padding: "8px 16px" }}>Add</button>
      </div>
      {tasks.length === 0 && <p style={{ color: "gray" }}>No tasks yet. Add one above!</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", marginBottom: "8px", background: "#f5f5f5", borderRadius: "6px" }}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{ cursor: "pointer", textDecoration: task.done ? "line-through" : "none", color: task.done ? "gray" : "black" }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} style={{ background: "red", color: "white", border: "none", borderRadius: "4px", padding: "4px 8px", cursor: "pointer" }}>✕</button>
          </li>
        ))}
      </ul>
      <p style={{ color: "gray", fontSize: "12px" }}>{tasks.filter(t => !t.done).length} tasks remaining</p>
    </div>
  )
}

export default App