import { Button, Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import { useRecoilState, useRecoilValue } from "recoil";
import { userEmail } from "../store/selectors/userSelector";
export default function AppBar() {
  let username = useRecoilValue(userEmail)
  const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '5px',
            marginInline:'10px'
        }}>
            {console.log('username',username)}
            <a href="/" style={{
                textDecoration:'none'
            }}>
            <div style={{ backgroundColor: '#7e75fa', color: 'white' }}>
                <Typography align="center">Online <br /> Book Store</Typography>
            </div>
            </a>
          {!username ? (
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
            </div> ) :
            <div>
                <Button variant="outlined" sx={{
                    color:'##7e75fa'
                }}
                onClick={()=>{
                    localStorage.setItem('token',null)
                    window.location.href = '/'
                }}
                >
                    Logout
                </Button>
            </div>

}
        </div>
    )
}
