import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let response = fetch('http://localhost:8000/api/fr')
  .then((res) => res.text());
  console.log(response);
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
      </div>
      
    </>
  )
}

export default App
