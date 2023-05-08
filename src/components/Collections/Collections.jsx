import React from 'react'
import CardCollection from './CardCollection/CardCollection'
import img1 from '../../imgs/clt1.jpg'
import img2 from '../../imgs/clt2.jpg'
import img3 from '../../imgs/clt3.jpg'
import img4 from '../../imgs/clt4.jpg'
import './Collections.css'

const Collections = () => {
  return (
    
      <div className='collectionsContainer'>
          <CardCollection img={img1 } title={"Dislocated."} link={"@"}/>
          <CardCollection img={ img2 } title={"discreet."} link={"@"}/>
          <CardCollection img={ img3 } title={"monochrome."} link={"@"}/>
          <CardCollection img={ img4 } title={"casual"} link={"@"}/>
      </div>
    
  )
}

export default Collections
