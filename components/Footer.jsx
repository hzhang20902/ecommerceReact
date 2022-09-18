import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillApple, AiFillAndroid } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>2022 TUA All Rights Reserved</p>
        <p className='icons'>
            <AiFillInstagram />
            <AiOutlineTwitter />
            <AiFillAndroid />
            <AiFillApple />
        </p>

    </div>
  )
}

export default Footer