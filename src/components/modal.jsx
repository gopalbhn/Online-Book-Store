import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Modal = ({ onClick, title, description, image, price }) => {
  const [count, setCount] = useState(1);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 59,
      }}
    >
      <div
        style={{
          height: "80vh",
          width: "70%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 10,
          backgroundColor: "#fff",

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
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              height={"50%"}
              width={"50%"}
              alt={title}
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
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Typography variant="h6">{title}</Typography>{" "}
            </div>
            <div
              style={{
                maxHeight: "20vh",
              }}
            >
              <Typography variant="body1">{description}</Typography>
            </div>
            <div
              style={{
                marginInline: "50px",
              }}
            >
              <Typography variant="body1">Price: Rs.{count * price}</Typography>
              <Typography variant="body1"> Select Quantity</Typography>

              {count == 1 ? (
                <Button disabled variant="outlined">
                  -
                </Button>
              ) : (
                <Button variant="outlined" onClick={() => setCount(count - 1)}>
                  -
                </Button>
              )}
              <Typography
                variant="body1"
                marginInline={4}
                style={{ display: "inline" }}
              >
                {count}
              </Typography>
              <Button variant="outlined" onClick={() => setCount(count + 1)}>
                +
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                marginTop: "30px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#7e75fa",
                  marginInline: "15px",
                }}
              >
                Buy Now
              </Button>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  bgcolor: "white",
                  color: "#7e75fa",
                }}
              >
                Add to Cart{" "}
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default Modal;
