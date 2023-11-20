import React from 'react'
import { Link } from 'gatsby'
import './header.css'
import Logo from '../../../svg/logo.svg';

function Header() {
    return (
        <>
            <header className='py-1 px-2'>
                <nav>
                    <div className='logo'>
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className='menu'>
                        <li><Link to='/about' className='p-1'>Sobre</Link></li>
                        <li><Link to='/blog' className='p-1'>Noticias</Link></li>
                        <li><Link to='/newpost' className='p-1'>Novo post</Link></li>
                    </ul>
                </nav>
                <div className='bx'></div>
                <div>
                    <div className="cta-desktop ml-3">
                        <Link to="/login" className="btn">Login</Link>
                    </div>
                    <div className="cta-mobile mr-1">
                        <Link to="/login" className="link">Login</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header