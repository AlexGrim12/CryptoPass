import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Cart from '../assets/cart.png'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-zinc-800 bg-opacity-5 backdrop-blur-sm shadow-lg">
      <Link href="/" className="text-2xl font-bold">
        NFT Ticket Store
      </Link>
      <nav>
        {/* events, checkout */}
        <div className="mr-4 hover:underline">
          <Link href="/concerts" className="mr-4 hover:underline">
            Events
          </Link>
          {/* <Link href="/checkout" className="hover:underline">
            <Image src={Cart} alt="Cart" width={24} height={24} />
          </Link> */}
        </div>
      </nav>
    </header>
  )
}
