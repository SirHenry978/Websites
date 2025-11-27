import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Events() {
  const [filter, setFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Annual Science Fair',
      date: 'March 15, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      category: 'academic',
      description: 'Students showcase innovative science projects and experiments.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Spring Musical Performance',
      date: 'March 22, 2024',
      time: '7:00 PM',
      location: 'Theater Hall',
      category: 'arts',
      description: 'An enchanting evening of music and drama by our talented students.',
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Parent-Teacher Conference',
      date: 'March 28, 2024',
      time: '2:00 PM - 8:00 PM',
      location: 'Various Classrooms',
      category: 'community',
      description: 'Meet with teachers to discuss student progress and development.',
      image: 'https://images.pexels.com/photos/8500698/pexels-photo-8500698.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'Spring Sports Tournament',
      date: 'April 5, 2024',
      time: '10:00 AM - 5:00 PM',
      location: 'Athletic Fields',
      category: 'sports',
      description: 'Inter-school sports competition featuring multiple disciplines.',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'College Fair',
      date: 'April 12, 2024',
      time: '1:00 PM - 6:00 PM',
      location: 'Gymnasium',
      category: 'academic',
      description: 'Explore college options and meet university representatives.',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'Community Service Day',
      date: 'April 20, 2024',
      time: '8:00 AM - 3:00 PM',
      location: 'Various Locations',
      category: 'community',
      description: 'Students engage in meaningful community service projects.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'academic', label: 'Academic' },
    { value: 'arts', label: 'Arts' },
    { value: 'sports', label: 'Sports' },
    { value: 'community', label: 'Community' },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter((e) => e.category === filter);

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Stay connected with our vibrant school community through exciting events and activities
            throughout the year.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat.value
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-blue-600 capitalize">
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                    {event.location}
                  </div>
                </div>
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
            View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
