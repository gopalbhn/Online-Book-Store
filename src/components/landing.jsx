import { Button, Grid, Typography } from "@mui/material";
import Product from "./productCard";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import ImageSlider from "./imageSlider";
import { useState,useEffect } from "react";
import Modal from './modal'
function Landing() {
    const [show,setShow] = useState(false);
    const [product,setProduct] = useState(null)
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
            <TopBar />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} lg={3}>
                    <Product onClick={handleClick}/>
                </Grid >
                <Grid item xs={12} sm={4} lg={3}>
                    <Product />
                </Grid >
                <Grid item xs={12} sm={4} lg={3}>
                    <Product />
                </Grid >
                <Grid item xs={12} sm={4} lg={3}>
                    <Product />
                </Grid >
                <Grid item xs={12} sm={4} lg={3}>
                    <Product />
                </Grid >
                <Grid item xs={12} sm={4} lg={3}>
                    <Product />
                </Grid >
                <Grid item xs={12} sm={4} lg={3}>
                    <Product />
                </Grid >
                <Grid item xs={12} sm={4} lg={3}>
                    <Product />
                </Grid >
            </Grid>
            {show ? (<Modal title={product.title} image={product.image} price={product.price} description={product.description} onClick={handleToogle} />) :null}
        </div>
    )
}

function TopBar() {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: 20,
            width: '70%',
            marginTop: '10px',
            marginInline:'auto'
        }}>
            <ImageSlider />
            <div style={{  display:'flex',
            justifyContent:'space-around'}}>
                <Button variant="text"
                    startIcon={<HomeIcon />}
                    style={{ color: ' #7e75fa' }}
                    onClick={() => navigate('/')}
                >
                    Home
                </Button>

                <Button variant="text" sx={{
                    color: ' #7e75fa'
                }} onClick={() => navigate('/nepalibooks')}>Nepali Books</Button>

                <Button variant="text" sx={{
                    color: ' #7e75fa'
                }} onClick={() => navigate('/signup')}>Best Seller</Button>

                <Button variant="text" sx={{
                    color: ' #7e75fa'
                }} onClick={() => navigate('/signup')}>Self Help</Button>

                <Button variant="text" sx={{
                    color: ' #7e75fa'
                }} onClick={() => navigate('/signup')}>Investment</Button>
            </div>

        </div>
    )
}

export  {Landing,TopBar}