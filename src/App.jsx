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
      <h2>Signin</h2>
        <form action="/signin">
          <input type="submit" value="Go"/>
        </form>
      </div>
      <div>
        <h2>Signup</h2>
        <form action="/signup">
          <input type="submit" value="Go"/>
        </form>
      </div>
        
      
      
    </>
  )
}

export default App
