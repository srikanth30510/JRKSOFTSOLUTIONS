import {  Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PolicyModal from './PolicyModal';
import { privacyPolicyContent, termsOfServiceContent, cookiePolicyContent } from '../data/policies';

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  const getPolicyContent = () => {
    switch (activePolicy) {
      case 'privacy':
        return { title: 'Privacy Policy', content: privacyPolicyContent };
      case 'terms':
        return { title: 'Terms of Service', content: termsOfServiceContent };
      case 'cookies':
        return { title: 'Cookie Policy', content: cookiePolicyContent };
      default:
        return { title: '', content: null };
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              JRKSoftware
            </Link>
            <p className="text-slate-400 text-sm">
              Empowering businesses with innovative software solutions for the digital age.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a> */}
              <a href="mailto:Info@JRKSol.onmicrosoft.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-slate-400 hover:text-blue-400 transition-colors">Analytics Suite</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-blue-400 transition-colors">Integration Platform</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-blue-400 transition-colors">Security Management</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-blue-400 transition-colors">Enterprise Suite</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActivePolicy('privacy')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy('terms')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy('cookies')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} JRKSoftware Solutions. All rights reserved.</p>
        </div>
      </div>

      <PolicyModal
        isOpen={activePolicy !== null}
        onClose={() => setActivePolicy(null)}
        title={getPolicyContent().title}
        content={getPolicyContent().content}
      />
    </footer>
  );
}