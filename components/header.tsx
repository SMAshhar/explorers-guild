'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/Rx'

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className=" bg-gray-950 text-gray-100">
            <div className="container flex items-center justify-between h-16 mx-auto w-full">
                <Link href='/'>
                    <Image src='/logo3.png' alt='logo' width={32} height={32} className='mx-4 sm:mx-8 md:mx-12 lg:mx-16' />
                </Link>
                <div className="flex items-center">
                    {/* Mobile Menu Button */}
                    <div className='w-full mx-4 '>
                        <button
                            className="md:hidden rounded-md p-2 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <RxHamburgerMenu />
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 mx-16">
                        <a href="/" className="text-gray-300 hover:text-gray-500">
                            Home
                        </a>
                        <a href="/Tours" className="text-gray-300 hover:text-gray-500">
                            Tours
                        </a>
                        <a href="#" className="text-gray-300 hover:text-gray-500">
                            Armada
                        </a>
                        
                        <a href="#" className="text-gray-300 hover:text-gray-500">
                            Contact
                        </a>
                    </nav>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden absolute top-0 left-0 h-screen w-full bg-white ${isMenuOpen ? "block" : "hidden"
                            }`}
                    >
                        <div className='flex w-full justify-end items-end'>
                            <button
                                className="p-2 ml-4 text-gray-500 rounded-md focus:outline-none focus:bg-gray-700 hover:bg-gray-700"
                                onClick={toggleMenu}
                            >
                                <RxCross2 />
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-4 py-8 px-4">
                            <a href="/" className="text-gray-500 hover:text-gray-700">
                                Home
                            </a>
                            <a href="/Tours" className="text-gray-500 hover:text-gray-700">
                                Tours
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                Armada
                            </a>
                           
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                Contact
                            </a>

                        </nav>
                        {/* Insert logo or other content here */}
                    </div></div>
                <div className="flex items-end justify-end w-full mx-4 sm:mx-6 md:mx-12 lg:mx-16 ">
                    <button
                        className="p-2 ml-4 text-gray-100 rounded-md focus:outline-none focus:bg-gray-700 hover:bg-gray-700"
                        onClick={toggleSearch}
                    >
                        <FaSearch />
                    </button>
                </div>

                {isSearchOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 w-full">
                        <div className="w-full max-w-md p-6 bg-blue-200/[0.3] rounded-md shadow-md">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-gray-800">Search</h2>
                                <button
                                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                    onClick={toggleSearch}
                                >
                                    <RxCross2 />
                                </button>
                            </div>
                            <form className="flex flex-col space-y-4">
                                <input
                                    className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
                                    type="text"
                                    placeholder="Search..."
                                />
                                <button
                                    className="px-4 py-2 bg-blue-900 text-white rounded-sm hover:bg-blue-950 focus:outline-none focus:bg-blue-800"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header
