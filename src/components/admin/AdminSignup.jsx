import { Card, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
export default function AdminSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleClick() {
    const response = await axios.post(
      "http://localhost:3000/users/admin/signup",
      {
        username,
        password,
        role: "Admin",
      },{
        headers:{
            'Authorization':'Bearer ' +localStorage.getItem('token')
        }
      }
    );
    if (response) {
      console.log(response);
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
            Sign Up
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
            onChange={(e) => setUsername(e.target.value)}
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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <Button
            variant="contaied"
            size="large"
            onClick={handleClick}
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
          >
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
}
