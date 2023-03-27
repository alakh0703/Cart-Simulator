import React, {useState} from 'react';
import classes from './CSS/CartItem.module.css';


function CartItem(props) {
    // const [quantity, setQuantity] = /(1);

    const increaseQuan = (e) => {
        // alert(e.target.title);

        for(let i = 0; i < props.cart.length; i++) {
            if(props.cart[i].title === props.title) {
                props.cart[i].quantity++;
                props.setCart([...props.cart]);
                return;
            }
        }
    
    }
    
    const decreaseQuan = () => {
        // console.log(props.cart);

        for(let i = 0; i < props.cart.length; i++) {
            if(props.cart[i].title=== props.title) {
                if(props.cart[i].quantity === 1) {
                    props.cart.splice(i, 1);
                    props.setCart([...props.cart]);
                    return;
                }
                props.cart[i].quantity--;
                props.setCart([...props.cart]);
                return;
            }
        }
    }


  return (
<>
{/* <hr className={classes.hr} /> */}

    <div className={classes.main} id={props.id}>
        
        <div className = {classes.cartitemimg} >
            <img className={classes.img} src={props.image}alt="product" />
        </div>
        <div className = {classes.cartiteminfo} >
            <p>{props.title}</p>
            <p>Size: M</p>
            <p>Quantity: {props.quantity}</p>
        </div>
        <div className = {classes.price}>
            <p>${(props.price * props.quantity).toFixed(2)}</p>
            <div className={classes.quanchange}>
                <button  onClick={decreaseQuan}>-</button>
                <button className="ced"id={props.id} onClick={increaseQuan}>+</button>
            </div>
        </div>
    </div>
    {/* <hr className={classes.hr} /> */}

    </>
  )
}

export default CartItem;