'use client'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import detectEthereumProvider from '@metamask/detect-provider'
import { MainLayout } from '../layout/MainLayout'
import Link from 'next/link'

const Checkout: React.FC = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const date = searchParams.get('date')
  const location = 'Madison Square Garden, New York, NY'
  const image = searchParams.get('image')
  const time = '8:00 PM'

  const [section, setSection] = useState('General Admission')
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0.01) // Precio inicial en BTC para General Admission
  const [metamaskConnected, setMetamaskConnected] = useState(false)
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    // Actualizar el precio según la sección seleccionada
    switch (section) {
      case 'VIP':
        setPrice(0.05)
        break
      case 'Backstage':
        setPrice(0.1)
        break
      default:
        setPrice(0.01)
        break
    }
  }, [section])

  const handleConnectMetamask = async () => {
    const provider: any = await detectEthereumProvider()

    if (provider) {
      try {
        await provider.request({ method: 'eth_requestAccounts' })
        setMetamaskConnected(true)
      } catch (error) {
        console.error(error)
      }
    } else {
      alert('MetaMask is not installed. Please install it to continue.')
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    // Simular el proceso de transferencia
    setTimeout(() => {
      setLoading(false)
      setSuccessMessage(
        'The NFT will be transferred to your MetaMask account, granting you access to the concert.'
      )
    }, 3000) // Simulación de 3 segundos de espera
  }

  return (
    <MainLayout>
      {/* return to events button*/}
      <Link
        href="/concerts"
        className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 mt-10 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors duration-200"
      >
        Browse Events
      </Link>
      <section
        className="py-10 px-6 bg-zinc-800 bg-opacity-10 backdrop-blur-sm shadow-lg mt-10 rounded-lg mx-auto max-w-4xl
      "
      >
        <h3 className="text-3xl font-bold mb-4 text-center">Checkout</h3>
        <div className="flex flex-col md:flex-row bg-zinc-700 bg-opacity-40 backdrop-blur-sm shadow-lg p-6 rounded-lg mx-auto max-w-4xl">
          <div className="md:w-1/2 md:pr-4">
            <img
              src={image ?? ''}
              alt={name ?? ''}
              className="w-full h-48 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-200"
            />
            <h4 className="text-2xl font-bold mb-2">{name}</h4>
            <p className="mb-1">Date: {date}</p>
            <p className="mb-1">Time: {time}</p>
            <p className="mb-4 text-sm">Location: {location}</p>
          </div>
          <div className="md:w-1/2 md:pl-4">
            <h4 className="text-2xl font-bold mb-2">Ticket Information</h4>

            <p>
              Chain: <strong>ZetaChain</strong>
            </p>
            <p className="mt-1">
              Open date: <strong>March 1, 2024</strong>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 mt-4">
                <label htmlFor="section" className="block mb-2">
                  Select Section:
                </label>
                <select
                  id="section"
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  className="w-full p-2 rounded bg-zinc-600"
                >
                  <option value="General Admission">General Admission</option>
                  <option value="VIP">VIP</option>
                  <option value="Backstage">Backstage</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="quantity" className="block mb-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  min="1"
                  className="w-full p-2 rounded bg-zinc-600"
                />
              </div>
              <div className="mb-4">
                <p>
                  Price per ticket: <strong>{price} BTC</strong>
                </p>
                <p>
                  Total: <strong>{(price * quantity).toFixed(2)} BTC</strong>
                </p>
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  onClick={handleConnectMetamask}
                  className={`w-full p-3 rounded-full ${
                    metamaskConnected
                      ? 'bg-green-500 cursor-default'
                      : 'bg-blue-500 hover:bg-blue-600'
                  } transition-colors duration-200`}
                  disabled={metamaskConnected}
                >
                  {metamaskConnected
                    ? 'MetaMask Connected'
                    : 'Connect MetaMask'}
                </button>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors duration-200"
                disabled={loading}
              >
                Confirm Purchase
              </button>
            </form>
            {loading && (
              <div className="mt-4 text-center">
                <p className="text-lg">Verifying the transfer...</p>
                <div className="loader mt-2"></div>
              </div>
            )}
            {successMessage && (
              <div className="mt-4 text-center text-green-500">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid #ffffff;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </MainLayout>
  )
}

export default Checkout
