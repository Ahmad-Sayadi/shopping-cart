import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'

const Filters = () => {
    const [rating,setRating]= useState(0)
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span >
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
         
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{paddingRight:10}}>Rating:</label>
        <Rating rating={rating} setRating={setRating}/>
        
      </span>
      <Button style={{backgroundColor:'red'}}>Clear filters</Button>
    </div>
  )
}

export default Filters
