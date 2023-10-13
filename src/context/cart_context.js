import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  CLEAR_FILTERS,
} from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  }
  else {
    return []
  }
}
const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 1500,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  // Add to cart
  const addToCart = (id, color, amount, item) => {
    dispatch({ type: ADD_TO_CART, payload: {id, color, amount, item} })
  }
  // remove item from cart
  const removeItem = (id) => {
    dispatch ({ type: REMOVE_CART_ITEM, payload: id })
  }

  //toggle amount of items
  const toggleAmount = (id, value) => {
    dispatch ({type: TOGGLE_CART_ITEM_AMOUNT, payload: {id, value} })
  }

  //clears all item from cart
  const clearCart = () => {
    dispatch ({ type: CLEAR_CART })
  }
  
  
  useEffect( () => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
