import React, { useState } from 'react';
import './Ambulance.css';
import { 
  FaTruckMedical, 
  FaHeartPulse, 
  FaPhoneVolume, 
  FaCalendarCheck, 
  FaCircleCheck, 
  FaShieldHeart, 
  FaClock, 
  FaKitMedical,
  FaArrowRight
} from 'react-icons/fa6';

export default function Ambulance({ onOpenAppointment }) {
  const [copiedText, setCopiedText] = useState(false);

  const handleCopyNumber = (num = '9828582189') => {
    navigator.clipboard.writeText(num);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const ambulanceTypes = [
    {
      id: 'non-critical',
      badge: '24×7 Available',
      badgeClass: 'badge-blue',
      title: 'Non-Critical Care Ambulance',
      subtitle: 'सामान्य मरीजों को Hospital ले जाने के लिए Ambulance सेवा।',
      price: '₹5,500*',
      availability: '24×7',
      disclaimer: '*Staff charges extra.',
      contacts: [
        { label: 'Hospital', number: '0144-4023077', href: 'tel:01444023077' },
        { label: 'Mobile', number: '9828582189', href: 'tel:9828582189' }
      ],
      features: [
        'मानक रोगी स्ट्रेचर एवं आरामदायक व्हीलचेयर',
        'प्राथमिक चिकित्सा किट (First Aid) एवं बीपी मॉनिटर',
        '24x7 जीपीएस ट्रैकिंग एवं अनुभवी ड्राइवर',
        'नियमित व सुरक्षित अस्पताल परिवहन सुविधा'
      ],
      icon: <FaTruckMedical size={36} />,
      serviceCode: 'Non-Critical Care Ambulance (₹5,500*)'
    },
    {
      id: 'critical',
      badge: 'ICU on Wheels • 24×7 Available',
      badgeClass: 'badge-red',
      popular: true,
      title: 'Critical Care Ambulance',
      subtitle: 'गंभीर मरीजों के परिवहन के लिए ICU सुविधाओं वाली Ambulance।',
      price: '₹10,000*',
      availability: '24×7',
      disclaimer: '*Staff and Oxygen charges extra.',
      contacts: [
        { label: 'Hospital', number: '0144-4023077', href: 'tel:01444023077' },
        { label: 'Mobile', number: '9828582189', href: 'tel:9828582189' }
      ],
      features: [
        'पोर्टेबल वेंटिलेटर एवं मल्टी-पैरा पेशेंट मॉनिटर',
        'डिफिब्रिलेटर (AED), ईसीजी एवं सक्शन मशीन',
        'क्रिटिकल लाइफ सपोर्ट किट एवं आपातकालीन दवाइयां',
        'प्रशिक्षित पैरामेडिकल व नर्सिंग स्टाफ ऑन-कॉल'
      ],
      icon: <FaHeartPulse size={36} />,
      serviceCode: 'Critical Care Ambulance (₹10,000*)'
    }
  ];

  return (
    <section id="ambulance" className="ambulance-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="ambulance-header-wrap text-center">
          <div className="ambulance-plaque-banner">
            <FaTruckMedical className="plaque-icon left-icon" />
            <span className="plaque-title">Ambulance Booking</span>
            <FaTruckMedical className="plaque-icon right-icon" />
          </div>

          <h2 className="section-title">Book 24×7 Ambulance Service in Alwar</h2>
          <p className="section-desc center-block">
            Sant Sukhdev Shah Charitable Hospital, Alwar में मरीजों को Hospital तक सुरक्षित पहुँचाने के लिए 24 घंटे Ambulance बुकिंग की सुविधा उपलब्ध है। मरीज की जरूरत के अनुसार Non-Critical Care Ambulance या Critical Care Ambulance चुनें। बुकिंग और अधिक जानकारी के लिए Hospital से संपर्क करें।
          </p>
        </div>

        {/* Ambulance Cards Grid */}
        <div className="ambulance-grid">
          {ambulanceTypes.map((amb) => (
            <div key={amb.id} className={`ambulance-card ${amb.popular ? 'featured-card' : ''}`}>
              {amb.popular && (
                <div className="popular-badge-ribbon">
                  <span>ICU on Wheels</span>
                </div>
              )}

              <div className="card-top">
                <div className="amb-icon-wrap">
                  {amb.icon}
                </div>
                <div className="amb-top-meta">
                  <span className={`amb-badge ${amb.badgeClass}`}>
                    <FaClock size={11} /> Availability: {amb.availability}
                  </span>
                  <h3 className="amb-title">{amb.title}</h3>
                  <p className="amb-subtitle-desc">{amb.subtitle}</p>
                </div>
              </div>

              {/* Price Banner */}
              <div className="amb-price-banner">
                <div className="price-main">{amb.price}</div>
                <div className="price-caption">Availability: {amb.availability}</div>
              </div>

              {/* Features List */}
              <div className="amb-features">
                <span className="features-heading">
                  <FaKitMedical size={13} /> वाहन सुविधाएं एवं उपकरण:
                </span>
                <ul className="features-list">
                  {amb.features.map((feat, i) => (
                    <li key={i}>
                      <FaCircleCheck size={14} className="feat-check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="amb-action-row">
                <button
                  type="button"
                  className="btn btn-copy-number"
                  onClick={() => handleCopyNumber('9828582189')}
                >
                  <span>{copiedText ? '✓ Number Copied!' : 'Copy Ambulance Booking Number'}</span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary amb-book-btn"
                  onClick={() => onOpenAppointment && onOpenAppointment(amb.serviceCode)}
                >
                  <FaCalendarCheck size={15} />
                  <span>Book Online</span>
                </button>
              </div>

              {/* Disclaimer */}
              <div className="amb-disclaimer">
                <span className="disclaimer-en">{amb.disclaimer}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for Ambulance Booking Table / Plaque (From Page 6 of PDF) */}
        <div className="ambulance-contact-table-card">
          <h3 className="contact-table-title">Contact for Ambulance Booking</h3>
          
          <div className="amb-table-grid">
            <div className="amb-table-row">
              <span className="amb-table-label">Hospital</span>
              <strong className="amb-table-val">Sant Sukhdev Shah Charitable Hospital, Alwar</strong>
            </div>
            <div className="amb-table-row">
              <span className="amb-table-label">Hospital Number</span>
              <strong className="amb-table-val">
                <a href="tel:01444023077">0144-4023077</a>
              </strong>
            </div>
            <div className="amb-table-row">
              <span className="amb-table-label">Mobile Number</span>
              <strong className="amb-table-val">
                <a href="tel:9828582189">9828582189</a>
              </strong>
            </div>
            <div className="amb-table-row">
              <span className="amb-table-label">Service</span>
              <strong className="amb-table-val">24 Hours, 7 Days a Week</strong>
            </div>
          </div>

          <p className="amb-table-instruction">
            Ambulance बुक करते समय मरीज की स्थिति, पिकअप का पता और Hospital का नाम बताएं। बुकिंग से पहले किराया और अतिरिक्त शुल्क की पुष्टि अवश्य करें।
          </p>
        </div>

        {/* Call Immediately in Any Emergency Banner */}
        <div className="ambulance-emergency-banner">
          <div className="emergency-icon-circle">
            <FaShieldHeart size={30} />
          </div>
          <div className="emergency-banner-info">
            <h4 className="emergency-banner-title">Call Immediately in Any Emergency</h4>
            <p className="emergency-banner-desc">
              हमारी Ambulance सेवा 24 घंटे उपलब्ध है। Alwar और आसपास के क्षेत्रों में मरीजों को Hospital पहुँचाने के लिए तुरंत संपर्क करें।
            </p>
          </div>
          <div className="emergency-banner-actions">
            <a href="tel:9828582189" className="btn btn-call-emergency">
              <FaPhoneVolume size={15} />
              <span>Call Now: 9828582189</span>
            </a>
            <a href="tel:01444023077" className="btn btn-call-landline">
              <FaPhoneVolume size={15} />
              <span>0144-4023077</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
