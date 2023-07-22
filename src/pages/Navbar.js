import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let cart_store = useSelector(store=>store.cartStore)
    let len= cart_store.cart_items.length
  return (
    <>
    <div style = {{display: "flex", justifyContent: "space-between", padding: "20px", position: "fixed", top: 0, zIndex: 5, width: "100%"}}>
    <Link to ='/'>Home</Link>
    <Link to = '/cart'>Cart
    <span>{len}</span>
    </Link>
    </div>
      </>
  )
}

export default Navbar