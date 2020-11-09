import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CartScreen from './pages/CartScreen'

import Home from './pages/HomeScreen/index'
import Product from './pages/ProductScreen'

const Routes = () => (
  <Switch>
    <Route exact path="/cart/:id?" component={CartScreen} />
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={Product} />
  </Switch>
)

export default Routes
