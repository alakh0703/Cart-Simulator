import React, {useState} from 'react';
import classes from './CSS/Center.module.css';
import Filter from './Filter';
import Products from './Products';

function Center(props) {  
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("A");

  return (
    <>
    {!props.showcart && 
     <div className={classes.main}>
      <Filter setFilter={setFilter} cart={props.cart} setCart={props.setCart} products={products} setProducts={setProducts} />
      <Products filter={filter} cart={props.cart} setCart={props.setCart} products={products} setProducts={setProducts} />
    </div>
    }
    </>
  
  )
}

export default Center;