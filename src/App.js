import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
    Home,
    About,
    AuthWrapper,
    Cart,
    Checkout,
    Error,
    Private,
    Products,
    Product
} from './pages'



function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/about'>
          <About></About>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
        <Route exact path='/products'>
          <Products/>
        </Route>
        <Route exact path='/products/:id' children ={<Product/>}>
          
        </Route>
        <Route exact path='/checkout'>
          <Checkout/>
        </Route>
        
        <Route exact path='*'>
         <Error/>
        </Route>
      </Switch>
     <Footer/>
    </Router>
  )
}

export default App
