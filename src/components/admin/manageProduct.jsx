// src/components/ManageProduct.js
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', author: '', price: '' });

  const handleAddProduct = () => {
    if (newProduct.title && newProduct.author && newProduct.price) {
      setProducts([...products, { ...newProduct, id: products.length }]);
      setNewProduct({ title: '', author: '', price: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Manage Products</Typography>
     

        <Grid item xs={12}>
          <Typography variant="h6">Product List</Typography>
          {products.map(product => (
            <Card key={product.id} variant="outlined" style={{ marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="h5">{product.title}</Typography>
                <Typography color="textSecondary">Author: {product.author}</Typography>
                <Typography color="textSecondary">Price: ${product.price}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
    
    </Container>
  );
};

export default ManageProduct;
