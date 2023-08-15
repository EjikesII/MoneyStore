import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import { Home, About, Cart, Checkout, Error, PersonalRoute, Products, SingleProduct  } from './pages'
//import CheckoutPage from './pages/CheckoutPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/About'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/Products'>
          <Products />
        </Route>
        <Route exact path='/Products/:id' children={<SingleProduct />} >
          <SingleProduct />
        </Route>
        <Route exact path='/Checkout'>
          <Checkout />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
