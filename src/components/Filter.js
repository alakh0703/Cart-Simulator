import React, { useState, useEffect, useRef } from 'react';
import classes from './CSS/Filter.module.css';


function Filter(props) {
  const [checked , setChecked] = useState(false);
  
  
  const all = useRef('0')
  const pricefil = useRef('0')
  const [priceRange, setPriceRange] = useState("");

 
  
const handlePriceChange = (event) => {
  setPriceRange(event.target.value);
};

const filterHandler7 = () => {


  
  if (all.current.value === "0") {
    // props.setProducts(props.products);
    props.setFilter("A");
  }
  else if (all.current.value === "1") {
    props.setFilter("men's clothing");
  }
  else if (all.current.value === "2") {
    props.setFilter("women's clothing");
  }
  else if (all.current.value === "3") {
    props.setFilter("jewelery");
  }
  else if (all.current.value === "4") {
    props.setFilter("electronics");
  }
  


 
 
};


  return (
    <>
  <div className={classes.main}>
      <div className={classes.filter}>
        {/* <div className={classes.filterPrice}>
          <h4 className={classes.fillprice}>Price:</h4>
          <div className={classes.fillsdiv}>
            <label className={classes.fillslabel}>
              <input type="checkbox" className={classes.fillscheck} data-testid="checkbox" value="1" onChange={handlePriceChange} />
              <span className={classes.fillsspan}>$0 - $50</span>
            </label>
            </div>
        </div> */}
        <div className={classes.categories}>
          <h4 className={classes.fillscategories}>Categories:</h4>
          <div className={classes.fillsdiv0}>
               <select ref={all} className={classes.fillsselect} onChange={filterHandler7}>
                <option value="0" >All</option>
                <option value="1">Men's Clothing</option>
                <option value="2">Women's Clothing</option>
                <option value="3">Jewelery</option>
                <option value="4">Electronics</option>
              </select>

            </div>

        </div>
        {/* <div className={classes.filterSize}>
          <h4 className={classes.fillssize}>Prices:</h4>
          <div className={classes.fillsdiv}>
            <select ref={pricefil} className={classes.fillsselect}>
              <option value="0" >-- Select Price --</option>
              <option value="1">$0 - $50</option>
              <option value="2">$50 - $100</option>
              <option value="3">$100 - $300</option>
              <option value="4">$300+</option>
            </select>

            </div>
        </div> */}
      </div>
    </div>
     
    </>
     
  )
}

export default Filter;