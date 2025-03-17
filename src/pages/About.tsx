import { motion } from 'framer-motion';
import { Target, Shield, Zap, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 pt-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image and Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-left">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
                About JRKSoftware Solutions
              </h1>
              <p className="text-lg text-slate-600">
                Empowering businesses with innovative software solutions that drive growth and efficiency in the digital age.
              </p>
            </div>
            <div className="relative group rounded-2xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-xl w-full h-[300px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <Target className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
              <p className="text-sm text-slate-600">
                To drive digital transformation through innovative software solutions that deliver real value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <Shield className="h-8 w-8 text-blue-700 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Our Security</h3>
              <p className="text-sm text-slate-600">
                Enterprise-grade protection for your critical business data and operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <Zap className="h-8 w-8 text-blue-800 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Our Innovation</h3>
              <p className="text-sm text-slate-600">
                Cutting-edge technology to meet evolving business needs and challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <Users className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Our Team</h3>
              <p className="text-sm text-slate-600">
                Dedicated professionals committed to your business success and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}