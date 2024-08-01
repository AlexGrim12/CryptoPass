// pages/events.tsx
import React from 'react'
import { MainLayout } from '../layout/MainLayout'
import Link from 'next/link'

const Events: React.FC = () => {
  const events = [
    {
      name: 'Bad Bunny Concert',
      date: 'August 20, 2024',
      location: 'Miami, FL',
      image:
        'https://www.billboard.com/wp-content/uploads/2024/02/BAD-BUNNY-Most-Wanted-Tour-billboard-espanol-1548.jpg',
    },
    {
      name: 'Lollapalooza Festival',
      date: 'September 15, 2024',
      location: 'Chicago, IL',
      image: 'https://media.timeout.com/images/106032486/750/422/image.jpg',
    },
    {
      name: 'EDC Las Vegas',
      date: 'October 10, 2024',
      location: 'Las Vegas, NV',
      image:
        'https://www.billboard.com/wp-content/uploads/2024/03/EDC-Las-Vegas-Jordan-Sabillo-for-Insomniac-Events-2-billboard-1548.jpg?w=942&h=623&crop=1',
    },
    {
      name: 'Ultra Music Festival',
      date: 'November 5, 2024',
      location: 'Miami, FL',
      image:
        'https://umfworldwide.com/wp-content/uploads/2019/04/miami-news-wrap-2019-photo-5.jpg',
    },
    {
      name: 'Coachella Music Festival',
      date: 'December 1, 2024',
      location: 'Indio, CA',
      image:
        'https://static01.nyt.com/images/2020/03/10/arts/10virus-coachella1/10virus-coachella1-videoSixteenByNineJumbo1600.jpg?year=2020&h=900&w=1600&s=bfbfa36404d92a81765b6d391b5cda1dfb3be325a81eec4aa26ced3592c047d4&k=ZQJBKqZ0VN&tw=1',
    },
    {
      name: 'Tomorrowland Festival',
      date: 'January 10, 2025',
      location: 'Boom, Belgium',
      image:
        'https://uploads.tomorrowland.com/containers/assets/welcome/memory-lane/2023-1.jpg/a9f7c4eed642a86d325ba57d93eadec9/2023-1.jpg',
    },
    {
      name: 'Danny Ocean Concert',
      date: 'February 20, 2025',
      location: 'Los Angeles, CA',
      image:
        'https://elcapitalino.mx/wp-content/uploads/2024/06/DannyOcean-07junio24-OCESA-FotoLuluUrdapilleta-017-1080x720.jpg',
    },
    {
      name: 'The Weeknd Concert',
      date: 'March 15, 2025',
      location: 'New York, NY',
      image:
        'https://media.pitchfork.com/photos/64e7b6737387333d7f668de1/master/pass/The-Weeknd.jpg',
    },
    {
      name: 'Kanye West Concert',
      date: 'April 10, 2025',
      location: 'Chicago, IL',
      image:
        'https://www.billboard.com/wp-content/uploads/media/Kanye-West-Pablo-Tour-2016-billboard-1548.jpg',
    },

    // Agrega más eventos si es necesario
  ]

  return (
    <MainLayout>
      <section className="py-10 px-6">
        <h3 className="text-3xl font-bold mb-4 text-center">Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.name}
              className="bg-zinc-700 bg-opacity-40 backdrop-blur-sm shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">{event.name}</h4>
              <p className="mb-1">Date: {event.date}</p>
              <p className="mb-4 text-sm">Location: {event.location}</p>
              <Link
                className="text-blue-400 hover:underline"
                href={{
                  pathname: '/checkout',
                  query: {
                    name: event.name,
                    date: event.date,
                    location: event.location,
                    image: event.image,
                  },
                }}
              >
                Buy Tickets
              </Link>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}

export default Events
