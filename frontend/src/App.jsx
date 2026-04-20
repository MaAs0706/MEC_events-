import { useState } from 'react'


import './App.css'
import AdminDashboard from './pages/AdminDashboard'


const handleNavigate = useNavigate();

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Welcome to NEXUS  </h1>



    <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You clicked {count} times</p>
    </div>
  )
  }

export default App
