import React from 'react';
import {Link} from "react-router";

const Header = () => {
    return(
        <header className = 'bg-[#fde687] fixed w-full px-[30px] h-[85px] flex items-center'>
            <div className='flex justify-between lg:flex-row lg:items-center w-full font-bold text-5xl text-[#e00284]'>
                Laura Margita
            </div>
            <nav className='lg:flex gap-x-10 font-semibold no-underline'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/involvements">Involvements</Link>
                <Link to="/press">Press</Link>
            </nav>
        </header>
    );
};
export default Header;