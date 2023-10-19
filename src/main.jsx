import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './components/auth/signin.jsx'
import SignUp from './components/auth/signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SignIn />
    <SignUp />
  </React.StrictMode>,
)
