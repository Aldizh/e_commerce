import React, { useState, useEffect } from 'react'
import { CssBaseline, Typography } from '@material-ui/core'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Checkout } from './components'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a target="_blank" rel="noreferrer" href="https://aldizh.github.io/e_commerce">
        Commerce Shop&nbsp;
      </a>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Footer = () => (
  <footer style={{ padding: '10px', backgroundColor: '#f2f2f2' }}>
    <Typography variant="h6" align="center" gutterBottom>
      Thank you for visiting
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      * Sample items for sale. This is just a mock store.    </Typography>
    <Copyright />
  </footer>
)

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    const newCart = await commerce.cart.retrieve()
    setCart(newCart)
  }

  const handleAddToCart = async (lineItemId, quantity) => {
    const newCart = await commerce.cart.add(lineItemId, quantity);

    setCart(newCart);
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const newCart = await commerce.cart.update(lineItemId, { quantity });

    setCart(newCart);
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const newCart = await commerce.cart.remove(lineItemId);

    setCart(newCart);
  }

  const handleEmptyCart = async () => {
    const newCart = await commerce.cart.empty();

    setCart(newCart);
  }


  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder)
      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <BrowserRouter basename="/e_commerce" >
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                products={products}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart}
                Footer={Footer}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
                Footer={Footer}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
