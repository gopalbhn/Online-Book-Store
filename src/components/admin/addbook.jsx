const AddBooks = () => {
    return (
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
        </Grid>
    )
}