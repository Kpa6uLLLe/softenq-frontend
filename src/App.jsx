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
        <h3>signup</h3>
        
        <form class = "signup" action="auth/signup.html" method="POST">
          <input type="submit" value = "Go"/>
        </form>
        <h3>signin</h3>
        <form class = "signin" action="auth/signin.html">
          <input type="submit" value = "Go"/>
        </form>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
