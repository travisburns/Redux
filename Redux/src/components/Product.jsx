import React from 'react'
import Card from 'react-bootstrap/Card'
import {useState, useEffect} from 'react'

const Product = () => {

  const [products, getProducts] = useState([]);

  useEffect(() => {
    //api
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(result => getProducts(result))
  }, []);


  const cards = products.map(product => (
    <div className='col-md-3'>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <button variant="primary"> Go somewhere</button>
        </Card.Body>
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
