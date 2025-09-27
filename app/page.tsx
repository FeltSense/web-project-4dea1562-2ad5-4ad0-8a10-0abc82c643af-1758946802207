'use client'

import React, { useState, useEffect } from 'react'
import { Coffee, MapPin, Clock, Star, Wifi, Leaf, Users, Instagram, Facebook, Twitter, Phone, Mail, ChevronDown, Menu, X } from 'lucide-react'

interface MenuItemProps {
  name: string
  description: string
  price: string
  category: string
}

interface TestimonialProps {
  name: string
  role: string
  content: string
  rating: number
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-amber-100">
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-playfair text-xl font-semibold text-amber-900">{name}</h3>
      <span className="text-amber-700 font-semibold text-lg">{price}</span>
    </div>
    <p className="text-amber-700 text-sm leading-relaxed">{description}</p>
  </div>
)

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, rating }) => (
  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-sm">
    <div className="flex mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
    <p className="text-amber-800 mb-6 italic leading-relaxed">"{content}"</p>
    <div>
      <p className="font-semibold text-amber-900">{name}</p>
      <p className="text-amber-600 text-sm">{role}</p>
    </div>
  </div>
)

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('coffee')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    '[coffee-shop-interior-warm-lighting]',
    '[barista-pouring-latte-art]',
    '[coffee-beans-roasting-process]'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const menuItems: MenuItemProps[] = [
    {
      name: "Signature Roast & Ritual Blend",
      description: "Our house blend featuring single-origin beans from Ethiopia and Colombia, roasted to perfection with notes of chocolate and citrus",
      price: "$4.50",
      category: "coffee"
    },
    {
      name: "Ceremonial Pour Over",
      description: "Hand-crafted pour over using our rotating selection of single-origin beans, prepared with precision and care",
      price: "$6.00",
      category: "coffee"
    },
    {
      name: "Golden Turmeric Latte",
      description: "Warming blend of turmeric, ginger, and cinnamon with your choice of oat, almond, or coconut milk",
      price: "$5.25",
      category: "coffee"
    },
    {
      name: "Artisan Croissant",
      description: "Buttery, flaky croissant baked fresh daily by our local partner bakery, perfect with your morning coffee",
      price: "$3.75",
      category: "food"
    },
    {
      name: "Avocado Toast Ritual",
      description: "Smashed avocado on sourdough with hemp seeds, cherry tomatoes, and a drizzle of olive oil",
      price: "$8.50",
      category: "food"
    },
    {
      name: "Seasonal Acai Bowl",
      description: "Fresh acai topped with granola, seasonal berries, coconut flakes, and local honey",
      price: "$9.25",
      category: "food"
    }
  ]

  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Chen",
      role: "Remote Designer",
      content: "Roast & Ritual has become my daily sanctuary. The WiFi is fast, the atmosphere is perfect for focus, and their Ethiopian single-origin is absolutely divine.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Local Business Owner",
      content: "I've tried every coffee shop in the area, but nothing compares to the quality and community feel at Roast & Ritual. The baristas know their craft.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Graduate Student",
      content: "This place is my study haven. Great coffee, comfortable seating, and the staff always makes me feel welcome. Plus, their sustainability practices are impressive.",
      rating: 5
    }
  ]

  const filteredMenuItems = menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-amber-700" />
              <span className="font-playfair text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                Roast & Ritual
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-amber-700 hover:text-amber-900 font-medium transition-colors">Home</a>
              <a href="#about" className="text-amber-700 hover:text-amber-900 font-medium transition-colors">About</a>
              <a href="#menu" className="text-amber-700 hover:text-amber-900 font-medium transition-colors">Menu</a>
              <a href="#location" className="text-amber-700 hover:text-amber-900 font-medium transition-colors">Visit</a>
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Order Online
              </button>
            </div>

            <button 
              className="md:hidden text-amber-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-amber-700 hover:text-amber-900 font-medium">Home</a>
              <a href="#about" className="block text-amber-700 hover:text-amber-900 font-medium">About</a>
              <a href="#menu" className="block text-amber-700 hover:text-amber-900 font-medium">Menu</a>
              <a href="#location" className="block text-amber-700 hover:text-amber-900 font-medium">Visit</a>
              <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full font-semibold">
                Order Online
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/30 z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D97706" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] z-0"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
              Where Every Cup
              <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Tells a Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of artisan coffee craftsmanship and community warmth at Roast & Ritual, where every bean is roasted with passion and every moment is savored.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Our Menu
              </button>
              <button className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300">
                Find Us Today
              </button>
            </div>
          </div>
        </div>

        {/* Floating Coffee Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Coffee className="w-12 h-12 text-amber-600/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Coffee className="w-8 h-8 text-orange-600/30" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Coffee Journey
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Founded in 2019 by coffee enthusiasts Maria Santos and David Kim, Roast & Ritual began as a dream to create a space where exceptional coffee meets genuine community connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-playfair text-3xl font-semibold text-amber-900">
                Crafted with Purpose
              </h3>
              <p className="text-amber-700 leading-relaxed">
                Every morning, our master roasters carefully select and roast small batches of single-origin beans from sustainable farms across Ethiopia, Colombia, and Guatemala. We believe that great coffee starts with great relationships – with our farmers, our community, and our craft.
              </p>
              <p className="text-amber-700 leading-relaxed">
                Our signature roasting process brings out the unique characteristics of each origin, creating complex flavor profiles that tell the story of their terroir. From bright, citrusy Ethiopian beans to rich, chocolatey Colombian varieties, every cup is a journey.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Coffee className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="font-playfair text-2xl font-semibold text-amber-900 mb-4">
                    Bean to Cup Excellence
                  </h4>
                  <p className="text-amber-700">
                    From sourcing to serving, we maintain the highest standards at every step of our coffee journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-semibold text-amber-900 mb-3">
                Sustainable Sourcing
              </h4>
              <p className="text-amber-700">
                Direct trade partnerships with eco-conscious farms, ensuring fair wages and environmental responsibility.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-semibold text-amber-900 mb-3">
                Community Hub
              </h4>
              <p className="text-amber-700">
                A welcoming space for remote workers, students, and coffee lovers to connect, create, and collaborate.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
              <Wifi className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-semibold text-amber-900 mb-3">
                Modern Amenities
              </h4>
              <p className="text-amber-700">
                High-speed WiFi, comfortable seating, and plenty of power outlets for the perfect work environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Signature Menu
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of artisan coffees, specialty drinks, and fresh local pastries.
            </p>
          </div>

          {/* Menu Categories */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-md">
              <button
                onClick={() => setActiveCategory('coffee')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'coffee'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                Coffee & Drinks
              </button>
              <button
                onClick={() => setActiveCategory('food')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === 'food'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                    : 'text-amber-700 hover:text-amber-900'
                }`}
              >
                Food & Pastries
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Full Menu & Order Online
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Join thousands of coffee lovers who have made Roast & Ritual their daily destination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Visit Our Coffee Sanctuary
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Located in the heart of downtown, we're your neighborhood coffee destination with ample seating and a warm, welcoming atmosphere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Find Us</h3>
                  <p className="text-amber-100 leading-relaxed">
                    423 Coffee Street<br />
                    Downtown District<br />
                    Portland, OR 97205
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Hours</h3>
                  <div className="text-amber-100 space-y-1">
                    <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p>Saturday: 7:00 AM - 9:00 PM</p>
                    <p>Sunday: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-8 h-8 text-amber-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Contact</h3>
                  <div className="text-amber-100 space-y-1">
                    <p>(503) 555-ROAST</p>
                    <p>hello@roastandritual.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Get Directions</h3>
              <div className="space-y-4">
                <button className="w-full bg-white text-amber-900 py-3 px-6 rounded-full font-semibold hover:bg-amber-50 transition-colors">
                  Open in Google Maps
                </button>
                <button className="w-full border-2 border-white text-white py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-amber-900 transition-colors">
                  Get Driving Directions
                </button>
              </div>
              <div className="mt-6 text-center text-amber-100">
                <p className="text-sm">Free parking available in the adjacent lot</p>
                <p className="text-sm">Bike racks located at the front entrance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Coffee className="w-8 h-8 text-amber-300" />
                <span className="font-playfair text-2xl font-bold">
                  Roast & Ritual
                </span>
              </div>
              <p className="text-amber-100 leading-relaxed mb-6 max-w-md">
                Where exceptional coffee meets genuine community. Join us for your daily ritual of great coffee, warm atmosphere, and meaningful connections.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-amber-300 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-amber-300 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-amber-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#menu" className="block text-amber-100 hover:text-white transition-colors">Our Menu</a>
                <a href="#about" className="block text-amber-100 hover:text-white transition-colors">About Us</a>
                <a href="#location" className="block text-amber-100 hover:text-white transition-colors">Visit Us</a>
                <a href="#" className="block text-amber-100 hover:text-white transition-colors">Catering</a>
                <a href="#" className="block text-amber-100 hover:text-white transition-colors">Events</a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
              <p className="text-amber-100 mb-4">Subscribe to our newsletter for updates on new blends, events, and special offers.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-full bg-white/10 border border-amber-300/30 text-white placeholder-amber-200 focus:outline-none focus:border-amber-300"
                />
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 mt-12 pt-8 text-center">
            <p className="text-amber-200">
              © 2024 Roast & Ritual Coffee House. All rights reserved. | Crafted with ❤️ and ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}