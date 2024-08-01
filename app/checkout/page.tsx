// ./app/checkout/page.tsx
'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { MainLayout } from '../layout/MainLayout'

const Checkout: React.FC = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const date = searchParams.get('date')
  const location = searchParams.get('location')
  const image = searchParams.get('image')

  return (
    <MainLayout>
      <section className="py-10 px-6">
        <h3 className="text-3xl font-bold mb-4 text-center">Checkout</h3>
        <div className="bg-zinc-700 bg-opacity-40 backdrop-blur-sm shadow-lg p-6 rounded-lg mx-auto max-w-lg">
          <img
            src={image ?? ''}
            alt={name ?? ''}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h4 className="text-2xl font-bold mb-2">{name}</h4>
          <p className="mb-1">Date: {date}</p>
          <p className="mb-4 text-sm">Location: {location}</p>
          <form>
            {/* Aquí puedes agregar los campos de formulario necesarios para el checkout */}
            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors duration-200"
            >
              Confirm Purchase
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  )
}

export default Checkout
