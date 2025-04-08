import React from 'react'
import { useState } from 'react'

import iphone from './svg/iphone.svg'
import ipad from './svg/ipad.svg'
import watch from './svg/watch.svg'
import imac from './svg/imac.svg'
import macbook from './svg/macbook.svg'
import airpods from './svg/airpods.svg'
import heart from './svg/heart.svg'

import './AppleProduct.css'

const mapaSVG = {iphone, ipad, watch, imac, macbook, airpods};

export function AppleProduct( props ) {

  const [Clicks, setClicks] = useState(0);
  const manejarClick = () => {
    setClicks(Clicks + 10);
  }

  return (
    <div onClick={manejarClick} className='apple-product'> 
      {/* Producto {props.type} */}
      <img className="product" alt="producto" src={mapaSVG[props.type]} width={100}/>
      <img className="heart" alt="heart" src={heart} style={{width:10+10+Clicks+'px'}}/>
    </div>
  )
}