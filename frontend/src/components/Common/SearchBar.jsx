import React, { useState } from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleSearchToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            {isOpen ?
                (<form></form>

                ) : (

                    <button onClick={handleSearchToggle}>
                        <HiMagnifyingGlass className='w-6 h-6' />
                    </button>)}
        </div>
    )
}

export default SearchBar
