import { useEffect, useState } from 'react'
import './App.css'
import {Landing} from './components/landing.jsx'
import AppBar from './components/appbar.jsx'
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NepaliBooks from './components/Nepalibooks.jsx';
import AdminLayout from './components/admin/layout.jsx';
import axios from 'axios';

function App() {
const [user,setUser] = useState([])
  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get('http://localhost:3000/users/me',
     {   headers:{
          'Authorization':'Bearer ' +localStorage.getItem('token')
        }}
      );
      if(response){
        let data = response.data;
        console.log(data)
        setUser(data.user);
      }
    }
  fetchData();
  },[])

  return (
    <>
    <div>
     { console.log('user',user)}
    {console.log('role',user.role)}
      <Router>
        <AppBar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='Login' element={<Login />} />
          <Route path='/nepalibooks' element={<NepaliBooks />} />
         {user.role == 'Admin' && <Route path='/admin/dashbord' element={<AdminLayout />} /> }
        </Routes>
      </Router>
    </div>

    </>
  )
}

export default App
