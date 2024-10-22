import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import LoginIcon from '@mui/icons-material/Login';
const AdminBar =() =>{
const navigate = useNavigate();
    return(
        <div style={{
            height:30,
            width:'90%',
            display:'flex',
            marginInline:'auto',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
            <div>
                <Typography variant="body1">Admin Pannel</Typography>
            </div>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}>

            <div>
                <Button variant="text" size = 'small' 
                onClick = {()=>navigate('/admin/signup')}
                >New Admin</Button>
            </div>
            <div>
                <Button variant="text" size ='small' 
                onClick = {()=>navigate('/product')}
                >Manage Product</Button>
            </div>
            <div>
                <Button variant="text" size='small' endIcon ={< LoginIcon style={{marginLeft:'-8px'}}/>}
                onClick = {()=>navigate('/logout')}
                >LogOut</Button>
            </div>
            </div>
        </div>
    )
}
export default AdminBar;