import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CartState } from "../store/atom/cartatom";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ShopingCart = () => {
  const book = useRecoilValue(CartState);
  const cart = JSON.parse(localStorage.getItem('cart'))
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        paddingInline: 20,
      }}
    >
      <div>
        <Typography variant="h5" textAlign={"center"}>
          Shoping Cart
        </Typography>
      </div>
   
      {(cart && cart.length > 0) ? ( <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            minHeight: "80vh",
            width: "50%",
            marginTop: 20,
            marginLeft: 30,
            border: "1px solid",
          }}
        >
          {book.map((books) => {
            return <AddedItem key={books.name} book={books} />;
          })}
        </div>

        <OrderSummery book={book} />
       
      </div> ) :
      (
        <BackShoping />
      )}
    </div>
  );
};

const AddedItem = ({ book }) => {
  const [books,setBooks] = useRecoilState(CartState)
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
          <div style={{ marginTop: "10px" }}>
            <Typography variant="h6"> Quantaty: {book.count}</Typography>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Typography variant="h6">
              {" "}
              Price: {book.price * book.count}
            </Typography>
          </div>
        </div>
        <div>
          <Button
            variant="text"
            startIcon={<DeleteIcon />}
            sx={{
              color: "#7e75fa",
              "&:hover": {
                bgcolor: "#7e75fa",
                color: "white",
              },
            }}
            onClick={() => {
              console.log(book)
              const productdelete = books.filter((e) => e._id != book._id);
              localStorage.setItem('cart',JSON.stringify(productdelete))
              setBooks(productdelete);
            }}
          >
            Remove
          </Button>
        </div>
      </div>
    </Box>
  );
};

const OrderSummery = ({ book }) => {
  console.log('from ',book)
  const ProductPrice = book.reduce((sum, books) => sum + ( books.price * books.count),0);
  const shiping =100;
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: 300,
        width: 300,
        marginTop: 20,
        paddingInline: "10px",
        border: "1px solid green",
      }}
    >
      <div>
        {console.log("here books", book)}
        <Typography variant="h6" textAlign={"center"}>
          Order Summary
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          marginInline: "10px",
        }}
      >
        <Typography variant="h6">Product</Typography>
        <Typography variant="body1">Rs{ProductPrice}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          marginInline: "10px",
        }}
      >
        <Typography variant="h6">Shiping</Typography>
        <Typography variant="body1">Rs{100}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          marginInline: "10px",
          fontWeight: "bold",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Rs {ProductPrice+shiping}
        </Typography>
      </Box>
      <div
        style={{
          marginInline: 10,
        }}
      >
        <Button
          sx={{
            width: "100%",
            bgcolor: "#7e75fa",
            color: "white",
            borderRadius: "10px",
            "&:hover": {
              bgcolor: "white",
              color: "#7e75fa",
              border: "1px solid",
            },
          }}
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Go to CheckOut
        </Button>
      </div>
    </div>
  );
};


const BackShoping = () =>{
  const navigate = useNavigate();
  return(
    <div style={{
      height:'100px',
      minWidth:'90%',
      display:'flex',
      justifyContent:'center',
      marginTop:'20px'
    }}>
      <div>
            <Typography variant="h4">Your Cart is Empty</Typography>
            <Button sx={{
               color:"#7e75fa",
               bgcolor: "white",
               border:'1px solid',
               '&:hover':{
                bgcolor:'#7e75fa',
                color:'white'
               },
               marginLeft:'50px'
            }}
            startIcon={<ArrowBackIcon/>}
            onClick={()=>navigate('/')}
            >Back to shoping</Button>
      </div>
    </div>
  )
}
export  {ShopingCart,BackShoping };
