import React from 'react'

const ConcertTicketsPage: React.FC = () => {
  return (
    <div>
      <h1>Concert Tickets</h1>
      <p>Welcome to our concert tickets page for popular artist!</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Concert Ticket 1</h2>
          <p>Details about concert ticket 1</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Concert Ticket 2</h2>
          <p>Details about concert ticket 2</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Concert Ticket 3</h2>
          <p>Details about concert ticket 3</p>
        </div>
      </div>
    </div>
  )
}

export default ConcertTicketsPage
