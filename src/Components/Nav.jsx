import { Outlet, Link } from 'react-router-dom'
import { useState } from "react";
import logo from '../img/logo.jpg';

export const Nav = () => {
    const NavLinks = [
                        {name: 'HOME', link: '/'},
                        {name: 'ABOUT', link: '#about'},
                        {name: 'SKILL', link: '#skill'},
                        {name: 'WORKS', link: '#work'},
                        {name: 'BLOG', link: '#blog'},
                        {name: 'RESUME', link: '#resume'},
                        {name: 'CONTACT', link: '#contact'}
                    ]

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };
    return (
            <nav className="flex justify-between items-center text-white relative container mx-auto">
                <div className="nav-logo flex justify-between items-center">
                    <img src={logo} className="w-14 rounded-full" alt='logo'/>
                    
                </div>
                <div>
                    <ul className={`md:bg-none py-4 z-40 md:flex md:items-center absolute top-20 
                    text-center space-y-14 z-10 transition-all duration-300 ease-in 
                    lg:space-x-6 md:space-y-0 md:static 
                    ${openMenu?'left-0 right-0 navbg':'left-[-600px]'}`}>
                        {NavLinks.map((item) => (
                            <li key={item.name} className="">
                                <a class="mx-3 navhov" href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center aligne-center hidden md:block">
                    <button className="bg-transparent border-2 border-white rounded p-2">HIRE ME</button>
                </div>
                <div onClick={()=>toggleMenu()} className="text-3xl md:hidden">
                    <i className={openMenu?"fa-solid fa-xmark": "fa-solid fa-bars"}></i>
                </div>
            </nav>
    )
}


