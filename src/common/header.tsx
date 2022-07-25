import React, { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HEADERLINKS } from './constants';
import { Cross, Hamburger, Logo, UserProfile } from './svgIcons';

const Header: React.FC<{}> = () => {
    const [size, SetSize] = useState(0);
    const [open, setOpen] = useState(false);
    const disableScrolling = (value: boolean) => {
        //to enable
        if (value) {
            document.body.style.width = "100%";
            document.body.style.position = "fixed";
            document.body.style.overflowY = "auto";
        }
        //to disbale
        else {
            // document.getElementsByTagName('html')[0].style.overflowY = 'auto';
            document.body.style.width = "";
            document.body.style.overflowY = "";
            document.body.style.position = "";
        }
    };
    useLayoutEffect(() => {
        function updateSize() {
            SetSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);

    }, []);

    return (<div className='header-wrapper'>
        {size >= 1100 && <><div className='desktop-header'>
            <Logo color='#FFA500' />
            {HEADERLINKS.map((link, index) => (
                <NavLink
                    key={index}
                    className='header-link'
                    activeClassName='active-link'
                    to={link}>
                    {link}
                </NavLink>
            ))}
        </div>
            <NavLink to="/" className="sign-in">Sign In</NavLink></>}
        {size <= 1099 && <div className='mobile-header'>
            <div onClick={() => { setOpen(!open); disableScrolling(!open); }} className="pointer">
                {open ? <Cross height='30' width='30' /> : <Hamburger color='#FFA500' height='30' width='30' />}
            </div>
            <Logo />
            <UserProfile />
        </div>}
        {open && <div className='overlay'>
            <div className="content-wrapper">
                <><div className='menu-bar'>
                    {HEADERLINKS.map((link, index) => (
                        <NavLink
                            key={index}
                            className='header-link'
                            activeClassName='active-link'
                            to={link}>
                            {link}
                        </NavLink>
                    ))}
                </div>
                    <NavLink to="/" className="sign-in">Sign In</NavLink></>
            </div>
        </div>}
    </div>)
};

export default Header;
