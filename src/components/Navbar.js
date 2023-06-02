import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import hamburger from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='logo'>
                        <Link className="navbar-brand logo" to="/">Shows Finder</Link>
                    </div>

                    {/* mobile menu icon */}
                    {/* <div className='menu-icon' onClick={handleClick}>
                        {click ? (
                            <img src={close} alt='close icon' />
                        ) : (
                            <img src={hamburger} alt='hamburger icon' />
                        )}
                    </div> */}

                    <ul className={click ? 'navbar-nav nav-menu active' : 'navbar-nav nav-menu'}>

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar