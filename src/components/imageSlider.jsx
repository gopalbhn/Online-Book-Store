import { Box } from "@mui/material";

const images =[
    'https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729382400&semt=ais_hybrid',
    'https://shopratnaonline.com/wp-content/uploads/2023/03/Aithan-300x400.webp',
    'https://grey.com.np/cdn/shop/products/dfedc1baab2590eb12946f243cd20092_1.jpg?v=1671002547',
    'https://shopratnaonline.com/wp-content/uploads/2023/10/Usle-Diyeko-Umer-300x400.webp',
    'https://media.thuprai.com/front_covers/Sangat-front.jpg'
    
]
const ImageSlider = ({image})=>{
  
    return(

       <Box sx={{
        height:200,
        minWidth:'90%',
        overflow:'hidden'
       }}>
         <ImageCard />
       </Box>
    )
}
const ImageCard = () =>{
    return(
        <>
        {images.map(img=>(
            <div key ={img} style={{
                height:'200px',
                width:'300px',
                padding:5,
                marginInline:5,
                display:'inline-block',
                border:'1px solid'
            }}>
            <img style={{
                height:'100%',
                width:'100%'
            }}src={img} />
            </div>
        ))
            
        }
        </>   
    );
    
}
export default ImageSlider;