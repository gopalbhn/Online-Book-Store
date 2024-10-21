import { Typography, Button } from "@mui/material"
import { TopBar } from "./landing";
import Modal from './modal.jsx'
import { useState,useEffect } from "react";
const NepaliBooks = () => {
    const books = [
        {
            "title": "Palpasa Café",
            "author": "Narayan Wagle",
            "year": 2005,
            "image": "https://m.media-amazon.com/images/I/71vwWrAQCNL.jpg",
            "price": 50,
            "description": "A poignant story set against the backdrop of the Nepalese civil war."
        },
        {
            "title": "Sukanya",
            "author": "Sanjay Gupta",
            "year": 2012,
            "image": "https://upload.wikimedia.org/wikipedia/en/8/81/Sukanya_cover.jpg",
            "price": 60,
            "description": "A tale of love and loss that explores the depths of human emotion."
        },
        {
            "title": "Karnali Blues",
            "author": "Samit Basnet",
            "year": 2012,
            "image": "https://upload.wikimedia.org/wikipedia/en/8/86/Karnali_Blues_by_Buddhisagar.jpg",
            "price": 70,
            "description": "An engaging narrative that captures the essence of rural life in Nepal."
        },
        {
            "title": "Muna Madan",
            "author": "Laxmi Prasad Devkota",
            "year": 1936,
            "image": "https://media.thuprai.com/front_covers/Muna_Madan-_In_the_Form_of_Novella.jpg",
            "price": 40,
            "description": "A classic epic poem that tells the story of love and sacrifice."
        },
        {
            "title": "Seto Dhar",
            "author": "Dhruba Chandra Gautam",
            "year": 2008,
            "image": "https://upload.wikimedia.org/wikipedia/en/d/d7/Seto_Dhar.jpg",
            "price": 55,
            "description": "A gripping story that delves into the complexities of life and relationships."
        },
        {
            "title": "Shirishko Phool",
            "author": "Buddhi Sagar",
            "year": 1990,
            "image": "https://upload.wikimedia.org/wikipedia/en/9/9b/Shirishko_Phool.jpg",
            "price": 45,
            "description": "A heartfelt narrative exploring themes of love, loss, and nostalgia."
        },
        {
            "title": "Gorkha Diary",
            "author": "Sukanta Thapa",
            "year": 2016,
            "image": "https://upload.wikimedia.org/wikipedia/en/4/4c/Gorkha_Diary.jpg",
            "price": 65,
            "description": "An insightful look into the lives of the people in Gorkha, Nepal."
        },
        {
            "title": "Yugal Gurung",
            "author": "Gokul Prasad Rijal",
            "year": 2015,
            "image": "https://upload.wikimedia.org/wikipedia/en/0/0c/Yugal_Gurung.jpg",
            "price": 75,
            "description": "A contemporary narrative that addresses societal issues and personal struggles."
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
    const [show,setShow] = useState(false);
    const [product,setProduct] = useState(null)
    function handleClick(pro){
        setProduct(pro)
     
     setShow(!show)
    }
    function handleToogle(){
        setShow(!show)
    }
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'; 
         
        } else {
            document.body.style.overflow = 'auto'; 
          
        }
    }, [show]);
    return(
        <>
         
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
            onClick={()=>handleClick(books)}>Purchase</Button>
           
        </div>
        
        ))
    };
    {show ? (<Modal title={product.title} image={product.image} price={product.price} description={product.description} onClick={handleToogle} />) :null}
     </>
    );
   
}

export default NepaliBooks;