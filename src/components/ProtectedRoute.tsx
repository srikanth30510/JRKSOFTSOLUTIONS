import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useConsent } from '../contexts/ConsentContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { hasConsent } = useConsent();
  const location = useLocation();

  useEffect(() => {
    if (!hasConsent && location.pathname !== '/') {
      toast.error('You must accept the terms and conditions below to continue.', {
        position: 'top-center',
        autoClose: 500, 
        closeOnClick: true,
      });
    }
  }, [hasConsent, location.pathname]); 

  if (!hasConsent && location.pathname !== '/') {
    return (
      <>
        <ToastContainer />
        {setTimeout(() => <Navigate to="/" replace />, 500)}
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}
