"use client";


import { Add, Search } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const TopBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input 
        type="text"
        className='search-bar'
        placeholder="Search posts, people, ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />
         <Search
         className="search-icon"
          />
      </div>
        <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
        >
          <Add /><p>Create A Post</p>
        </button>
        <div className="flex gap-4 md:hidden">
          <Link href="/">
            <Image 
              src="/assets/phucmai.png"
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full" />
          </Link>
        </div>
    </div>
  )
}

export default TopBar