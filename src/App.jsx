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
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "./store/atom/useratom.js";
import { userRole } from "./store/selectors/userSelector.js";
import InvestmentBooks from "./components/investmentBooks.jsx";
import { bookState } from "./store/atom/bookatom.js";
import ShopingCart from "./components/shopingcart.jsx";
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
  const setUser = useSetRecoilState(userState)
  const role = useRecoilValue(userRole);
   const setBook = useSetRecoilState(bookState)
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

  useEffect(()=>{
    async function fetchBookData(){
        const response = await axios.get('http://localhost:3000/users/getbooks');
        let data = response.data;
        console.log('getbooks',data.books)
        if(data){
            setBook(data.books)
        }else{
            setBook([])
        }
    }
    fetchBookData();
},[])
  return <div>
{console.log('userrole',role)}
    <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="Login" element={<Login />} />
            <Route path="/nepalibooks" element={<NepaliBooks />} />
            <Route path="/investment" element ={<InvestmentBooks />} />
            <Route path="/shopingCart" element={<ShopingCart />} />
            {role == "Admin" && (
              <Route path="/admin/dashbord" element={<AdminLayout />} />
            )}
            {role == "Admin" && (
              <Route path="/admin/signup" element={<AdminSignup />} />
            )}
          </Routes>
  </div>
}
export default App;
