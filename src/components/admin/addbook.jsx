import {Grid,Typography,TextField,Button, Container,Select, MenuItem} from '@mui/material'
import { useEffect, useState } from 'react';
import axios from 'axios';
import SucessModal from '../sucessmodal';
const AddBooks = () => {
 const [title,setTitle] = useState('');
 const [author,setAuthor] = useState('');
 const [price,setPrice] = useState(null)
 const [image,setImage] = useState('')
 const [description,setDescription] = useState('');
 const [quantity,setQuantity] = useState(null);
 const [category,setCategory] = useState('Nepali');
 const [show,setShow] = useState(false)
function handleToogle(){
  setShow(!show)
  setAuthor('')
  setTitle('')
  setPrice(null)
  setQuantity(null)
  setCategory('Nepali')
  setDescription('');
  setImage('')
}
 async function handleClick(){
  try{
    const response = await axios.post('http://localhost:3000/users/admin/addbook',{
     name:title,
      description:description,
      author:author,
      price:price,
      quantity:quantity,
      category:category,
      thumbnail:image

    },{
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    });
    if(response){
     setShow(!show)
    
      
    }
  }catch(err){
    alert(err.response.data.message)
    console.log('err',err.response.data.message)
  }
 }
 useEffect(()=>{
  if(show){
    document.body.style.overflow = 'hidden'
  }
  else{
    document.body.style.overflow = "auto"
  }
 },[show])
    return (
      <Container maxWidth={'md'}>
        {show ? <SucessModal text={'Added'} onClick={handleToogle}/> : null}
           <Typography variant="h6">Add New Product</Typography>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            size='small'
            margin="normal"
          />
          <TextField
            size='small'
            label="Author"
            value={author}
            onChange={(e) =>setAuthor(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            type="number"
            required={true}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            size='small'
            margin="normal"
          />
          <TextField
            label="Image Link"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            fullWidth
            size='small'
            margin="normal"
          />
              <TextField
            label="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            size='small'
            margin="normal"
          />
           
          <Select 
            label={'category'}
            value={category}
            size='small'
            onChange={(e)=> setCategory(e.target.value)}
            >
              <MenuItem value = {'Nepali'}>Nepali</MenuItem>
              <MenuItem value = {'Investment'}>Investment</MenuItem>
              <MenuItem value = {'Self Help'}>Self Help</MenuItem>
              
          </Select>
              <TextField
            label="Quantity"
            type="Number"
            value={quantity}
            required={true}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            size='small'
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleClick}>
            Add Product
          </Button>
       
      </Container>
       
    )
}
export default AddBooks;