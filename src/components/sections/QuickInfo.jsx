import React from 'react';
import './QuickInfo.css';
import { 
  FaTruckMedical, 
  FaStethoscope, 
  FaCalendarDays, 
  FaArrowRight,
  FaPhone
} from 'react-icons/fa6';
import { hospitalInfo } from '../../data/hospitalData';

export default function QuickInfo({ onOpenAppointment }) {
  return (
    <section className="quick-info-section">
      <div className="container">
        <div className="quick-info-grid">
          {/* Card 1: 24/7 Emergency */}
          <div className="info-card info-card-emergency">
            <div className="card-top-icon">
              <FaTruckMedical size={30} />
            </div>
            <h3 className="card-heading">24/7 आपातकालीन सेवा</h3>
            <p className="card-text">
              तत्काल ट्रॉमा केयर, कार्डियक सपोर्ट, दुर्घटना प्राथमिक उपचार एवं 24 घंटे जीवन रक्षक एम्बुलेंस सेवा उपलब्ध।
            </p>
            <a href={`tel:${hospitalInfo.emergencyPhone}`} className="card-link emergency-link">
              <FaPhone size={15} />
              <span>कॉल: {hospitalInfo.emergencyPhone}</span>
            </a>
          </div>

          {/* Card 2: Doctors & OPD Timings */}
          <div className="info-card info-card-regular">
            <div className="card-top-icon primary-icon">
              <FaStethoscope size={30} />
            </div>
            <h3 className="card-heading">वरिष्ठ विशेषज्ञ चिकित्सक</h3>
            <p className="card-text">
              हृदय रोग, कैंसर, न्यूरो, हड्डी, एवं स्त्री रोग के अनुभवी एवं प्रतिष्ठित चिकित्सकों द्वारा नियमित परामर्श।
            </p>
            <div className="timing-badge">
              <span>ओपीडी: सोम - शनि (प्रातः 8 से सायं 8 बजे)</span>
            </div>
          </div>

          {/* Card 3: Appointment Booking */}
          <div className="info-card info-card-appointment">
            <div className="card-top-icon secondary-icon">
              <FaCalendarDays size={30} />
            </div>
            <h3 className="card-heading">ऑनलाइन अपॉइंटमेंट</h3>
            <p className="card-text">
              लंबी कतारों से बचें! घर बैठे विशेषज्ञ डॉक्टर से परामर्श हेतु तुरंत टोकन व समय स्लॉट बुक करें।
            </p>
            <button 
              type="button" 
              className="card-action-btn"
              onClick={onOpenAppointment}
            >
              <span>अपॉइंटमेंट बुक करें</span>
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
