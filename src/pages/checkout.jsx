import { Typography, Box, TextField,Select,MenuItem, Button } from "@mui/material";
import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
const CheckOut = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100%",
      }}
    >
      <div>
        <hr />
        <Typography
          sx={{ fontWeight: "bold", textAlign: "center" }}
          variant="h4"
        >
          CheckOut
        </Typography>
        <hr />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginInline: "10px",
        }}
      >
        <Form></Form>

        <OrderSummery />
      </div>
      <Footer />
    </div>
  );
};

const Form = () => {
  const State  = {
    "Nepal":['Koshi','Madhesh','Bagmati','SudurPachim'],
    "India":['Dehli','Mumbai',"Bihar","Panjab"],
    "China":[]
  }
  const [country,setCountry] = useState('Nepal');
  const [cState,setCState] = useState(State[country])
  const [selectedState,setSelectedState] =useState('Select')
  
  function handleCountryChange(e){
    const selectedCountry = e.target.value;
    setCountry(selectedCountry)
    setCState(State[selectedCountry]);
    setSelectedState(State[selectedCountry][0])
    
  }
  function handleStateChange(e){
    setSelectedState(e.target.value);
  }
  return (
    <div
      style={{
        minHeight: "90vh",
        minWidth: "60%",
        marginLeft: "20px",
        border: "1px solid green",
      }}
    >
      <div style={{ backgroundColor: "#bdbebf", textAlign: "center" }}>
        <Typography variant="body1">Billing Address</Typography>
      </div>
      <Box
        sx={{
       
          paddingInline: "10px",
          display: "flex",
          justifyContent: "space-betweem",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "5px",
        }}
      >
        <Box>
          <Typography>First Name</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            hyperText="Name"
          />
        </Box>
        <Box>
          <Typography>Last Nmae</Typography>
          <TextField id="outlined-basic" variant="outlined" size="small" />
        </Box>
      </Box>
      <Box sx={{ paddingInline: "10px" }}>
        <Typography>Address</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth={true}
        />
      </Box>

      <Box sx={{
        display:'flex',
        justifyContent:'space-around'
      }}>
        <Box
          sx={{
            paddingInline: "10px",
            margin:1
          }}
        >
          <Typography variant="h6">Country</Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            size="small"
            onChange={handleCountryChange}
          >
            <MenuItem value={'Nepal'}>Nepal</MenuItem>
            <MenuItem value={'India'}>India</MenuItem>
            <MenuItem value={'China'}>China</MenuItem>
          </Select>
        </Box>
       
        <Box
          sx={{
            paddingInline: "10px",
            margin:1
          }}
        >
          <Typography variant="h6">State</Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedState}
            label="Choose...."
            size="small"
            onChange={handleStateChange}
          >
           {cState.map(state=>{
            return(
              <MenuItem key={state} value={state}>{state}</MenuItem>
            )
           })}
           
          </Select>
        </Box>
        <Box
          sx={{
            paddingInline: "10px",
            margin:1
          }}
        >
          <Typography variant="h6">Zip</Typography>
          <TextField variant="outlined"  size="small"/>
        </Box>
      </Box>
      <div style={{marginLeft:'10px'}}>
        <Typography variant="h5">Payment</Typography>
      </div>
      <Box sx={{
        width:'100%',
        paddingInline:'30px',
        display:'flex',
        gap:10
      }}>
        <Box>
            <Typography >Name on Card</Typography>
            <TextField variant="outlined" size="small"></TextField>
        </Box>
        <Box>
            <Typography > Credit Card Number</Typography>
            <TextField variant="outlined" size="small" ></TextField>
        </Box>
      </Box>
      <Box sx={{
        width:'100%',
        paddingInline:'30px',
        display:'flex',
        gap:10
      }}>
        <Box>
            <Typography >Expiration</Typography>
            <TextField variant="outlined" size="small" sx={{width:'100px'}}></TextField>
        </Box>
        <Box>
            <Typography > CVV</Typography>
            <TextField variant="outlined" size="small" sx={{width:'100px'}}></TextField>
        </Box>
        
       
      </Box>
      <hr />
      <div style={{width:'90%',height:'20px',marginInline:'auto'}}>

  
      <Button variant="contained" sx={{
         
          width:'100%',
          marginInline:"auto",
          bgcolor:'#7e75fa',
          color:'white',
        }}
        onClick={()=>{
          setTimeout(()=>{
            alert("Sucessfully Purchased item")
          },3000)
          

        }}
        >Continue to Checkout</Button>
            </div>
        
    </div>
  );
};

const OrderSummery = () => {
  const book = {
    name: "Sample Book Title",
    author: "Author Name",
    price: 19.99,
    quantity: 100,
    thumbnail: "http://example.com/thumbnail.jpg",
    category: "Fiction",
    description: "This is a brief description of the book.",
  };

  return (
    <div
      style={{
        height: 300,
        width: 300,
        marginTop: 20,

        border: "1px solid green",
      }}
    >
      <div style={{ backgroundColor: "#bdbebf" }}>
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
        <Typography variant="body1">Rs{book.price}</Typography>
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
        <Typography variant="body1">Rs{book.price}</Typography>
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
          Rs{book.price+book.price}
        </Typography>
      </Box>

    </div>
  );
};


const Footer = ()=>{
  return(
    <div style={{height:'10vh',display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column', margin:'20px 0px'}}>
     <Typography>Made by Gopal Bhandari</Typography>
     <Typography>Follow on <a href="https://www.github.com/gopalbhn"><GitHubIcon /></a></Typography>
    </div>
  )
}
export default CheckOut;
