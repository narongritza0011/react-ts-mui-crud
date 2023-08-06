import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Add } from '@mui/icons-material';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialProductState = {
    id: '',
    image: '',
    name: '',
    price: 0,
    isActive: true,
    categoryId: '',
  };

  const [newProduct, setNewProduct] = React.useState(initialProductState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    // You can add the new product to your state or perform any action here
    console.log('New Product:', newProduct);
    setNewProduct(initialProductState); // Reset the form fields
    handleClose(); // Close the dialog
  };


  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleClickOpen} size="small">
        Add
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            label="ID"
            name="id"
            value={newProduct.id}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Image"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Category ID"
            name="categoryId"
            value={newProduct.categoryId}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddProduct}>Add</Button>
        </DialogActions>
      </Dialog>
      {/* ... rest of the component ... */}
    </div>
  );
}