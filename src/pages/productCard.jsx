import {Button, Typography } from "@mui/material";
import { bookState } from "../store/atom/bookatom";

export default function Product({onClick,booksDetail}){
   let  book = booksDetail;
    return(
        <div style={{
            maxHeight:"230px",
            maxWidth:"250px",
            padding:2,
            marginInline:10,
            backgroundColor:'#ebe6e6'
        }}>
            {console.log('product',book)}
            <div style={{display:'flex',alignItems:'center', justifyContent:'center', paddingTop:2}}>
                <img src={book.thumbnail} height={'150px'} width={'240px'}/>
            </div>
            <Typography align="center">{book.name}</Typography>
            <Typography align="right" marginRight={5}>{book.price}</Typography>
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

