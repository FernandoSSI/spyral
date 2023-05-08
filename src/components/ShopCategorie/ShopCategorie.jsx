import React from 'react'
import './shopCategorie.css'



const ShopCategorie = () => {
  return (
    <div className='shopCategorieContainer'>
        <div className='shopWoman'>
            <div className='shopLinkContent'>
                <h1 className='titleShop'>Shop Woman</h1>
                <p className='shopNow'>Shop Now</p>
            </div>
        </div>
        
        <div className='shopMan'>
            <div className='shopLinkContent'>
                <h1 className='titleShop'>Shop Men </h1>
                <p className='shopNow'>Shop Now</p>
            </div>
        </div>
    </div>
  )
}

export default ShopCategorie