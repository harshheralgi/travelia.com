import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaPlaneDeparture, FaMapMarkerAlt, FaDollarSign, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'Bali, Indonesia',
    price: 499,
    image: 'https://source.unsplash.com/600x400/?bali',
    description: 'Experience the serene beaches and vibrant culture of Bali.',
  },
  {
    name: 'Paris, France',
    price: 899,
    image: 'https://source.unsplash.com/600x400/?paris',
    description: 'The city of lights, romance, and art awaits you.',
  },
  {
    name: 'Kyoto, Japan',
    price: 699,
    image: 'https://source.unsplash.com/600x400/?kyoto',
    description: 'Discover ancient temples and stunning cherry blossoms.',
  },
  {
    name: 'Santorini, Greece',
    price: 799,
    image: 'https://source.unsplash.com/600x400/?santorini',
    description: 'Whitewashed beauty and breathtaking sunsets.',
  },
];

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-blue-600 text-white shadow-md">
        <div className="text-3xl font-bold flex items-center gap-2">
          <FaPlaneDeparture /> HolidayPlan
        </div>
        <ul className="flex gap-6 text-lg">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Destinations</li>
          <li className="hover:text-yellow-300 cursor-pointer">Packages</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="text-center p-10">
        <motion.h1 
          className="text-5xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Plan Your Dream Vacation with HolidayPlan!
        </motion.h1>
        <p className="text-lg text-gray-600 mb-6">Discover breathtaking destinations and enjoy hassle-free travel planning.</p>
        <Button className="px-6 py-3 text-lg">Explore Now</Button>
      </div>

      {/* Destinations */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold flex items-center gap-2">
                    <FaDollarSign /> {destination.price}
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Travel Tips */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">🌞 Travel Tips for a Perfect Trip</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><FaMapMarkerAlt className="inline mr-2"/> Research your destination beforehand.</li>
          <li><FaSun className="inline mr-2"/> Pack according to the weather and planned activities.</li>
          <li><FaPlaneDeparture className="inline mr-2"/> Always keep digital and physical copies of essential documents.</li>
          <li><FaDollarSign className="inline mr-2"/> Plan your budget and track expenses during the trip.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 bg-blue-600 text-white mt-6">
        &copy; 2025 HolidayPlan | Explore the World with Ease
      </footer>
    </div>
  );
}

export default App;
