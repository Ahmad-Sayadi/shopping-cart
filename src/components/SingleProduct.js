import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FiDollarSign } from 'react-icons/fi'
import Rating from './Rating'
import { CartState } from '../context/Context'

const SingleProduct = ({ prod }) => {
  const {
    state: { cart},dispatch
  } = CartState()

  return (
    <div className="products">
      <Card>
        <Card.Img src={prod.image} variant="top" alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>

          <Card.Subtitle>
            <span>
              <FiDollarSign />:{prod.price}
            </span>

            {prod.fastDelivery ? (
              <p>Fast Delivery</p>
            ) : (
              <p>Four days deliver</p>
            )}

            <Rating rating={prod.ratings} />
          </Card.Subtitle>

          {cart.some((p) => p.id === prod.id) ? (
            <></>
            // <Button
            //   onClick={() =>
            //     dispatch({ type: 'REMOVE_FROM_CART', payload: prod })
            //   }
            // >
            //   Remove from Cart
            // </Button>
          ) : (
            <span
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: prod })
              }}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? (
                <p>Out of stock</p>
              ) : (
                <Button style={{backgroundColor:'#006E7F',width:'95%'}}>Add to cart</Button>
              )}
            </span>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
