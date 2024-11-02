import { Typography, Box, TextField,Select,MenuItem, Button } from "@mui/material";
import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRecoilValue } from "recoil";
import { CartState } from "../store/atom/cartatom";
import  axios from 'axios'
import SucessModal from "../components/sucessmodal";
import { BackShoping } from "./shopingcart";
const CheckOut = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
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
    {  console.log('cart',cart)}
      {!(cart.length == 0) ? (<div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginInline: "10px",
          flexWrap:'wrap'
        }}
      >
        <Form></Form>

        <OrderSummery />
      </div> ) :(    <BackShoping /> ) }
      <Footer />
    </div>
  );
};

const Form = () => {
  const State  = {
    "Nepal":['Koshi','Madhesh','Bagmati','SudurPachim'],
    "India":['Delhi','Mumbai',"Bihar","Panjab"],
    "China":[]
  }
  const book = useRecoilValue(CartState);
  const [country,setCountry] = useState('Nepal');
  const [cState,setCState] = useState(State[country])
  const [selectedState,setSelectedState] =useState(State[country][0])
  const [name,setName] = useState('');
  const [last,setLast] = useState('');
  const [address,setAddress] = useState('');
  const [cardName,setCardName] = useState('');
  const [show,setShow] = useState(false)
  console.log('name',name)
  function handleCountryChange(e){
    const selectedCountry = e.target.value;
    setCountry(selectedCountry)
    setCState(State[selectedCountry]);
    setSelectedState('')
    
  }
  function handleStateChange(e){
    setSelectedState(e.target.value);
  }
  
  async function handleClick(){
    console.log(book)
    
      const response = await axios.post('http://localhost:3000/users/purchase',{
       book
      },{headers:{
        'Authorization':'Bearer ' +localStorage.getItem('token')
      }})
      console.log(response)
      if(response){
       localStorage.setItem('cart','[]');
       setTimeout(()=>{
        setShow(!show)
       },3000)
       setTimeout(()=>{
        window.location.reload();
       },5000)
      
        
  }
  }
  return (
    <div
      style={{
        minHeight: "90vh",
        minWidth: "60%",
        marginTop:'20px',
        marginLeft: "20px",
        border: "1px solid green",
      }}
    >
       {show ? (<SucessModal text={"Purchased"} />) :null}
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
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </Box>
        <Box>
          <Typography>Last Nmae</Typography>
          <TextField id="outlined-basic" variant="outlined" size="small"  value={last} onChange={(e)=>setLast(e.target.value)}/>
        </Box>
      </Box>
      <Box sx={{ paddingInline: "10px" }}>
        <Typography>Address</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth={true}
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
      </Box>

      <Box sx={{
        display:'flex',
        gap:'10px',
        flexWrap:'wrap'
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
           {cState.map(state=>
            (
              <MenuItem key={state} value={state}>{state}</MenuItem>
            )
           )}
           
          </Select>
        </Box>
        <Box
          sx={{
            paddingInline: "10px",
            margin:1
          }}
        >
          <Typography variant="h6">Zip</Typography>
          <TextField variant="outlined"  size="small" />
        </Box>
      </Box>
      <div style={{marginLeft:'10px'}}>
        <Typography variant="h5">Payment</Typography>
      </div>
      <Box sx={{
        width:'100%',
        marginTop:'10px',
        paddingInline:'10px',
        display:'flex',
        gap:'10px',
        flexWrap:'wrap'
      }}>
        <Box>
            <Typography >Name on Card</Typography>
            <TextField variant="outlined" size="small" value={cardName} onChange={(e)=>setCardName(e.target.value)}></TextField>
        </Box>
        <Box>
            <Typography > Credit Card Number</Typography>
            <TextField variant="outlined" size="small" type="number"></TextField>
        </Box>
      </Box>
      <Box sx={{
        width:'100%',
        paddingInline:'30px',
        display:'flex',
        marginTop:'10px',
        gap:10
      }}>
        <Box>
            <Typography >Expiration</Typography>
            <TextField variant="outlined" size="small" sx={{width:'100px'}} type="date"></TextField>
        </Box>
        <Box>
            <Typography > CVV</Typography>
            <TextField variant="outlined" size="small" sx={{width:'100px'}}></TextField>
        </Box>
        
       
      </Box>
      <hr />
      <div style={{width:'90%',minHeight:'25px',marginInline:'auto', display:"flex",flexWrap:'wrap'}}>

  
      <Button variant="contained" sx={{
         
          width:'100%',
         
          bgcolor:'#7e75fa',
          color:'white',
        }}
        onClick={()=>{
         
          handleClick()

        }}
        >Continue to Checkout</Button>
            </div>
       
    </div>
  );
};

const OrderSummery = () => {
  const book = useRecoilValue(CartState);
  const ProductPrice = book.reduce((sum, books) => sum + ( books.price * books.count),0);
  const shiping =100;
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
        <Typography variant="body1">Rs {shiping}</Typography>
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
