import {
  Box,
  Button,
  Card,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AdminBar from "./AdminBar.jsx";
import Cart from "./manageProduct.jsx";
import ManageProduct from "./manageProduct.jsx";
import { useEffect, useState } from "react";

const AdminLayout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "99%",
        padding: 5,
      }}
    >
      <AdminBar />
      <ViewProduct />
    </div>
  );
};
const ViewProduct = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        width: "90%",
        marginTop: "10px",
        marginInline: "auto",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div
        style={{
          height: "30px",
          width: "100%",
          border: "1px solid black",

          display: "flex",
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
      <OrderItem  />
    </div>
  );
};
const OrderItem = ({onClick}) => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  useEffect(()=>{
    if(show){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
},[show])
  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    

        flexWrap: "wrap",
      }}
    >
      <div>
        <Typography>{"671b7af2d746ffeb64f6466a"}</Typography>
      </div>
      <div>
        <Typography>Qty:5</Typography>
      </div>
      <div>
        <Select size="small">
          <MenuItem>Pending</MenuItem>
          <MenuItem>Completed</MenuItem>
        </Select>
      </div>
      <div>
        <Button
          variant="contained"
          size={"small"}
          sx={{
            bgcolor: "#7e75fa",
            color: "white",
          }}
          onClick={handleClick}
        >
          View Details
        </Button>
      </div>
      {show ? <ViewDetails onClick={handleClick} /> : null}
    </div>
  );
};
const ViewDetails = ({ onClick }) => {
  
  return (
    <div style={{
        position:'fixed',
        top:0,
        left:0,
        height:'100vh',
        width:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      
        zIndex:10
    }}>

    
    <Container
      maxWidth={"lg"}
      sx={{
        display: "flex",
        border: "1px solid",
        bgcolor: "#f5f5f0",
      
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "-10px",
          top: "-10px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            bgcolor: "#7e75fa",
          }}
          onClick={onClick}
        >
          X
        </Button>
      </div>
      <Box
        sx={{
          height: "100%",
          width: "50%",
        }}
      >
        <img
          style={{
            heigth: "100%",
            width: "100%",
            margin:0
          }}
          alt="image not found"
          src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
        />
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          paddingTop: "10px",
          paddingInline: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Typography variant="h5">Details of Books</Typography>
        </div>
        <div>
          <Typography>Name: </Typography>
        </div>
        <div>
          <Typography>Description</Typography>
        </div>
        <div>
          <Typography>Status: Pending</Typography>
        </div>
      </Box>
    </Container>
    </div>
  );
};
export default AdminLayout;
