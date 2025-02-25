import React from 'react'
import { Link } from 'react-router';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { FiPhoneCall } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className='border-t border-gray-200 py-12'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
                {/* Newsletter grid */}
                <div className="">
                    <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
                    <p className='text-gray-500 mb-4'>Be the first one to hear about new products, exclusive events, and online offers.</p>
                    <p className='font-medium text-sm text-gray-600 mb-6'>Sign up and get 10% off your first order</p>
                    <form className='flex'>
                        <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none forcus:ring-2 focus:ring-gray-500 transition-all' />
                        <button type='submit' className='cursor-pointer bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-900 transition-all'>Subscribe</button>
                    </form>
                </div>
                {/* Shop grid */}
                <div className="">
                    <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link to='/' className='hover:text-gray-500 transition-colors'>Men's top wear</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-500 transition-colors'>Women's top wear</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-500 transition-colors'>Men's bottom wear</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-500 transition-colors'>Women's bottom wear</Link>
                        </li>
                    </ul>
                </div>
                {/* Support grid */}
                <div className="">
                    <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link to='/' className='hover:text-gray-500 transition-colors'>Contact Us</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-500 transition-colors'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-500 transition-colors'>FAQs</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-gray-500 transition-colors'>Features</Link>
                        </li>
                    </ul>
                </div>
                {/* Follow up grid */}
                <div className="">
                    <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
                    <div className="flex items-center space-x-4 mb-6">
                        <a href="faceboo.com" target='_blank' rel="noopener noreferrer" className='hover:text-gray-300'>
                            <TbBrandMeta className='w-5 h-5' />
                        </a>
                        <a href="faceboo.com" target='_blank' rel="noopener noreferrer" className='hover:text-gray-300'>
                            <IoLogoInstagram className='w-5 h-5' />
                        </a>
                        <a href="faceboo.com" target='_blank' rel="noopener noreferrer" className='hover:text-gray-300'>
                            <RiTwitterXLine className='w-4 h-4' />
                        </a>
                    </div>
                    <p className='text-gray-500 '>Call Us</p>
                    <p className=''><FiPhoneCall className='inline-block mr-2' />0123-456-789</p>
                </div>
            </div>
            {/* Copyright Section */}
            <div className="container mx-auto mt-12 lg:px-0 border-t border-gray-300 pt-6 ">
                <p className='text-gray-500 text-sm tracking-tighter text-center'>©2025, <a href="https://github.com/mehedihjim">MH Jim</a>. All Rights Reserved. </p>
            </div>
        </footer >
    )
}

export default Footer
