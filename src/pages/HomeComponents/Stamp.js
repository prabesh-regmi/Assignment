import React from 'react';
import '../Home.css';
import * as AiIcons from 'react-icons/ai';

export default function Stamp(){
    return (
        <>
        <div className='loyalty-type'>
              <div className='loyalty-head'>
                <p>Loyalty Card</p>
                <button className='button'>Add New</button> 
              </div>
              <div className='loyalty-box'>
                <img src={require('../../img/approved.jpg')} alt='Img cannot load' />
                <AiIcons.AiFillDelete style={{ fontSize: '30px' }} />
              </div>

            </div>
        </>
    )
}