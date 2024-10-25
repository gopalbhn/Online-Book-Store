import { useRecoilValue } from "recoil";
import { investmentBooks } from "../store/selectors/bookselectors";
import Product from "./productCard";
import { TopBar } from "./landing";
import { Grid } from '@mui/material'
const InvestmentBooks = () => {
  const book = useRecoilValue(investmentBooks);
  return (
    <div
      style={{
        height:'100vh',
        width: "90%",
        marginInline: "auto",
      
      }}
    >
      <TopBar />
      <Grid container spacing={3} >
      
      {book.map((books) => {
        return (
          <Grid item xs={12} sm={6} lg={3} >
          <Product onClick={() => handleClick(books)} booksDetail={books} />
          </Grid>
        );
      })}
      </Grid>
    </div>
  );
};


export default InvestmentBooks;
