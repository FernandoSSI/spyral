import React from 'react'
import { BiDollar, BiMessageAlt, BiQuestionMark } from "react-icons/bi"
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='informations'>
                <p>project idealized by- © Fernando dos Santos -
                    <a href="https://www.linkedin.com/in/fernando-santos-5b09b0260/" target='blank'><BsLinkedin /></a>
                    <a href="https://github.com/FernandoSSI" target='blank'><BsGithub /></a>
                    <a href="https://www.instagram.com/fersantoss__/" target='blank'><BsInstagram /></a>
                </p>
            </div>

        </div>
    )
}

export default Footer