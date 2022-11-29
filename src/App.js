import './App.css'

import { Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  return (
    <div >
      <Header />
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </div>
    </div>
  )
}

export default App
