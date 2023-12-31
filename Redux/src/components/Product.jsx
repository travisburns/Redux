import React from 'react'
import Card from 'react-bootstrap/Card'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add} from '../store/cartSlice';
import  {getProducts}  from '../store/productSlice';


const Product = () => {
  const dispatch = useDispatch();
  const {data: products} = useSelector(state => state.products);
  console.log(products)
  useEffect(() => {
    //api

    //dispatch an action for fetchProducts
    dispatch(getProducts());
    // fetch('https://fakestoreapi.com/products')
    // .then(data => data.json())
    // .then(result => getProducts(result))


  }, []);

  const addToCart = (product) => {
    dispatch(add(product))
  }

 
  const cards = products.map(product => (
    <div className='col-md-3' style={{ marginBottom: "10px"}}>
      <Card key={product.id} className='h-100'>
        <div>
        <Card.Img variant="top" src={product.image}  style={{ width : '100px', height: '130px'}}/>
        </div>
       
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
             USD: {product.price}$
            </Card.Text>
            


        </Card.Body>
      <Card.Footer style={{ background : "white"}}>
      <button variant="primary" onClick={() => addToCart(product)}> Add To Cart </button>
      </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className='row'>
        {cards}
      </div>
    </div>
  )
}

export default Product
