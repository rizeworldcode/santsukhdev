import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import AppointmentModal from './components/common/AppointmentModal';
// Route Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import DepartmentsPage from './pages/DepartmentsPage';
import AboutPage from './pages/AboutPage';
import DoctorsPage from './pages/DoctorsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import ReportDownloadPage from './pages/ReportDownloadPage';
import PoliciesPage from './pages/PoliciesPage';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openAppointment = (service = '') => {
    setSelectedService(service);
    setIsAppointmentOpen(true);
  };
  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        {/* Top Header & Navigation */}
        <Header 
          onOpenAppointment={openAppointment} 
        />

        {/* Multi-Page Routes */}
        <main className="main-content-wrapper">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage onOpenAppointment={openAppointment} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesPage onOpenAppointment={openAppointment} />} 
            />
            <Route 
              path="/departments" 
              element={<DepartmentsPage onOpenAppointment={openAppointment} />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/doctors" 
              element={<DoctorsPage onOpenAppointment={openAppointment} />} 
            />
            <Route 
              path="/gallery" 
              element={<GalleryPage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/donate" 
              element={<DonatePage />} 
            />
            <Route 
              path="/download-report" 
              element={<ReportDownloadPage />} 
            />
            <Route 
              path="/policies" 
              element={<PoliciesPage />} 
            />
            {/* Fallback to Home */}
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenAppointment={openAppointment} />

        {/* Booking Appointment Modal */}
        <AppointmentModal 
          isOpen={isAppointmentOpen} 
          onClose={closeAppointment} 
          initialService={selectedService}
        />
      </div>
    </BrowserRouter>
  );
}
