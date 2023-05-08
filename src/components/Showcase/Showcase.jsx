import React from 'react'
import './showcase.css'


const Showcase = ({img, content, title}) => {
  return (
    <div className='containerDivBlack'>
        <div className='containerDivWhite'>
            <div className='showcaseContainer'>
                <div className='imgContainer'>
                    <img src={img} alt="" />
                </div>
                <div className='textContainer'>
                    <h1 className='titleShowcase'>{title}</h1>
                    <p className='contentShowcase'>{content}</p>
                    <button> Discover </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase