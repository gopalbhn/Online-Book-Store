import { Typography, Box,Container } from "@mui/material";
import { Check } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const SucessModal = ({text,onClick}) =>{
    return <div style={{
        height:'100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'fixed',
        background:'rgba(0,0,0,0.5)',
        top:0,
        left:0,
        zIndex:100
    }} onClick={onClick}>
        <Container maxWidth={'sm'} sx={{
            bgcolor:'white',
          
        }}>
            <Box sx={{
                height:50,
                width:100,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                border:'1px solid',
                marginInline:'auto'
            }}>
                <CheckCircleIcon />
            </Box>
            <Box sx={{
               
            }}>
                <Typography textAlign={'center'}>Sucessfully {text}</Typography>
            </Box>
        </Container>

    </div>
}

export default SucessModal