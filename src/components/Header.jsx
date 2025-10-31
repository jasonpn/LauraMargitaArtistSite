import React from 'react';
import {Link} from "react-router";

const Header = () => {
    return(
        <header className = 'bg-[#fde687] fixed w-full px-[30px] h-[85px] flex items-center'>
            <div className='flex justify-between lg:flex-row lg:items-center w-full font-bold text-5xl text-[#e00284] text-shadow-2xs'>
                LAURA MARGITA
            </div>
            <nav className='lg:flex gap-x-10 font-semibold no-underline'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <div className='relative group whitespace-nowrap'>
                    <Link to="javascript:void(0);">Projects</Link>
                    <div className= 'absolute hidden group-hover:block bg-amber-200 text-[#e00284]
                    top-full w-fit whitespace-nowrap pl-1 pr-1 pt-1 pb-1'>
                        <Link to="/performanceart">Performance Art</Link>
                        <br/>
                        <Link to="/visualart">Visual Art</Link>
                    </div>
                </div>

                <Link to="/involvements">Involvements</Link>
                <Link to="/press">Press</Link>
            </nav>
        </header>
    );
};
export default Header;