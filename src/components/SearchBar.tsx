"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

const SearchBar = () => {
  const router = useRouter()
  const handleSearch = (e: React.FormEvent <HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    if(name){
       router.push(`/list?name=${name}`)
    }
  }
    
  return (
    <form className="flex item-center  justify-between gap-4 rounded-md flex-1 bg-gray-100 p-2" onSubmit={handleSearch}>
       <input name='name' className="flex-1  outline-none bg-transparent" type="text" placeholder="Search"/>
       <button className="cursor-pointer">
         <Image src='/search.png' alt="search" width={10} height={10}/>
       </button>
    </form>
  )
}

export default SearchBar