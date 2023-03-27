import React, {useState,useEffect} from 'react';
import Item from './Item';
import classes from './CSS/Products.module.css';
// import axios from 'axios';


function Products(props) {

  useEffect(() => {
   
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => props.setProducts(json));
      // console.log("products")
      // console.log(props.products)

  }, []);



  
  return (
    <div className={classes.main}>
      <p>{
        props.filter === "A" ? props.products.length:
      props.products.filter(name => name.category === props.filter).length} Product(s) found</p>

      {props.filter === "A" ? 
        <div className={classes.products}>
        {props.products.map(product => (
          
          <Item 
            key={product.id}
            title={product.title}
            desc= {product.description}
            price={product.price}
            image={product.image}
            cart={props.cart}
            setCart={props.setCart}
          />
        ))}

      </div> : 
        <div className={classes.products}>
        {props.products.filter(name => name.category === props.filter).map(product => (
          
          <Item 
            key={product.id}
            title={product.title}
            desc= {product.description}
            price={product.price}
            image={product.image}
            cart={props.cart}
            setCart={props.setCart}
          />
        ))}

      </div>}
    
    </div>
  )
}

export default Products;