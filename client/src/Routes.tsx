import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CartScreen from './pages/CartScreen'

import Home from './pages/HomeScreen/index'
import Product from './pages/ProductScreen'
import RegisterScreen from './pages/RegisterScreen'
import SignInScreen from './pages/SignInScreen'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart/:id?" component={CartScreen} />
    <Route exact path="/products/:id" component={Product} />
    <Route exact path="/signin" component={SignInScreen} />
    <Route exact path="/register" component={RegisterScreen} />
  </Switch>
)

export default Routes
