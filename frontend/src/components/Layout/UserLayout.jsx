import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

const UserLayout = () => {
    return (
        <>
            <Header />
            <div className="py-6">
                Main Content
            </div>
            <Footer />
        </>
    )
}

export default UserLayout
