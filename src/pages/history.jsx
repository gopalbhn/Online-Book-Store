import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { purchase } from "../store/selectors/userSelector";
import axios from 'axios'
import { useEffect, useState } from "react";
const PurchaseHistory = () => {
  const[book,setBook] = useState([]);

  useEffect(()=>{
    async function fetchdata(){
      const response  = await axios.get('http://localhost:3000/users/purchasedBooks',{
        headers:{
          'Authorization' : 'Bearer ' + localStorage.getItem('token')
        }
      });
      if(response){
        console.log('response',response)
        const data = response.data;
        
        setBook(data.purchasedCourses);
      }
    }
    fetchdata();

  },[])
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f0f4f8",
        paddingTop:30
      }}
    >
      {console.log("purchase", book)}
      <div>
        <Typography variant="h5" textAlign={"center"}>
          Your purchase History
        </Typography>
      </div>
      <div
        style={{
          height: "90vh",
          width: "90%",
          marginInline: "auto",
          backgroundColor:'#fff',
         boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div
          style={{
            height: "30px",
            width: "100%",
            border: "1px solid black",
            display: "flex",
            marginTop:10,
            justifyContent: "space-around",
          }}
        >
          <div>
            <Typography>Id</Typography>
          </div>
          <div>
            <Typography>Quantity</Typography>
          </div>
          <div>
            <Typography>Status</Typography>
          </div>
          <div>Details</div>
        </div>
        {book.map(book =>{
            return(
                <div
                key={book._id}
          style={{
            height: "30px",
            width: "100%",
            border: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div >
            <Typography>{book.name}</Typography>
          </div>
          <div>
            <Typography>{book.quantity}</Typography>
          </div>
          <div>
            <Typography>{book.status}</Typography>
          </div>
          <div>Details</div>
        </div>
            )
        })}
      </div>
    </div>
  );
};
export default PurchaseHistory;
