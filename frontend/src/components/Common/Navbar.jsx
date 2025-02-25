import React, { useState } from 'react'
import { Link, NavLink } from "react-router";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false)
    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <>
            <nav className='container mx-auto py-4 px-6 flex justify-between items-center'>
                <div className="">
                    <Link to='/' className='text-2xl font-medium'>Rabbit</Link>
                </div>
                <div className="hidden md:flex space-x-6 text-sm font-medium uppercase">
                    <NavLink to="#" className='text-gray-700 hover:text-black '>
                        Men
                    </NavLink>
                    <NavLink to="#" className='text-gray-700 hover:text-black '>
                        Women
                    </NavLink>
                    <NavLink to="#" className='text-gray-700 hover:text-black '>
                        Top Wear
                    </NavLink>
                    <NavLink to="#" className='text-gray-700 hover:text-black '>
                        Bottom Wear
                    </NavLink>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to='/profile' className='hover:text-gray-300'>
                        <HiOutlineUser className='h-6 w-6 text-gray-700' />
                    </Link>
                    <button onClick={toggleCartDrawer} className='cursor-pointer relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                        <span className='px-2 py-0.5 absolute -top-1 bg-rabbit-red text-white text-xs rounded-full'>4</span>
                    </button>
                    <SearchBar />

                    {/* Hidden Mobile Menu */}
                    <button className='md:hidden'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                    </button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    )
}

export default Navbar
