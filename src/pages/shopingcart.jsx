import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRecoilValue } from "recoil";
import { CartState } from "../store/atom/cartatom";
import { useNavigate } from "react-router-dom";

const ShopingCart = () => {
  const book = useRecoilValue(CartState);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        paddingInline:20,
      }}
    >
      <div>
          <Typography variant="h5" textAlign={"center"}>
            Shoping Cart
          </Typography>
        </div>
       <div style={{
        width:'90%',
        display:"flex",
        justifyContent:'space-between',
        flexWrap:'wrap'
       }}>

       
        <div style={{
          minHeight:'80vh',
          width:'50%',
          marginTop:20,
          marginLeft:30,
          border:'1px solid'
        }}>
        {book.map((books) => {
          return <AddedItem book={books} />;
        })}
      </div>
      
      <OrderSummery book={book}/>
      </div>
    </div>
  );
};

const AddedItem = ({ book }) => {
  
  return (
    <Box
      sx={{
        width: "90%",
        height: "150px",
        margin: 2,
        border: "1px solid",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "150px",
          width: "150px",
          marginRight: "10px",
        }}
      >
        <img
          src={book.thumbnail}
          alt={"Image not displayed"}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div
        style={{
          height: "200px",
          width: "400px",
        }}
      >
        <div>
          <div>
            {" "}
            <Typography variant="h7">
              {book.name} by {book.author}
            </Typography>
          </div>
          <div style={{marginTop:'10px'}}>
            <Typography variant="h6"> Price: {book.price}</Typography>
          </div>
        </div>
        <div>
          <Button variant="text" startIcon={<DeleteIcon />} sx={{
            color:'#7e75fa',
            "&:hover":{
              bgcolor:'#7e75fa',
              color:'white',
            }
          }}>
            Remove
          </Button>
        </div>
      </div>
    </Box>
  );
};

const OrderSummery = ({book}) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: 300,
        width: 300,
        marginTop:20,
        paddingInline:'10px',
        border: "1px solid green",
      }}
    >
      <div>
        <Typography variant="h6" textAlign={'center'}>Order Summary</Typography>
      </div>
        <Box sx={{ display:'flex',justifyContent:'space-between', marginTop:2, marginInline:'10px'}}>
        <Typography variant="h6">Product</Typography>
        <Typography variant="body1">Rs{book.price}</Typography>
      </Box>
      <Box sx={{ display:'flex',justifyContent:'space-between', marginTop:2, marginInline:'10px'}}>
        <Typography variant="h6">Shiping</Typography>
        <Typography variant="body1">Rs{book.price}</Typography>
      </Box>
      <Box sx={{ display:'flex',justifyContent:'space-between', marginTop:2, marginInline:'10px', fontWeight:'bold'}}>
        <Typography variant="h6"  sx={{fontWeight:'bold'}}>Total</Typography>
        <Typography variant="body1" sx={{fontWeight:'bold'}}>Rs{book.price}</Typography>
      </Box>
      <div style={{
       marginInline:10
      }}>
        <Button sx={{
            width:'100%',
             bgcolor:'#7e75fa',
             color:'white',
             borderRadius:'10px',
             '&:hover':{
                 bgcolor:'white',
                 color:'#7e75fa',
                 border:'1px solid'
        }}}
        onClick={()=>{
          navigate('/checkout')
        }}
        >
            Go to CheckOut
        </Button>
      </div>
    </div>

  );
};
export default ShopingCart;
