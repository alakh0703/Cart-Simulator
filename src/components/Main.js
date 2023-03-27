import React, {useState} from 'react';
import classes from './CSS/Main.module.css';
import Center from './Center';
import Navbar from './Navbar';
function Main() {
  const [cart, setCart] = useState([]);
  const [showcart, setShowcart] = useState(false);
  return (
    <div className={classes.main}>
      <Navbar cart={cart} setCart={setCart} setShowcart={setShowcart}/>
      <Center cart={cart} setCart={setCart} showcart={showcart}/>
    </div>
  )
}

export default Main;