import React from 'react'

import {useState, useEffect} from 'react'

const Product = () => {

  const [products, getProducts] = useState([]);

  useEffect(() => {
    //api
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(result => getProducts(result))
  }, []);



  return (
    <div>
      <h1>PRODUCT!!!</h1>
      {JSON.stringify(products)}
    </div>
  )
}

export default Product
