import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ConsentContextType {
  hasConsent: boolean;
  setHasConsent: (value: boolean) => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('siteConsent');
    if (consent) {
      const parsedConsent = JSON.parse(consent);
      setHasConsent(parsedConsent.termsAccepted);
    }
  }, []);

  return (
    <ConsentContext.Provider value={{ hasConsent, setHasConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}