import React from 'react'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-zinc-800 bg-opacity-5 backdrop-blur-sm shadow-lg">
      <h1 className="text-2xl font-bold">NFT Ticket Store</h1>
      <nav>
        <a
          href="#about"
          className="mx-4 hover:text-zinc-400 transition-colors duration-200"
        >
          About
        </a>
        <a
          href="#events"
          className="mx-4 hover:text-zinc-400 transition-colors duration-200"
        >
          Events
        </a>
        <a
          href="#contact"
          className="mx-4 hover:text-zinc-400 transition-colors duration-200"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
