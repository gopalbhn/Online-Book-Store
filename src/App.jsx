import { useEffect } from "react";
import AppBar from "./pages/appbar.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import NepaliBooks from "./pages/Nepalibooks.jsx";
import AdminLayout from "./components/admin/layout.jsx";
import axios from "axios";
import AdminSignup from "./components/admin/AdminSignup.jsx";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "./store/atom/useratom.js";
import { userRole } from "./store/selectors/userSelector.js";
import InvestmentBooks from "./pages/investmentBooks.jsx";
import { bookState } from "./store/atom/bookatom.js";
import {ShopingCart} from "./pages/shopingcart.jsx";
import CheckOut from "./pages/checkout.jsx";
import { Landing } from "./pages/landing.jsx";
import SelfHelp from "./pages/selfhelp.jsx";
import PurchaseHistory from "./pages/history.jsx";
import ManageProduct from "./components/admin/manageProduct.jsx";
import AddBooks from "./components/admin/addbook.jsx";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <AppBar />
        <InitUser />
      </Router>
    </RecoilRoot>
  );
}
function InitUser() {
  const setUser = useSetRecoilState(userState);
  const role = useRecoilValue(userRole);
  const setBook = useSetRecoilState(bookState);
  const navigate = useNavigate();
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
          });
        } else {
          setUser({
            user: null,
          });
        }
      } catch (e) {
        setUser({
          user: null,
        });
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchBookData() {
      const response = await axios.get("http://localhost:3000/users/getbooks");
      let data = response.data;
      console.log("getbooks", data.books);
      if (data) {
        setBook(data.books);
      } else {
        setBook([]);
      }
    }
    fetchBookData();
  }, []);

  useEffect(() => {
    if (role) {
      if (role == "Admin") {
        navigate("/admin/dashbord");
      } 
    }
  }, [role]);
  return (
    <div>
      {console.log("userrole", role)}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="/nepalibooks" element={<NepaliBooks />} />
        <Route path="/investment" element={<InvestmentBooks />} />
        <Route path="/shopingCart" element={<ShopingCart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/history" element={<PurchaseHistory />} />
        <Route path="selfhelp" element={<SelfHelp />} />
        {role == "Admin" && (
          <Route path="/admin/dashbord" element={<AdminLayout />} />
        )}
        {role == "Admin" && (
          <Route path="/admin/signup" element={<AdminSignup />} />
        )}
        {role == 'Admin' && (
          <Route path="/product" element={<ManageProduct />} />
        )}
        {role == 'Admin' && (
          <Route path="/addbook" element={<AddBooks />} />
        )}
      </Routes>
    </div>
  );
}
export default App;
