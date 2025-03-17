import { motion } from 'framer-motion';
//ShoppingCart
import {  Layout, Database, Shield, BarChart as ChartBar, Layers } from 'lucide-react';

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of business software solutions designed to enhance your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <span className="text-sm font-medium text-blue-600">Enterprise</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <product.icon className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {/* <button className="w-full inline-flex items-center justify-center px-4 py-2 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105">
                  <ShoppingCart className="mr-2" size={16} />
                  Request Demo
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    name: 'Business Analytics Suite',
    description: 'Comprehensive analytics platform with real-time insights and customizable dashboards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    icon: ChartBar,
  },
  {
    name: 'Integration Platform',
    description: 'Seamlessly connect and manage all your business systems from a single interface.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    icon: Database,
  },
  {
    name: 'Security Management',
    description: 'Advanced security features to protect your business data and operations.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    icon: Shield,
  },
  {
    name: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline your business processes.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    icon: Layout,
  },
  {
    name: 'Custom Modules',
    description: 'Tailored solutions designed to meet your specific business requirements.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    icon: Layers,
  },
  {
    name: 'Enterprise Suite',
    description: 'Complete enterprise solution with all features and priority support.',
    image: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80',
    icon: Database,
  },
];