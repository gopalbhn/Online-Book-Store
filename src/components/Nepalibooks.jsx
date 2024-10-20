import { Typography, Button } from "@mui/material"
import { TopBar } from "./landing";
import Modal from './modal.jsx'
import { useState } from "react";
const NepaliBooks = () => {
    const books = [
        {
            "title": "Palpasa Café",
            "author": "Narayan Wagle",
            "year": 2005,
            "image": "https://upload.wikimedia.org/wikipedia/en/8/86/Karnali_Blues_by_Buddhisagar.jpg",
            "price": 50
        },
        {
            "title": "Sukanya",
            "author": "Sanjay Gupta",
            "year": 2012,
            "image": "https://upload.wikimedia.org/wikipedia/en/8/81/Sukanya_cover.jpg",
            "price": 60
        },
        {
            "title": "Karnali Blues",
            "author": "Samit Basnet",
            "year": 2012,
            "image": "https://upload.wikimedia.org/wikipedia/en/8/86/Karnali_Blues_by_Buddhisagar.jpg",
            "price": 70
        },
        {
            "title": "Muna Madan",
            "author": "Laxmi Prasad Devkota",
            "year": 1936,
            "image": "https://upload.wikimedia.org/wikipedia/en/a/a6/Muna_Madan.jpg",
            "price": 40
        },
        {
            "title": "Seto Dhar",
            "author": "Dhruba Chandra Gautam",
            "year": 2008,
            "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Seto_Dhar.jpg",
            "price": 55
        },
        {
            "title": "Shirishko Phool",
            "author": "Buddhi Sagar",
            "year": 1990,
            "image": "https://upload.wikimedia.org/wikipedia/en/9/9b/Shirishko_Phool.jpg",
            "price": 45
        },
        {
            "title": "Gorkha Diary",
            "author": "Sukanta Thapa",
            "year": 2016,
            "image": "https://upload.wikimedia.org/wikipedia/en/4/4c/Gorkha_Diary.jpg",
            "price": 65
        },
        {
            "title": "Yugal Gurung",
            "author": "Gokul Prasad Rijal",
            "year": 2015,
            "image": "https://upload.wikimedia.org/wikipedia/en/0/0c/Yugal_Gurung.jpg",
            "price": 75
        }
    ];
    
    return (
        <>
        <TopBar />
     
        <div style={{
            width:'90%',
            marginInline:'auto',
            display:'flex',
            flexWrap:'wrap',
            zIndex:1,
        }}>
            {console.log(books)}
            
            <CardComponent book={books} />
        </div>
        </>
    )
}

const CardComponent = ({ book }) => {
    const [show,setShow] = useState(false)
    function handleClick(){
     setShow(!show)
    }
    
    return(
        <>
         {show ? (<Modal title={book.title} image={book.image} description={book.description} onClick={handleClick} />) :null}
        {book.map((books) =>(
        <div key={books.title} style={{
            height: "230px",
            width: "250px",
            padding: 2,
            margin: 10,
            backgroundColor: '#ebe6e6'
        }}>
            
            {console.log(books)}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 2, objectFit:'contain'}}>
                <img src={books.image} height={150} width={240} />
            </div>
            <Typography sx={{textAlign:'center'}}>{books.title}</Typography>
            <Typography align="right" marginRight={5}>Price:{books.price}</Typography>
            <Button variant="contained" fullWidth={true} sx={{
                bgcolor: '#7e75fa',
                color: 'white',
                borderRadius: '20px',
                '&:hover': {
                    bgcolor: 'white',
                    color: '#7e75fa',
                    boxShadow:'0px 0px 10px #7e75fa inset'
                }
            }} 
            onClick={()=>handleClick()}>Purchase</Button>
           
        </div>
        
        ))
    };
    
     </>
    );
   
}

export default NepaliBooks;