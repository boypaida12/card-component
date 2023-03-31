import React from 'react'
import Cart from '../images/icon-cart.svg'

const Button = () => {
  return (
    <div>
        <button>
            <img src={Cart} className="cart" alt="" />
            Add to Cart
        </button>
    </div>
  )
}

export default Button