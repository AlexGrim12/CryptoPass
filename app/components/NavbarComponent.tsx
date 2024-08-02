import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Cart from '../assets/cart.png'
import Logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-zinc-800 bg-opacity-5 backdrop-blur-sm shadow-lg">
      <Link href="/" className="text-2xl font-bold">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <p className="text-sm font-bold text-white cursor-pointer">
          NFT Ticket Store
        </p>
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
