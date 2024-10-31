import { Typography, Box,Container } from "@mui/material";
import { Check } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const SucessModal = () =>{
    return <div style={{
        height:'100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        position:'fixed',
        top:0,
        left:0
    }}>
        <Container maxWidth={'md'} >
            <Box>
                <CheckCircleIcon />
            </Box>
            <Box>
                <Typography>Sucessfully Purchaseed</Typography>
            </Box>
        </Container>

    </div>
}

export default SucessModal