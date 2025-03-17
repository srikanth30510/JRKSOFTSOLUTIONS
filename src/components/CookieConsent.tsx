import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Check } from 'lucide-react';
import PolicyModal from './PolicyModal';
import { privacyPolicyContent, termsOfServiceContent, cookiePolicyContent } from '../data/policies';
import { useConsent } from '../contexts/ConsentContext';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const { setHasConsent } = useConsent();
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('siteConsent');
    if (!consent) {
      setIsOpen(true);
    } else {
      const parsedConsent = JSON.parse(consent);
      setHasConsent(parsedConsent.termsAccepted);
    }
  }, [setHasConsent]);

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

  const handleAcceptAll = () => {
    if (!termsAccepted) {
      alert('Please accept the Terms of Service to continue');
      return;
    }
    
    const settings = {
      cookies: {
        essential: true,
        analytics: true,
        marketing: true,
      },
      termsAccepted: true,
    };
    
    setCookieSettings(settings.cookies);
    saveConsent(settings);
    setHasConsent(true);
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    if (!termsAccepted) {
      alert('Please accept the Terms of Service to continue');
      return;
    }

    const settings = {
      cookies: cookieSettings,
      termsAccepted: true,
    };

    saveConsent(settings);
    setHasConsent(true);
    setIsOpen(false);
  };

  const saveConsent = (settings: { cookies: CookieSettings; termsAccepted: boolean }) => {
    localStorage.setItem('siteConsent', JSON.stringify(settings));
  };

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-gray-200"
        >
          {!showSettings ? (
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 space-y-4">
                <p className="text-gray-600">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. You must accept our terms to continue using the website.
                </p>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms-acceptance"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600"
                  />
                  <label htmlFor="terms-acceptance" className="text-sm text-gray-600">
                    I accept the{' '}
                    <button 
                      onClick={() => setActivePolicy('terms')} 
                      className="text-blue-600 hover:underline"
                    >
                      Terms of Service
                    </button>
                    ,{' '}
                    <button 
                      onClick={() => setActivePolicy('privacy')} 
                      className="text-blue-600 hover:underline"
                    >
                      Privacy Policy
                    </button>
                    , and{' '}
                    <button 
                      onClick={() => setActivePolicy('cookies')} 
                      className="text-blue-600 hover:underline"
                    >
                      Cookie Policy
                    </button>
                  </label>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <Settings size={16} />
                  Cookie Settings
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Check size={16} />
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Cookie Preferences</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Essential Cookies</p>
                    <p className="text-sm text-gray-500">Required for the website to function properly</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookieSettings.essential}
                    disabled
                    className="h-4 w-4 text-blue-600"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Analytics Cookies</p>
                    <p className="text-sm text-gray-500">Help us improve our website</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookieSettings.analytics}
                    onChange={(e) => setCookieSettings(prev => ({ ...prev, analytics: e.target.checked }))}
                    className="h-4 w-4 text-blue-600"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Cookies</p>
                    <p className="text-sm text-gray-500">Used to deliver personalized ads</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={cookieSettings.marketing}
                    onChange={(e) => setCookieSettings(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="h-4 w-4 text-blue-600"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <PolicyModal
        isOpen={activePolicy !== null}
        onClose={() => setActivePolicy(null)}
        title={getPolicyContent().title}
        content={getPolicyContent().content}
      />
    </>
  );
}