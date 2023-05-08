
import { useEffect, useState } from 'react'
import './navbar.css'
import { BiHeart, BiSearch, BiUser, BiMenu } from "react-icons/bi"



const Navbar = () => {
    const [navClass, setNavClass] = useState("inactiveNavbarContainer")
    const [menu, setMenu] = useState('categoriesHidden ')

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 200) {
            setNavClass('activeNavbarContainer')
        } else {
            setNavClass("inactiveNavbarContainer")
        }
    }

    useEffect(()=>{
        window.onscroll = () => handleScroll()
    })


    const handleMenu = ()=>{
        if(menu === 'categoriesHidden ') {
            setMenu('categoriesShow ')
        } else{
            setMenu('categoriesHidden ')
        }
    }


    return (
        <div className='headerDiv'>
            <header className={navClass}>
                <div className='linksWords'>
                    <h1 className='title'><a href="#">SPYRAL</a></h1>
                    <div className='categories'>
                        <ul className='categoriesList'>
                            <li><a href="">WOMAN</a></li>
                            <li><a href="">MAN</a></li>
                            <li><a href="">KIDS</a></li>
                            <li><a href="">SHOES</a></li>
                            <li><a href="">GIFTS</a></li>
                            <li><a href="">ABOUT SPYRAL</a></li>
                        </ul>
                        <span className='menu' onClick={handleMenu}> <BiMenu/> </span>
                    </div>
                </div>
                <div className='linksIcons'>
                    <ul className='iconsList'>
                        <li> <a href=""><BiSearch /></a> </li>
                        <li> <a href=""><BiUser /></a> </li>
                        <li> <a href=""><BiHeart /></a> </li>
                    </ul>
                </div>
            </header>
            <ul className={menu}>
                <li><a href="">WOMAN</a></li>
                <li><a href="">MAN</a></li>
                <li><a href="">KIDS</a></li>
                <li><a href="">SHOES</a></li>
                <li><a href="">GIFTS</a></li>
                <li><a href="">ABOUT SPYRAL</a></li>
             </ul>
        </div>
    )
}

export default Navbar