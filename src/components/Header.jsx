import React, { useState, useRef, useEffect } from 'react';
import {Link} from "react-router";

const Header = () => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    let closeTimeout = useRef(null);

    // Handle clicking outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProjectsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (closeTimeout.current) clearTimeout(closeTimeout.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setIsProjectsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setIsProjectsOpen(false);
        }, 300); // 300ms delay before closing
    };

    return(
        <header className='bg-[#ffde21] fixed w-full px-[30px] h-[85px] flex items-center z-50'>
            <div className='flex justify-between lg:flex-row lg:items-center w-full font-bold text-5xl text-[#e00284] text-shadow-2xs'>
                LAURA MARGITA
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='lg:hidden text-[#e00284] font-semibold text-2xl'
            >
                ☰
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex gap-x-10 font-semibold no-underline'>
                <Link to="/" className='hover:opacity-70 transition-opacity'>Home</Link>
                <Link to="/about" className='hover:opacity-70 transition-opacity'>About</Link>
                <Link to="/contact" className='hover:opacity-70 transition-opacity'>Contact</Link>


                <div
                    ref={dropdownRef}
                    className='relative'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className='hover:opacity-70 transition-opacity cursor-pointer'
                    >
                        <Link to="/projects" className='hover:opacity-70 transition-opacity'>Projects</Link>
                    </button>
                    {isProjectsOpen && (
                        <div
                            className='absolute top-full left-0 mt-2 bg-[#ffde21] rounded-lg shadow-lg p-3 flex flex-col gap-2 min-w-[180px] border-2 border-[#e00284]'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                to="/performanceart"
                                className='hover:opacity-70 transition-opacity whitespace-nowrap'
                                onClick={() => setIsProjectsOpen(false)}
                            >
                                Performance Art
                            </Link>
                            <Link
                                to="/visualart"
                                className='hover:opacity-70 transition-opacity whitespace-nowrap'
                                onClick={() => setIsProjectsOpen(false)}
                            >
                                Visual Art
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/involvements" className='hover:opacity-70 transition-opacity'>Involvements</Link>
                <Link to="/press" className='hover:opacity-70 transition-opacity'>Press</Link>
            </nav>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className='lg:hidden absolute top-[85px] left-0 right-0 bg-[#ffde21] shadow-lg p-5'>
                    <nav className='flex flex-col gap-4 font-semibold'>
                        <Link
                            to="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-[#e00284] hover:opacity-70 transition-opacity'
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-[#e00284] hover:opacity-70 transition-opacity'
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-[#e00284] hover:opacity-70 transition-opacity'
                        >
                            Contact
                        </Link>
                        <Link
                            to="/projects"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-[#e00284] hover:opacity-70 transition-opacity'
                        >
                            Projects
                        </Link>
                        <div className='pl-4 flex flex-col gap-2'>
                            <Link
                                to="/performanceart"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='text-[#e00284] hover:opacity-70 transition-opacity'
                            >
                                - Performance Art
                            </Link>
                            <Link
                                to="/visualart"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='text-[#e00284] hover:opacity-70 transition-opacity'
                            >
                                - Visual Art
                            </Link>
                        </div>
                        <Link
                            to="/involvements"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-[#e00284] hover:opacity-70 transition-opacity'
                        >
                            Involvements
                        </Link>
                        <Link
                            to="/press"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='text-[#e00284] hover:opacity-70 transition-opacity'
                        >
                            Press
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};
export default Header;