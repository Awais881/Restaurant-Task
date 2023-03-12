import { useState } from "react";
import './product.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
function Carts() {
    const [cart, setCart] = useState([]);

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
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{' '}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <h2>Total: ${calculateTotal()}</h2>
        <button>Checkout</button>
      </header>
    </div>
  

     
     </>
    );
  }

  export default Carts;
