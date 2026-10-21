import React from 'react';
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
  const ambulanceTypes = [
    {
      id: 'non-critical',
      badge: '24*7 Available',
      badgeClass: 'badge-blue',
      title: 'Non-Critical Care Ambulance',
      subtitle: 'नॉन-क्रिटिकल केयर एम्बुलेंस (सामान्य रोगी परिवहन)',
      price: '₹5,500*',
      priceCaption: 'Available 24*7 in ₹5,500* only.',
      disclaimer: '*staff charges extra',
      disclaimerHi: '*स्टाफ शुल्क अतिरिक्त',
      contacts: [
        { label: 'लैंडलाइन', number: '0144-4023077', href: 'tel:01444023077' },
        { label: 'मोबाइल', number: '9828582189', href: 'tel:9828582189' }
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
      badge: 'ICU on Wheels • 24*7 Available',
      badgeClass: 'badge-red',
      popular: true,
      title: 'Critical Care Ambulance',
      subtitle: 'क्रिटिकल केयर एम्बुलेंस (ICU ऑन व्हील्स / एडवांस लाइफ सपोर्ट)',
      price: '₹10,000*',
      priceCaption: 'Available 24*7 in ₹10,000* only.',
      disclaimer: '*staff and oxygen charges extra',
      disclaimerHi: '*स्टाफ एवं ऑक्सीजन शुल्क अतिरिक्त',
      contacts: [
        { label: 'लैंडलाइन', number: '0144-4023077', href: 'tel:01444023077' },
        { label: 'मोबाइल', number: '9828582189', href: 'tel:9828582189' }
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
        {/* Section Header with Blue Plaque Sign */}
        <div className="ambulance-header-wrap text-center">
          <div className="ambulance-plaque-banner">
            <FaTruckMedical className="plaque-icon left-icon" />
            <span className="plaque-title">Ambulance Booking</span>
            <FaTruckMedical className="plaque-icon right-icon" />
          </div>

          <h2 className="section-title">24x7 आपातकालीन एम्बुलेंस सेवा</h2>
          <p className="section-desc center-block">
            संत सुखदेव शाह धर्मार्थ चिकित्सालय में गंभीर व सामान्य मरीजों के त्वरित, सुरक्षित एवं सुलभ परिवहन हेतु अत्याधुनिक एम्बुलेंस सेवा 24 घंटे उपलब्ध है।
          </p>
        </div>

        {/* Ambulance Cards Grid */}
        <div className="ambulance-grid">
          {ambulanceTypes.map((amb) => (
            <div key={amb.id} className={`ambulance-card ${amb.popular ? 'featured-card' : ''}`}>
              {amb.popular && (
                <div className="popular-badge-ribbon">
                  <span>एडवांस लाइफ सपोर्ट (ALS)</span>
                </div>
              )}

              <div className="card-top">
                <div className="amb-icon-wrap">
                  {amb.icon}
                </div>
                <div className="amb-top-meta">
                  <span className={`amb-badge ${amb.badgeClass}`}>
                    <FaClock size={11} /> {amb.badge}
                  </span>
                  <h3 className="amb-title">{amb.title}</h3>
                  <span className="amb-subtitle">{amb.subtitle}</span>
                </div>
              </div>

              {/* Price Banner */}
              <div className="amb-price-banner">
                <div className="price-main">{amb.price}</div>
                <div className="price-caption">{amb.priceCaption}</div>
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

              {/* Contact Strip */}
              <div className="amb-contact-box">
                <span className="contact-title">
                  <FaPhoneVolume size={13} /> त्वरित बुकिंग संपर्क (Contact):
                </span>
                <div className="contact-links-row">
                  {amb.contacts.map((c, idx) => (
                    <a key={idx} href={c.href} className="contact-pill-btn">
                      <span className="contact-type">{c.label}:</span>
                      <strong className="contact-num">{c.number}</strong>
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="amb-action-row">
                <button
                  type="button"
                  className="btn btn-primary amb-book-btn"
                  onClick={() => onOpenAppointment && onOpenAppointment(amb.serviceCode)}
                >
                  <FaCalendarCheck size={15} />
                  <span>Book Online (ऑनलाइन बुक करें)</span>
                </button>
              </div>

              {/* Disclaimer */}
              <div className="amb-disclaimer">
                <span className="disclaimer-en">{amb.disclaimer}</span>
                <span className="disclaimer-hi">({amb.disclaimerHi})</span>
              </div>
            </div>
          ))}
        </div>

        {/* 24x7 Emergency Contact Strip */}
        <div className="ambulance-emergency-banner">
          <div className="emergency-icon-circle">
            <FaShieldHeart size={30} />
          </div>
          <div className="emergency-banner-info">
            <h4 className="emergency-banner-title">किसी भी आपातकालीन स्थिति में तुरंत कॉल करें</h4>
            <p className="emergency-banner-desc">
              हमारा ट्रॉमा सेंटर एवं एम्बुलेंस नियंत्रण कक्ष 24 घंटे तत्पर है। अलवर एवं नजदीकी क्षेत्रों में त्वरित पहुंच।
            </p>
          </div>
          <div className="emergency-banner-actions">
            <a href="tel:9828582189" className="btn btn-call-emergency">
              <FaPhoneVolume size={15} />
              <span>कॉल 9828582189</span>
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
