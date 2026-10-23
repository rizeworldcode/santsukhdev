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
      badge: '24×7 उपलब्ध',
      badgeClass: 'badge-blue',
      title: 'नॉन-क्रिटिकल केयर एम्बुलेंस (Non-Critical Ambulance)',
      subtitle: 'सामान्य मरीजों को सुरक्षित अस्पताल पहुँचाने के लिए समर्पित एम्बुलेंस सेवा।',
      price: '₹5,500*',
      availability: '24×7',
      disclaimer: '*स्टाफ शुल्क अतिरिक्त नियमानुसार।',
      contacts: [
        { label: 'अस्पताल', number: '0144-4023077', href: 'tel:01444023077' },
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
      badge: 'आईसीयू ऑन व्हील्स • 24×7 उपलब्ध',
      badgeClass: 'badge-red',
      popular: true,
      title: 'क्रिटिकल केयर एम्बुलेंस (ICU on Wheels)',
      subtitle: 'गंभीर मरीजों के सुरक्षित परिवहन के लिए आईसीयू सुविधाओं एवं जीवन रक्षक उपकरणों से सुसज्जित एम्बुलेंस।',
      price: '₹10,000*',
      availability: '24×7',
      disclaimer: '*स्टाफ एवं ऑक्सीजन शुल्क अतिरिक्त नियमानुसार।',
      contacts: [
        { label: 'अस्पताल', number: '0144-4023077', href: 'tel:01444023077' },
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
        {/* Section Header */}
        <div className="ambulance-header-wrap text-center">
          <div className="ambulance-plaque-banner">
            <FaTruckMedical className="plaque-icon left-icon" />
            <span className="plaque-title">एम्बुलेंस बुकिंग सेवा</span>
            <FaTruckMedical className="plaque-icon right-icon" />
          </div>

          <h2 className="section-title">अलवर में 24×7 आपातकालीन एम्बुलेंस सेवा</h2>
          <p className="section-desc center-block">
            संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर में मरीजों को अस्पताल तक सुरक्षित पहुँचाने के लिए 24 घंटे आपातकालीन एम्बुलेंस सेवा उपलब्ध है। मरीज की स्थिति के अनुसार नॉन-क्रिटिकल केयर एम्बुलेंस या क्रिटिकल केयर (आईसीयू ऑन व्हील्स) एम्बुलेंस चुनें। त्वरित बुकिंग एवं सहायता के लिए तुरंत संपर्क करें।
          </p>
        </div>

        {/* Ambulance Cards Grid */}
        <div className="ambulance-grid">
          {ambulanceTypes.map((amb) => (
            <div key={amb.id} className={`ambulance-card ${amb.popular ? 'featured-card' : ''}`}>
              {amb.popular && (
                <div className="popular-badge-ribbon">
                  <span>आईसीयू ऑन व्हील्स</span>
                </div>
              )}

              <div className="card-top">
                <div className="amb-icon-wrap">
                  {amb.icon}
                </div>
                <div className="amb-top-meta">
                  <span className={`amb-badge ${amb.badgeClass}`}>
                    <FaClock size={11} /> सेवा: 24 घंटे उपलब्ध
                  </span>
                  <h3 className="amb-title">{amb.title}</h3>
                  <p className="amb-subtitle-desc">{amb.subtitle}</p>
                </div>
              </div>

              {/* Price Banner */}
              <div className="amb-price-banner">
                <div className="price-main">{amb.price}</div>
                <div className="price-caption">उपलब्धता: 24×7 सेवा</div>
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
                  <span>{copiedText ? '✓ नंबर कॉपी हो गया!' : 'एम्बुलेंस बुकिंग नंबर कॉपी करें'}</span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary amb-book-btn"
                  onClick={() => onOpenAppointment && onOpenAppointment(amb.serviceCode)}
                >
                  <FaCalendarCheck size={15} />
                  <span>ऑनलाइन बुक करें</span>
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
          <h3 className="contact-table-title">एम्बुलेंस बुकिंग संपर्क विवरण (Ambulance Booking Contact)</h3>
          
          <div className="amb-table-grid">
            <div className="amb-table-row">
              <span className="amb-table-label">चिकित्सा संस्थान</span>
              <strong className="amb-table-val">संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर</strong>
            </div>
            <div className="amb-table-row">
              <span className="amb-table-label">अस्पताल लैंडलाइन</span>
              <strong className="amb-table-val">
                <a href="tel:01444023077">0144-4023077</a>
              </strong>
            </div>
            <div className="amb-table-row">
              <span className="amb-table-label">आपातकालीन मोबाइल</span>
              <strong className="amb-table-val">
                <a href="tel:9828582189">9828582189</a>
              </strong>
            </div>
            <div className="amb-table-row">
              <span className="amb-table-label">सेवा उपलब्धता</span>
              <strong className="amb-table-val">24 घंटे, सातों दिन (24×7 तत्पर)</strong>
            </div>
          </div>

          <p className="amb-table-instruction">
            एम्बुलेंस बुक करते समय मरीज की स्थिति, पिकअप का पूरा पता और संपर्क नंबर अवश्य बताएं। बुकिंग से पहले दूरी एवं आवश्यक चिकित्सीय सुविधाओं की पुष्टि कर लें।
          </p>
        </div>

        {/* Call Immediately in Any Emergency Banner */}
        <div className="ambulance-emergency-banner">
          <div className="emergency-icon-circle">
            <FaShieldHeart size={30} />
          </div>
          <div className="emergency-banner-info">
            <h4 className="emergency-banner-title">किसी भी आपातकालीन स्थिति में तुरंत कॉल करें</h4>
            <p className="emergency-banner-desc">
              हमारी एम्बुलेंस सेवा 24 घंटे तत्पर है। अलवर एवं निकटवर्ती ग्रामीण व शहरी क्षेत्रों में मरीजों को सुरक्षित अस्पताल पहुँचाने हेतु तुरंत संपर्क करें।
            </p>
          </div>
          <div className="emergency-banner-actions">
            <a href="tel:9828582189" className="btn btn-call-emergency">
              <FaPhoneVolume size={15} />
              <span>कॉल करें: 9828582189</span>
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
