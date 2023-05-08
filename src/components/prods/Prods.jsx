import React from 'react'
import './prods.css'

const Prods = () => {
  return (
    <div className='prodsContainer'>
        <div className='prod' id='bag'>
            <h2>BAGS</h2>
            <p>BUY NOW</p>
        </div>

        <div className='prod' id='shoes'>
            <h2>SHOES</h2>
            <p>BUY NOW</p>
        </div>

        <div className='largerProd'>
            <h2>BLAZERS</h2>
            <p>BUY NOW</p>
        </div>

    </div>
  )
}

export default Prods