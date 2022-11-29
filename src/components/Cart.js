import React from 'react'
import { CartState } from '../context/Context'
import { cartReducer } from '../context/Reducers'

const Cart = () => {
  const {state:{cart}} =CartState()
  return (
    <div>{cart}</div>
  )
}

export default Cart