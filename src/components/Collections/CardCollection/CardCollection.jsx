import React from 'react'
import './cardCollection.css'

const CardCollection = ({img, title, linkContent, link}) => {
  return (
    <div className='cardClt'>
        <div className='cardImg'>
            <img src={img} alt="" />
        </div>
        <div className='cardText'>
            <h1>{title}</h1>
            <a href={link}>discover the collection</a>
        </div>
    </div>
  )
}

export default CardCollection