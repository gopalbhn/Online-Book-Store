import { Card, Input, Typography,TextField, Button } from "@mui/material";

export default function Signup(){
    return(
        <div style={{
            maxHeight:'100vh',
            maxWidth:'100%',
            display:'flex',
            overflow:'none',
            backgroundColor:'#ebe6e6',
            justifyContent:"center",
            alignItems:"center",
            padding:'5%'
        }}>
            <div>
                <div style={{
                    margin:'0px 0 20px 0'
                }}>
                <Typography variant='h6'align="center">Sign Up</Typography>
                </div>
                <Card variant='outlined' sx={{
                    width:'400px',
                    padding:10,
                }}>
                <TextField  fullWidth={true} id="outlined-basic" label="Username" variant="outlined" sx={{
                    color:'#7e75fa',
                }} />
                <br /><br />
                <TextField fullWidth={true} id="outlined-basic" label="password" variant="outlined" type="password" />
                <br /> <br />
                <Button variant="contaied" size='large' sx={{
                     bgcolor: '#7e75fa',
                     color: 'white',
                     borderRadius: '10px',
                     '&:hover':{
                        bgcolor:'white',
                        color:'#7e75fa',
                        border:'1px solid #7e75fa'
                     }
                }}>Signup</Button>
                
                </Card>
                
            </div>
        </div>
    )
}