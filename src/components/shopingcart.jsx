import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRecoilValue } from "recoil";
import { CartState } from "../store/atom/cartatom";

const ShopingCart = () => {
    const book = useRecoilValue(CartState);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
        {console.log('booksd',book)}
      <div>
        <Typography variant="h5">Shoping Cart</Typography>
      </div>

        {book.map((books) => {
            return(
                <AddedItem book={books} />
            );
        })
    }
    </div>
  );
};

const AddedItem = ({book})=>{
    return(
        <Box
        sx={{
          width: "500px",
          height: "150px",
          margin:10,
          border:'1px solid',
          display:'flex'
        }}
      >
        <div style={{
            height:'150px',
            width:'150px',
            marginRight:'10px'
        }}>
          <img src={book.thumbnail} alt={"Image not displayed"}  style={{height:'100%',width:'100%'}}/>
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
            <div>
                <Typography variant="h6">
                    {book.price}
                </Typography>
            </div>
          </div>
          <div>
            <Button variant="text" startIcon={<DeleteIcon />} >
                Remove
            </Button>
          </div>
        </div>
      </Box>
    )
}
export default ShopingCart;