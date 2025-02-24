import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header>
            <Topbar />
            <Navbar />
            {/* Cart Drawer */}
        </header>
    )
}

export default Header
