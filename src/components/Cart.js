import React from 'react';
import classes from './CSS/Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {
const checkoutHandler = () => {

    props.setCart([]);
    props.setShowCart(false);
    props.setShowcart(false);

    alert('Thank you for shopping with us!');
  }


  const hideCartHandler = (event) => {
    // event.stopPropagation();
    // alert('hide cart');
    props.setShowCart(false);
    props.setShowcart(false);

  }

  const stopClick = (event) => {
    event.stopPropagation();
  }
  const totalPrice = props.cart.reduce((acc, item) => {
    return (acc + item.price * item.quantity);
  }, 0);



  return (
    <div className={classes.main} onClick={hideCartHandler}> 
      <div className={classes.cart} onClick={stopClick}>
        <div className={classes.cartHeader}>
          <h2>Cart {`(${(props.cart).reduce((acc, curr) => acc + curr.quantity, 0)})`}</h2>
          <button className={classes.close} onClick={hideCartHandler}>X</button>
        </div>
    {props.cart.length === 0 ? <div className={classes.noitemsfound}>No items in your cart  :)</div> :
        <div className={classes.cartItems}>
        {props.cart.map((item) => {
          return (
            <CartItem 
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              cart={props.cart}
              setCart={props.setCart}
            />
          )
        }
        )}
    </div>
    
    }
    
              {props.cart.length >3 && <div className={classes.scroll}>
                
                Scroll &#8595;</div>}
      
    
    {props.cart.length !== 0 && 

<div className={classes.cartTotal}>
<div className={classes.cartTotal0}>
<div>
    <p className={classes.subtotal}>Subtotal:</p>
  </div>
  <div>
    <p className={classes.subtotalp}>${totalPrice.toFixed(2)}</p>
  </div>
</div>
 
<div className={classes.checkoutdiv}>
<button className={classes.checkout} onClick={checkoutHandler}>Checkout</button>
</div>
</div>
    
    }
       
     


      </div>

    </div>
  )
}

export default Cart;