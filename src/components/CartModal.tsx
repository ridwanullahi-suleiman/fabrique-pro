"use client"

import Image from 'next/image'
import React from 'react'

const CartModal = () => {
    const cartItems = (true)
    return (
        <div className='lg:z-20 w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 dlex flex-col'>
            {!cartItems ? (<div>Cart Empty</div>) : (
                <>
                <h2 className='text-xl my-2'>Shoping Cart List</h2>
            {/* // LIST */}
        <div className='flex flex-col gap-8'>
             {/* ITEM */}
        <div className='flex gap-4'>
            <Image src='https://images.pexels.com/photos/31078829/pexels-photo-31078829/free-photo-of-cozy-flat-lay-sweater-headphones-and-bag.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt=' 'width={72} height={96} className='object-cover  rounded-md'/>
            <div className='flex flex-col justify-between w-full'>
              {/* TOP */}
              <div></div>
               {/* TITTLE */}
               <div className='flex items-center justify-between gap-8'>
               <h3 className='font-semibold'>Product Name</h3>
               <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
               </div>
               {/* DESCRIPTION */}
               <div className='text-sm text-gray-500'>Available</div>
              {/* BOTTOM */}
              <div className='flex justify-between text-sm'>
                <span className='text-gray-500'>Qty.2</span>
                <span className='text-blue-500'>Remove</span>
              </div>
            </div>
        </div>
            
        {/* ITEM */}
        <div className='flex gap-4'>
            <Image src='https://images.pexels.com/photos/31078829/pexels-photo-31078829/free-photo-of-cozy-flat-lay-sweater-headphones-and-bag.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt=' 'width={72} height={96} className='object-cover  rounded-md'/>
            <div className='flex flex-col justify-between w-full'>
              {/* TOP */}
              <div></div>
               {/* TITTLE */}
               <div className='flex items-center justify-between gap-8'>
               <h3 className='font-semibold'>Product Name</h3>
               <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
               </div>
               {/* DESCRIPTION */}
               <div className='text-sm text-gray-500'>Available</div>
              {/* BOTTOM */}
              <div className='flex justify-between text-sm'>
                <span className='text-gray-500'>Qty.2</span>
                <span className='text-blue-500'>Remove</span>
              </div>
            </div>
        </div>
        </div>
        {/* // BOTTOM */}
        <div className=''>
            <div className='flex items-center justify-between font-semibold'>
                 <span className=''>Subtotal</span>
                 <span className=''>$49</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='flex justify-between text-sm'>
               <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
               <button className='rounded-md py-3 px-4 bg-black text-white '>Checkout</button>
            </div>
        </div>
        </>
            )
            }
        </div>
        
    )
}

export default CartModal