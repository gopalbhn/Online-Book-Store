import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const book = {
  title: "Palpasa Café",
  author: "Narayan Wagle",
  year: 2005,
  image:
    "https://upload.wikimedia.org/wikipedia/en/8/86/Karnali_Blues_by_Buddhisagar.jpg",
  price: 50,
  description:
    "Palpasa Café is a poignant tale that intricately weaves themes of love, loss, and resilience against the backdrop of the Maoist conflict in Nepal. Through the eyes of the protagonist, the story unfolds in a richly detailed setting, capturing the struggles and aspirations of a generation caught in turmoil. As the characters navigate their relationships and the harsh realities of war, the narrative explores the enduring human spirit and the search for identity amid chaos. Wagle's lyrical prose invites readers to reflect on the impact of conflict on personal lives and the profound connections that sustain us.",
};

const Modal = ({onClick,title,description,image}) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        minHeight: "80vh",
        width: "70%",
        marginInline: "auto",
        zIndex:10,
        position: "relative",
        boxShadow: "0 0px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div
        style={{
          alignContent: "right",
          position: "absolute",
          right: "10px",
          top: "10px",
        }}
      >
        <Button
        onClick={onClick}
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            minWidth: "30px",
          }}
        >
          <CloseIcon />
        </Button>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: "90%",
            minWidth: "40%",
            marginTop:'50px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <img
            src={image}
            height={"50%"}
            width={'50%'}
            alt={book.title}
            style={{
                 border: "1px solid",
                 marginInline: "auto",
                
            }}
          />
        </Box>
        <Box
          sx={{
            padding: 2,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6">{title}</Typography>{" "}
          </div>
          <div>
            <Typography variant="body1">{description}</Typography>
          </div>
          <div style={{
           marginInline:'50px',
          }}>
            <Typography variant="body1"> Select Quantity</Typography>
            <Button variant="outlined" onClick={()=>setCount(count-1)}>-</Button>
            <Typography variant="body1"marginInline={4} style={{display:'inline'}}>{count}</Typography>
            <Button variant="outlined" onClick={()=>setCount(count+1)}>+</Button>
          </div>
          <div style={{
            display:'flex',
            flex:1,
            marginTop:'30px'
          }}>
                <Button variant="contained" style={{
                    backgroundColor:'#7e75fa',
                    marginInline:'15px'
                }}>Buy Now</Button>
                <Button variant='contained' startIcon={<ShoppingCartIcon />} 
                sx={{
                    bgcolor:'white',
                    color:'#7e75fa'
                }}
                >Add to Cart </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default Modal;
