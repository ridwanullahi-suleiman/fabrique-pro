import Link from 'next/link'
import React from 'react'
import Menu from '@/components/Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import Navicons from './Navicons'


const Navbar = () => {
    return (
        <div className='h-20 mt-2 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative '>
            {/* MOBILE */}
            <div className=' h-full flex items-center justify-between md:hidden'>
                <Link href="/">
                    <div className='text-2xl tracking-wide'>LAMA</div>
                </Link>
                <Menu />
            </div>
            {/* DESKTOP */}
            <div className='hidden md:flex justify-between gap-8 items-center'>
                {/* LEFT */}
                <div className='w-1/3  xl:w-1/2 flex items-center gap-12'>
                    <Link href='/' className='flex items-center gap-3'>
                        <Image src='/logo.png' alt='' width={24} height={24}/>
                        <div className='text-2xl tracking-wide'>LAMA</div>
                    </Link>
                    <div className='hidden lg:flex xl:flex gap-4'>
                       <Link href='/'>Homepages</Link>
                       <Link href='/'>Shops</Link>
                       <Link href='/'>Deals</Link>
                       <Link href='/'>About</Link>
                       <Link href='/'>Contact</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                 <SearchBar/>
                 <Navicons/>
                </div>
            </div>
        </div>
    )
}

export default Navbar