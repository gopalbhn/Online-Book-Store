import { useEffect, useState } from "react";
import "./App.css";
import { Landing } from "./components/landing.jsx";
import AppBar from "./components/appbar.jsx";
import Signup from "./components/signup.jsx";
import Login from "./components/login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NepaliBooks from "./components/Nepalibooks.jsx";
import AdminLayout from "./components/admin/layout.jsx";
import axios from "axios";
import AdminSignup from "./components/admin/AdminSignup.jsx";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "./store/atom/useratom.js";

function App() {

  return (
    <RecoilRoot>
        <Router>
          <AppBar />
          <InitUser/>
        </Router>
    </RecoilRoot>
  );
}
function InitUser() {
  const [user,setUser] = useRecoilState(userState);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/users/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        let data = response.data;
        if (data) {
          setUser({
            user: data.user,
          })
        }else{
          setUser({
            user:null
          })
        }
      } catch (e) {
        setUser({
          user: null,
        });
      }
    }
    fetchData();
  }, []);
  return <div>
{console.log('user',user)}
    <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="Login" element={<Login />} />
            <Route path="/nepalibooks" element={<NepaliBooks />} />
            {user.role == "Admin" && (
              <Route path="/admin/dashbord" element={<AdminLayout />} />
            )}
            {user.role == "Admin" && (
              <Route path="/admin/signup" element={<AdminSignup />} />
            )}
          </Routes>
  </div>
}
export default App;
