import React from 'react'
import Image from 'next/image'
import Navbar from '../components/NavbarComponent';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-black to-zinc-900 text-white">
      <Navbar />
        {children} {/* Aquí se renderizará el contenido de la página */}
    </div>
  )
}
