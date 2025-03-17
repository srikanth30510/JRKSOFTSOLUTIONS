import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layout, Database, Shield, BarChart as ChartBar, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Transform Your Business",
    description: "Streamline operations with cutting-edge software solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    feature: {
      icon: Layout,
      title: "Intuitive Interface",
      description: "User-friendly dashboard that simplifies navigation"
    }
  },
  {
    id: 2,
    title: "Data-Driven Decisions",
    description: "Leverage powerful analytics to drive growth",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    feature: {
      icon: ChartBar,
      title: "Real-Time Analytics",
      description: "Access immediate insights for informed decisions"
    }
  },
  {
    id: 3,
    title: "Enterprise Security",
    description: "Protected by industry-leading security measures",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    feature: {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced encryption and security protocols"
    }
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const Icon = slides[currentSlide].feature.icon;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Hero Section with Slideshow */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-200 mb-8"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mt-12"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {slides[currentSlide].feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {slides[currentSlide].feature.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-blue-600 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-8 right-8 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            Explore Products
            <ArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default App;