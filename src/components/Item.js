import React from 'react';
import classes from './CSS/Item.module.css';

function Item(props) {

  const a2cHandler = (e) => {

    // if item is already in cart, then increase the quantity
    // alert(e.target.id);
    for (let i = 0; i < props.cart.length; i++) {

      if (props.cart[i].title === props.title) {
        props.cart[i].quantity++;
        props.setCart([...props.cart]);
        return;
      }
    }

    // if item is not in cart, then add it to cart
    props.setCart([...props.cart, {
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      quantity: 1
    }]);
  }

  return (
    <div className={classes.main}>
        <div className={classes.image}>
            {/* <div className={classes.rating}>
                <p>
                    <span className={classes.rate}>3.5</span>
                    <span className={classes.star}>★</span>
                    <span className={classes.vl}>|</span>
                    <span className={classes.totalrating}>20</span>
                    
                </p>
            </div> */}
            <img className={classes.img} src={props.image} alt="Product img"  />
        </div>
        <div className={classes.title}>
            <p>{props.title}</p>
            <hr className={classes.hr}/>
        </div>
        <div className={classes.price}>
          <p>${props.price}</p>
        </div>
        <div className={classes.button}>
            <button className={classes.a2c} onClick={a2cHandler}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Item