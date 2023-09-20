import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({item}) => {
  const {AddToCart} = useCartContext
  const {id, stock, colors} = item
  const [mainColor, setMainColor] = useState(colors[0])
  const [orderQty, setOrderQty] = useState(1)

  const add = () => {
    setOrderQty((oldQty) => {
      let newQty = oldQty + 1
      if (newQty > stock) {
        newQty = stock
      }
      return newQty
    })
  }
  const reduce = () => {
    setOrderQty((oldQty) => {
    let newQty = oldQty - 1
    if (newQty < 1) {
      newQty = 1
    }
    return newQty
  })
}
  return(
    <Wrapper>
      <div className='colors'>
        <span>colors: </span>
        <div>
          {colors.map((color, index) => {
            return( 
              <button 
                key={index} 
                style={{background: color}} 
                className={`${mainColor === color?'color-btn active':'color-btn'}`}
                onClick={()=> setMainColor(color)}> 
                {mainColor === color ? <FaCheck /> : null }
              </button>
            )
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons orderQty={orderQty} add={add} reduce={reduce} />
        <Link to='/cart' className='btn' 
        onClick={() => (id, mainColor, orderQty, item) }>
          Buy Now
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
