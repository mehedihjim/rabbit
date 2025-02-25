import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
    return (
        <div className='bg-rabbit-red text-white'>
            <div className="container mx-auto flex justify-between py-3 px-4">
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className='hover:text-gray-300'>
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <RiTwitterXLine className="h-4 w-4" />
                    </a>
                </div>
                <div className="text-center flex-grow">
                    <span>We Ship Worldwide - Fast and reliable shipping!</span>
                </div>
                <div className="hidden md:block">
                    <a href="tel:+1234567890" className="text-sm hover:text-gray-300">+1 (234) 567-890</a>
                </div>
            </div>
        </div>
    )
}

export default Topbar
