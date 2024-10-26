import { Box, Typography } from "@mui/material";

const images =[
    'https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729382400&semt=ais_hybrid',
    'https://shopratnaonline.com/wp-content/uploads/2023/03/Aithan-300x400.webp',
    'https://grey.com.np/cdn/shop/products/dfedc1baab2590eb12946f243cd20092_1.jpg?v=1671002547',
    'https://shopratnaonline.com/wp-content/uploads/2023/10/Usle-Diyeko-Umer-300x400.webp',
    'https://media.thuprai.com/front_covers/Sangat-front.jpg'
    
]
 let n = Math.floor(Math.random()*5);


const ImageSlider  = () => {
    return(
        <Box sx={{
            height:"250px",
            width:'90%',
            marginInline:'auto',
            marginBottom:'50px',
            background:`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${images[n]})`,
            padding:5,
            color:'white'
        }}>
            <Typography variant="h4">
                Find the best book here<br />
                On Affordable Price
            </Typography>
        </Box>
    )
}
export default ImageSlider;