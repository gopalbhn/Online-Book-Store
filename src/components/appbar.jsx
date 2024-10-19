import { Button, Typography,Select,MenuItem } from "@mui/material";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
export default function AppBar() {
   
    const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '5px',
            marginInline:'10px'
        }}>
            <a href="/" style={{
                textDecoration:'none'
            }}>
            <div style={{ backgroundColor: '#7e75fa', color: 'white' }}>
                <Typography align="center">Online <br /> Book Store</Typography>
            </div>
            </a>
            <Menu />
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '10px' }}>
                    <Button variant='contained' size="small" sx={{
                        bgcolor: '#7e75fa',
                        color: 'white',
                        borderRadius: '10px'
                    }}
                    onClick={()=>
                        navigate('/signup')
                    }>Signup</Button>
                </div>
                <div style={{ marginRight: '10px' }}>
                    <Button variant="contained" size={'small'} sx={{
                        bgcolor: 'white',
                        color: '#7e75fa',
                        borderRadius: '10px'
                    }}
                    onClick={()=>
                        navigate('/Login')
                    }>Login</Button>
                </div>

            </div>
        </div>
    )
}

function Menu(){
    const [age,setAge] = useState('Product');
    return(
        <div>
        <Select
          sx={{height:30}}
            value={age}
            label="Age"
            onChange={(e)=>{
                setAge(e.target.value)
            }}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>
    )
}