import React, {useEffect, useState, useRef} from "react";
import { Link } from "gatsby";
import "./header.css";
import Logo from "../../../svg/logo.svg";


function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header className="py-1 px-2">
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="menu">
                        <li>
                            <Link to="/about" className="p-1">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="p-1">
                                Noticias
                            </Link>
                        </li>
                        <li>
                            <Link to="/newpost" className="p-1">
                                Novo post
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="bx" onClick={toggleNav}></div>
                <div>
                    <div className="cta-desktop ml-3">
                        <Link to="/login" className="btn">
                            Login
                        </Link>
                    </div>
                    <div className="cta-mobile mr-1">
                        <Link to="/login" className="link">
                            Login
                        </Link>
                    </div>
                </div>
            </header>

            <div className="relative">
                <div className={`menu-mobile ${isNavOpen ? 'showmenu' : ''}`}>
                    <ul className="nav-mobile">
                        <li>
                            <Link to="/about" className="link-menu-mobile">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="link-menu-mobile">
                                Noticias
                            </Link>
                        </li>
                        <li>
                            <Link to="/newpost" className="link-menu-mobile">
                                Novo Post
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');

document.addEventListener('DOMContentLoaded', function () {
    link_mobile.forEach((item) => {
        item.addEventListener('click', () => {
            menu_mobile.classList.add('showmenu');
        })
    })
    
    bx.addEventListener('click', () =>{
        bx.classList.toggle('activebx');
        menu_mobile.classList.toggle('showmenu');
    })
});

export default Header;
