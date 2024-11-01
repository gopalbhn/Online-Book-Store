import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { purchase } from "../store/selectors/userSelector";
const PurchaseHistory = () => {
  const purchasedBook = useRecoilValue(purchase);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      {console.log("purchase", purchasedBook)}
      <div>
        <Typography variant="h5" textAlign={"center"}>
          Your purchase History
        </Typography>
      </div>
      <div
        style={{
          height: "90vh",
          width: "90%",
          marginInline: "auto",
          border: "1px solid",
        }}
      >
        <div
          style={{
            height: "30px",
            width: "100%",
            border: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Typography>Id</Typography>
          </div>
          <div>
            <Typography>Quantity</Typography>
          </div>
          <div>
            <Typography>Status</Typography>
          </div>
          <div>Details</div>
        </div>
        {purchasedBook.map(book =>{
            return(
                <div
                key={book._id}
          style={{
            height: "30px",
            width: "100%",
            border: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Typography>{book._id}</Typography>
          </div>
          <div>
            <Typography>{book.quantity}</Typography>
          </div>
          <div>
            <Typography>{book.status}</Typography>
          </div>
          <div>Details</div>
        </div>
            )
        })}
      </div>
    </div>
  );
};
export default PurchaseHistory;
