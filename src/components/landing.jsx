import { Button, Grid, Grid2, Typography } from "@mui/material";
import Product from "./productCard";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import ImageSlider from "./imageSlider";
import { useState,useEffect } from "react";
import Modal from './modal'
import axios from 'axios'
import { useRecoilState } from "recoil";
import { bookState } from "../store/atom/bookatom";
function Landing() {
    const [show,setShow] = useState(false);
    const [product,setProduct] = useState(null)
    const books  = useRecoilState(bookState)
    const book = books[0]
    function handleClick(pro){
        setProduct(pro)
     
     setShow(!show)
    }
    function handleToogle(){
        setShow(!show)
    }
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'; 
         
        } else {
            document.body.style.overflow = 'auto'; 
          
        }
    }, [show]);
    return (
        <div style={{
            minHeight: '100vh',
            width: '90%',
            marginInline: 'auto',
        }}>
        {console.log('from books',book[0])}
            <TopBar />
            <Grid container spacing={3}>
                
                   
                    {book.map(books=>{ return (
                        <Grid item xs={12} sm={4} lg={3} key={book.id}>
                        <Product onClick={()=>handleClick(books)} booksDetail={books}/>
                        </Grid >
                    )})}

                
            </Grid>
            {show ? (<Modal title={product.name} image={product.thumbnail} price={product.price} description={product.description} onClick={handleToogle} />) :null}
        </div>
    )
}

function TopBar() {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: 20,
            maxWidth: '70%',
            marginTop: '10px',
            marginInline:'auto'
        }} >
            <ImageSlider />
           <Grid container spacing={3} sx={{justifyContent:{xs:'center',sm:'space-around'}}} >
            <Grid item  xs={12} sm={'auto'} >
                <Button variant="text"
                    startIcon={<HomeIcon />}
                    style={{ color: ' #7e75fa' }}
                    onClick={() => navigate('/')}
                >
                    Home
                </Button>
                    </Grid>
                    <Grid item sm={'auto'} xs={12} >
                <Button variant="text" sx={{
                    color: ' #7e75fa'
                }} onClick={() => navigate('/nepalibooks')}>Nepali Books</Button>
                    </Grid>
                    <Grid item xs={12} sm={'auto'} >
                <Button variant="text" sx={{
                    color: ' #7e75fa'
                }} onClick={() => navigate('/signup')}>Best Seller</Button>
                </Grid>
                <Grid item xs={12} sm={'auto'} >
                <Button variant="text" sx={{
                    color: ' #7e75fa'
                }} onClick={() => navigate('/signup')}>Self Help</Button>
                    </Grid>
                    <Grid item xs={12} sm={'auto'} >
                <Button variant="text" sx={{
                    color: ' #7e75fa'
                }} onClick={() => navigate('/investment')}>Investment</Button>
                </Grid>

        </Grid>
        </div>
    )
}

export  {Landing,TopBar}