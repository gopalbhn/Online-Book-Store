import { useState } from 'react'
import './App.css'
import {Landing} from './components/landing.jsx'
import AppBar from './components/appbar.jsx'
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import AdminSignup from './components/AdminSignup.jsx';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NepaliBooks from './components/Nepalibooks.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Router>
        <AppBar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='Login' element={<Login />} />
          <Route path='/nepalibooks' element={<NepaliBooks />} />
          <Route path='/admin/signup' element={<AdminSignup />} /> 
        </Routes>
      </Router>
    </div>

    </>
  )
}

export default App
