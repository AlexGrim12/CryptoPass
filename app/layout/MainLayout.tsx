import React from 'react'
import Image from 'next/image'
import Navbar from '../components/NavbarComponent'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black to-zinc-900 text-white">
      <Navbar />
      {children} {/* Aquí se renderizará el contenido de la página */}
      <footer
        className="py-6 text-center bg-black bg-opacity-90 backdrop-blur-sm shadow-lg 
      bottom-0 w-full
      "
      >
        <p>&copy; 2024 NFT Ticket Store. All rights reserved.</p>
      </footer>
    </div>
  )
}
