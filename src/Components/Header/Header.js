import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const items = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/'>Item 1</Link></li>
    </>
    return (
        <div className='bg-neutral'>
            <div className="navbar bg-neutral text-neutral-content container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Google-Books</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal bg-neutral p-1">
                        {items}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;