import React from 'react'
import './wellcome.css'
import { GiDress, GiPoloShirt, GiRunningShoe, GiTrousers } from "react-icons/gi";
import { TbSpiral } from "react-icons/tb"
import Collections from '../Collections/Collections';

const Wellcome = () => {
    return (
        <div className='wellcome'>
            <fieldset>
                <legend>
                    <h1>Spyral</h1>
                </legend>

                <br />
            <div className='textWellcome'>
                <p>
                    welcome to spyral! Here, you'll find a carefully curated selection of clothing that's stylish, comfortable, and perfect for your busy lifestyle. We have a variety of garments for all occasions, combining comfort with style. <br /> Discovery the Collections! <br /> <br /> <br />
                    <TbSpiral/>
                </p>
            </div>
            

            </fieldset>
           
            
        </div>
    )
}

export default Wellcome