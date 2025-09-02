import { useState, useEffect } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskCard from './components/TaskCard'
import { auth } from './firebase'
import { addTask, deleteTask, updateTask, watchTasks } from './services/taskService'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [tasks, setTasks] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [editTask, setEditTask] = useState(null)

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleSaveTask = (taskData) => {
    if (editTask) {
      // Update existing task
      setTasks(tasks.map(task => 
        task.id === editTask.id ? { ...task, ...taskData } : task
      ))
      setEditTask(null)
    } else {
      // Add new task
      const newTask = {
        id: Date.now().toString(),
        ...taskData,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
      setTasks([...tasks, newTask])
    }
    setFormOpen(false)
  }

  const handleToggleStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } 
        : task
    ))
  }

  const handleEditTask = (task) => {
    setEditTask(task)
    setFormOpen(true)
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-2">Task Management App</h1>
        <p className="text-center text-gray-600">Organize your tasks efficiently</p>
      </header>

      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <button 
          onClick={() => {
            setEditTask(null)
            setFormOpen(true)
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add New Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No tasks yet. Add your first task!</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onToggle={() => handleToggleStatus(task.id)}
              onEdit={() => handleEditTask(task)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      )}

      <TaskForm 
        open={formOpen} 
        onClose={() => setFormOpen(false)} 
        onSave={handleSaveTask}
        initial={editTask}
      />
    </div>
  )
}

export default App
