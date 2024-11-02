import { useRecoilValue } from "recoil";
import { investmentBooks } from "../store/selectors/bookselectors";
import Product from "./productCard";
import { TopBar } from "./landing";
import { Grid } from '@mui/material'
import Modal from '../components/modal'
import { useState } from "react";
const InvestmentBooks = () => {
  const book = useRecoilValue(investmentBooks);
  const [product,setProduct] = useState(null)
  const [show,setShow] = useState(false);
  function handleClick(pro){
    console.log('pro',pro)
    setProduct(pro)
 
 setShow(!show)
}
function handleToogle(){
    setShow(!show)
}
  return (
    <div
      style={{
        height:'100vh',
        width: "90%",
        marginInline: "auto",
        marginTop:'20px'
      }}
    >
      {console.log('books',book)}
      <TopBar />
      <Grid container spacing={3} >
      
      {book.map((books) => {
        return (
          <Grid item xs={12} sm={6} lg={3} key = {books._id} >
          <Product onClick={() => handleClick(books)} booksDetail={books} />
          </Grid>
        );
      })}
      </Grid>
      {show ? (<Modal title={product.name} image={product.thumbnail} price={product.price} description={product.description} onClick={handleToogle} product={product} />) :null}
    </div>
  );
};


export default InvestmentBooks;
