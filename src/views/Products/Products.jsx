import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <button><Link to={``}>Pay</Link></button>
    </div>
  );
}

export default Products;