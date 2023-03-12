import * as React from 'react';
import { useState } from "react";
import './product.css'
import {Button,TextField ,DialogContentText, DialogActions,DialogTitle
 ,DialogContent,Dialog } from '@mui/material';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Carts() {
    const [cart, setCart] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setCart([]);
      setOpen(false);
      toast.success('Payment Sucessfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    };
    const products = [
      {
        id: 1,
        name: 'Pizza',
        price: 10,
        description: 'Delicious pizza with your choice of toppings.',
        image: image1,
      },
      {
        id: 2,
        name: 'Burger',
        price: 8,
        description: 'Juicy burger with cheese, lettuce, and tomato.',
        image: image2,
      },
      {
        id: 3,
        name: 'Pasta',
        price: 12,
        description: 'Freshly made pasta with your choice of sauce.',
        image: image3,
      },
    ];
  
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    const removeItem = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    };
  
    const calculateTotal = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price;
      });
      return total;
    };
  
  

    return (
     <>
       
    <div className='App'>
      <header className='App-header'>
      
        <div className='card-container'>
          {products.map((product) => (
            <div key={product.id} className='card'>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          ))}
        </div>
       <center> <h2>Cart</h2></center>
        <div className='card-container'>
        
          {cart.map((item) => (
            <div key={item.id} className='card'>
             <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              {/* {item.name} - ${item.price}{' '} */}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        
        </div>
        {/* <div className="checkOut"> */}
        {/* <h2>Total: ${calculateTotal()}</h2> */}
        {/* <button>Checkout</button> */}
        {/* </div> */}
      </header>
    </div>

      {/* Payment CheckOut */}
    <div>
      <center>
      <Button variant="outlined"  onClick={handleClickOpen}>
      CheckOut
      </Button>
      </center>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
        <h2>Total: ${calculateTotal()}</h2> 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            required
          />
             <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bank Account "
            type="number"
            fullWidth
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Order</Button>
        </DialogActions>
      </Dialog>
    </div>

    <ToastContainer />
     </>
    );
  }

  export default Carts;
