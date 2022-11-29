import React from 'react'

import { Navbar, Container, Nav, Form, Dropdown, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { CartState } from '../context/Context'

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState()
  return (
    <Navbar style={{ height: 80, backgroundColor: '#F8CB2E' }} variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <Form.Control
            placeholder="Search"
            style={{ width: 500 }}
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle style={{ backgroundColor: 'red' }}>
              <AiOutlineShoppingCart />
              <Badge bg="red">{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }} align="end">
              {cart.length > 0 ? (
                < div className='cartb'>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>$: {prod.price}</span>
                      </div>
                      <RiDeleteBin5Line
                        onClick={() =>
                          dispatch({ type: 'REMOVE_FROM_CART', payload: prod })
                        }
                        style={{
                          cursor: 'pointer',
                          color: 'red',
                          fontSize: 20,
                        }}
                      />
                    </span>
                  ))}
                  <Link to='/car'>
                    <Button style={{width:'95%',margin:'0 10px',backgroundColor:'#006E7F'}}>Go to cart</Button>
                  </Link>
                </div>
              ) : (
                <span style={{ padding: 10 }}>Cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
