import React, {useState} from 'react';
import classes from './CSS/Navbar.module.css';
import logo from '../images/one.png';

import Cart from './Cart';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar(props) {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
    props.setShowcart(true);
  }

  return (
    <div className={classes.main}>
      {/* {!showCart && <button className={classes.cartbtn} onClick={showCartHandler}>Cart</button>} */}
      {!showCart &&     <div className={classes.logodiv}> <img src={logo} alt="logo" onClick={showCartHandler} className={classes.logo}/> 
      <p className={classes.cartcount}>{(props.cart).reduce((acc, curr) => acc + curr.quantity, 0)}</p>
      </div> 
}
      {showCart && <Cart setShowcart={props.setShowcart} setShowCart={setShowCart} cart={props.cart}  setCart={props.setCart}/>}
      
    </div>
  )
}

export default Navbar;
