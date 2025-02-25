import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {

    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Blue",
            quantity: 1,
            price: 25,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Shorts",
            size: "M",
            color: "CherryRed",
            quantity: 4,
            price: 15,
            image: "https://picsum.photos/200?random=2",
        },
        {
            productId: 3,
            name: "Shorts-2",
            size: "L",
            color: "Blue",
            quantity: 2,
            price: 10,
            image: "https://picsum.photos/200?random=3",
        },
        {
            productId: 4,
            name: "Jersey",
            size: "S",
            color: "Bangladesh",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=4",
        },
    ]

    return (
        <div>
            {cartProducts.map((product, index) => (
                <div key={index} className="flex items-start justify-between py-4 border-b border-gray-300">
                    <div className="flex items-start">
                        <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded' />
                        <div className="">
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-500'>{product.size} | {product.color}</p>
                            <div className="flex items-center mt-2">
                                <button className='cursor-pointer border border-gray-400 rounded px-2 py-1 text-xl font-medium'>-</button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='cursor-pointer border border-gray-400 rounded px-2 py-1 text-xl font-medium'>+</button>
                            </div>
                        </div>
                    </div>
                    {/* price */}
                    <div>
                        <p>$ {product.price.toLocaleString()}</p>
                        <button className='cursor-pointer'>
                            <RiDeleteBin3Line className='w-4 h-4 mt-2 text-red-500' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartContents
