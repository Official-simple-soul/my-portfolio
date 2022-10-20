import { useState } from "react"

export const Nav = () => {
    const NavLinks = [
                        {name: 'HOME', link: '/'},
                        {name: 'ABOUT', link: '/'},
                        {name: 'SERVICE', link: '/'},
                        {name: 'WORKS', link: '/'},
                        {name: 'BLOG', link: '/'},
                        {name: 'RESUME', link: '/'},
                        {name: 'CONTACT', link: '/'}
                    ]

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };
    return (
            <nav className="flex justify-between items-center text-white relative container mx-auto">
                <div className="nav-logo flex justify-between items-center">
                    <img src='/img/logo.jpg' className="w-14 rounded-full" alt='logo'/>
                    
                </div>
                <div>
                    <ul className={`md:flex md:items-center absolute bg-black left-0 right-0 
                    text-center space-y-16 z-10 transition-all duration-300 ease-in 
                    md:space-x-10 md:space-y-0 md:static 
                    ${openMenu?'top-20':'top-[-600px]'}`}>
                        {NavLinks.map((item) => (
                            <li key={item.name} className="">
                                <a href={item.link} className="navhov">{item.name}</a>
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


