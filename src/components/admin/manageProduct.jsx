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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Add New Product</Typography>
          <TextField
            label="Title"
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Author"
            value={newProduct.author}
            onChange={(e) => setNewProduct({ ...newProduct, author: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            type="number"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Grid>

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
      </Grid>
    </Container>
  );
};

export default ManageProduct;
