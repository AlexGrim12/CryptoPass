import React from 'react'
import { MainLayout } from './layout/MainLayout'

const Home: React.FC = () => {
  const events = [
    { name: 'Bad Bunny Concert', date: 'August 20, 2024' },
    { name: 'Lollapalooza Festival', date: 'September 15, 2024' },
    { name: 'EDC Las Vegas', date: 'October 10, 2024' },
    { name: 'Ultra Music Festival', date: 'November 5, 2024' },
    { name: 'Coachella Music Festival', date: 'December 1, 2024' },
    { name: 'Tomorrowland Festival', date: 'January 10, 2025' },
  ]

  return (
    <MainLayout>
      <main className="flex flex-col items-center justify-center text-center py-20">
        <h2 className="text-5xl font-bold mb-6">
          Buy and Sell Tickets as NFTs
        </h2>
        <p className="text-xl mb-12 max-w-xl mx-auto">
          Secure, unique, and tradable tickets for your favorite events
        </p>
        <a
          href="#events"
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors duration-200"
        >
          Browse Events
        </a>
      </main>
      <section
        id="about"
        className="py-20 px-6 bg-zinc-800 bg-opacity-10 backdrop-blur-sm shadow-lg"
      >
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-lg max-w-3xl mx-auto">
          We provide a platform to buy and sell tickets as NFTs, ensuring
          authenticity and security for every ticket purchased.
        </p>
      </section>
      <section id="events" className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.name}
              className="bg-zinc-700 bg-opacity-40 backdrop-blur-sm shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h4 className="text-2xl font-bold mb-2">{event.name}</h4>
              <p className="mb-4">Date: {event.date}</p>
              <a href="#" className="text-blue-400 hover:underline">
                Buy Tickets
              </a>
            </div>
          ))}
        </div>
        {/* boton para ver mas */}
        <a className="block mt-8 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-colors duration-200 text-center cursor-pointer">
          View More Events
        </a>
      </section>
      <section
        id="contact"
        className="py-20 px-6 bg-zinc-800 bg-opacity-10 backdrop-blur-sm shadow-lg"
      >
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="text-lg mb-4 max-w-3xl mx-auto">
          For inquiries, please email us at{' '}
          <a
            href="mailto:contact@nftticketstore.com"
            className="text-blue-400 hover:underline"
          >
            contact@nftticketstore.com
          </a>
        </p>
      </section>
      <footer className="py-6 text-center bg-black bg-opacity-90 backdrop-blur-sm shadow-lg">
        <p>&copy; 2024 NFT Ticket Store. All rights reserved.</p>
      </footer>
    </MainLayout>
  )
}

export default Home
