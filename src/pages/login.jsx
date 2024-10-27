import { Password } from "@mui/icons-material";
import { Card, Input, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  async function handleClick() {
    const response = await axios.post('http://localhost:3000/users/login',null,{
        headers:{
            username,
            password
        }
    })
    if(response){
        let data = response.data;
        localStorage.setItem('token',data.token)
        console.log('role',data)
        window.location.href='/';
    }
  }
  return (
    <div
      style={{
        maxHeight: "100vh",
        maxWidth: "100%",
        display: "flex",
        overflow: "none",
        backgroundColor: "#ebe6e6",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
      }}
    >
      <div>
        <div
          style={{
            margin: "0px 0 20px 0",
          }}
        >
          <Typography variant="h6" align="center">
            LOGIN Here
          </Typography>
        </div>
        <Card
          variant="outlined"
          sx={{
            width: "400px",
            padding: 10,
          }}
        >
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            onChange={(e)=>setUsername(e.target.value)}
            sx={{
              color: "#7e75fa",
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="password"
            variant="outlined"
            onChange={(e)=>setPassword(e.target.value)}
            type="password"
          />
          <br /> <br />
          <Button
            variant="contaied"
            size="large"
            sx={{
              bgcolor: "#7e75fa",
              color: "white",

              borderRadius: "10px",
              "&:hover": {
                bgcolor: "white",
                color: "#7e75fa",
                border: "1px solid #7e75fa",
              },
            }}
            onClick={handleClick}
          >
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
}
