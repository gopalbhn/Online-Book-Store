import { Box, Button, Typography } from "@mui/material";

export default function Product({onClick}){
    return(
        <div style={{
            height:"230px",
            width:"250px",
            padding:2,
            margin:10,
            backgroundColor:'#ebe6e6'
        }}>
            <div style={{display:'flex',alignItems:'center', justifyContent:'center', paddingTop:2}}>
                <img src="04.jpg" height={150} width={240}/>
            </div>
            <Typography align="right" marginRight={5}>Price Rs.50</Typography>
            <Button variant="contained" fullWidth={true} sx={{
                bgcolor:'#7e75fa',
                color:'white',
                borderRadius:'20px',
                '&:hover':{
                    bgcolor:'white',
                    color:'#7e75fa',
                }
            }} onClick={onClick}>Purchase</Button>
        </div>
    )
}

