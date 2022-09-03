import React from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi';
import {AiOutlineSearch} from 'react-icons/ai'
import './Header.css'
import Model from '../../Model/Model';
import { useState } from 'react';
import Signup from '../../Signup/Signup';
const Header = ({cartItems}) => {
  const [open,setOpen]=useState(false)
  return (
    <>
   <header className='header'>
    <div className='header-logo'>
<div className='header-shopping-logo'>
<h1>
  <Link to='/' className='logo'>Shopping Card</Link>
</h1></div>
<div className='header-input'>
<input type='text' placeholder='Search for products, brands and more'/><AiOutlineSearch className='header-icon'/>
</div>
    </div>
    <div className='header-links'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
    
          <Link to='/signup' onClick={()=>setOpen(!open)}>Signup</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/cart' className='cart-box'>
            <HiShoppingCart/>Cart

 <span className='cart-length'>{cartItems?.length>0?cartItems?.length:"0" } </span>
 

           
          </Link>
          
        </li>
      </ul>
    </div>
   </header>
   {
    open && <Model><Signup/></Model>
   }
   </>
  )
}

export default Header