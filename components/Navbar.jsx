import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
        <p className='logo'>
            <Link href='/'>
              HOME
            </Link>
            <p>|</p>
            <Link href='https://minecraft3clone-g8o6.vercel.app/'>
              Minecraft React/3js Clone (Desktop Only)
            </Link>
            <p>|</p>
            <Link href='https://effervescent-yeot-a07484.netlify.app/'>
              Bottle Express (Video Chat app)
            </Link>
            <p>|</p>
            <Link href='https://account.venmo.com/u/figgsboson'>
              SUPPORT MY WORK
            </Link>
        </p>

        <button type='button'
        className='cart-icon' 
        onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
    </div>
  )
}

export default Navbar