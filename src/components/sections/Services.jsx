import React, { useState } from 'react';
import './Services.css';
import { 
  FaMagnifyingGlass, 
  FaArrowRight, 
  FaMaskFace, 
  FaShieldHalved, 
  FaHeartPulse, 
  FaPhone, 
  FaCalendarCheck, 
  FaMotorcycle
} from 'react-icons/fa6';
import { hospitalInfo } from '../../data/hospitalData';

export default function Services({ onOpenAppointment }) {
  const [searchTerm, setSearchTerm] = useState('');

  const testInvestigations = [
    {
      id: 'ct-scan',
      nameEn: 'सीटी स्कैन',
      nameHi: 'CT Scan (Computed Tomography)',
      desc: 'शरीर के अंदरूनी अंगों की विस्तृत एवं त्रिविमीय (3D) तस्वीरें तैयार करने वाली आधुनिक जांच। चिकित्सक के परामर्शानुसार सिर, छाती, पेट व अन्य अंगों की सटीक जांच की जाती है।',
      image: '/ct_scan_thumb.jpg',
      badge: '24/7 सेवा'
    },
    {
      id: 'hrct',
      nameEn: 'एचआरसीटी चेस्ट स्कैन',
      nameHi: 'HRCT (High-Resolution CT Scan)',
      desc: 'विशेष प्रकार की उच्च रेजोल्यूशन सीटी जांच, जिसका उपयोग मुख्य रूप से फेफड़ों (Lungs), छाती के संक्रमण एवं सांस संबंधी समस्याओं के सूक्ष्म मूल्यांकन हेतु किया जाता है।',
      image: '/hrct_thumb.jpg',
      badge: 'एचडी इमेजिंग'
    },
    {
      id: 'doppler',
      nameEn: 'कलर डॉपलर जांच',
      nameHi: 'Color Doppler & Vascular Test',
      desc: 'शरीर की रक्त वाहिकाओं (धमनियों व नसों) में रक्त प्रवाह के सटीक मूल्यांकन हेतु आधुनिक वैस्कुलर टेस्ट, जिससे नसों में रुकावट की जांच की जाती है।',
      image: '/doppler_thumb.jpg',
      badge: 'कलर मैपिंग'
    },
    {
      id: 'ncct',
      nameEn: 'नॉन-कंट्रास्ट सीटी स्कैन',
      nameHi: 'NCCT (Non-Contrast CT Scan)',
      desc: 'ऐसी विशेष सीटी जांच जिसमें कंट्रास्ट डाई का उपयोग नहीं किया जाता। सिर की चोट, आंतरिक रक्तस्राव, स्ट्रोक एवं गुर्दे की पथरी के त्वरित निदान में सहायक।',
      image: '/ncct_thumb.jpg',
      badge: 'त्वरित रिपोर्ट'
    },
    {
      id: 'mri',
      nameEn: 'एमआरआई स्कैन',
      nameHi: 'MRI Scan (Detailed Internal Body Scan)',
      desc: 'आधुनिक चुंबकीय व रेडियो तरंग तकनीक द्वारा मस्तिष्क, रीढ़ (Spine), नसों, जोड़ों व लिगामेंट्स की गहराई से जांच कर बीमारी का सटीक पता लगाने की सुविधा।',
      image: '/mri_thumb.jpg',
      badge: 'एडवांस्ड एमआरआई'
    },
    {
      id: 'ultrasound',
      nameEn: 'सोनोग्राफी / अल्ट्रासाउंड',
      nameHi: 'Ultrasound / Sonography Scan',
      desc: 'पेट, लिवर, गुर्दे (Kidney) एवं आंतरिक अंगों की सुरक्षित डिजिटल जांच। गर्भावस्था के दौरान शिशु के विकास और स्वास्थ्य की निरंतर निगरानी हेतु अत्यंत उपयोगी।',
      image: '/ultrasound_thumb.jpg',
      badge: 'डिजिटल सोनोग्राफी'
    },
    {
      id: 'pathlab',
      nameEn: 'पैथोलॉजी एवं रक्त जांच',
      nameHi: 'Pathology Lab & Blood Tests',
      desc: 'रक्त व मूत्र जांच द्वारा शरीर के संक्रमण, शुगर, लिपिड, थायरॉइड, लीवर व किडनी फंक्शन का त्वरित परीक्षण। पूर्णतः स्वचालित डिजिटल पैथोलॉजी लैब।',
      image: '/pathlab_thumb.jpg',
      badge: 'ऑटोमेटेड लैब'
    },
    {
      id: 'other-tests',
      nameEn: 'अन्य विशेष डायग्नोस्टिक्स',
      nameHi: 'Digital X-Ray, ECG, TMT, EEG & More',
      desc: 'अस्पताल में डिजिटल एक्स-रे, ईसीजी (ECG), टीएमटी (TMT), ईईजी (EEG) एवं अन्य सभी आवश्यक परीक्षण न्यूनतम धर्मार्थ शुल्क पर उपलब्ध हैं।',
      image: '/other_tests_thumb.jpg',
      badge: 'संपूर्ण चेकअप'
    }
  ];

  // Filter investigations based on search query
  const filteredTests = testInvestigations.filter((test) => {
    const query = searchTerm.toLowerCase().trim();
    return (
      test.nameEn.toLowerCase().includes(query) ||
      test.nameHi.toLowerCase().includes(query) ||
      test.desc.toLowerCase().includes(query)
    );
  });

  const handleBookTest = (test) => {
    if (onOpenAppointment) {
      onOpenAppointment(`${test.nameEn} (${test.nameHi})`);
    }
  };

  const handleBookHomeCollection = () => {
    if (onOpenAppointment) {
      onOpenAppointment('घर से सैंपल कलेक्शन सुविधा (Home Collection - ₹50)');
    }
  };

  return (
    <section id="services" className="services-investigation-section">
      <div className="container services-layout">
        
        {/* Section Header with Search Bar */}
        <div className="services-header-row">
          <div className="services-title-col">
            <span className="services-badge">
              जांच एवं डायग्नोस्टिक सुविधाएं • LAB TEST INVESTIGATION
            </span>
            <h2 className="services-main-title">आधुनिक जांच एवं डायग्नोस्टिक सुविधाएं</h2>
            <p className="services-subtitle">
              संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर में मरीजों की सभी नैदानिक जरूरतों के लिए आधुनिक डायग्नोस्टिक सुविधाओं की जानकारी एवं बुकिंग की संपूर्ण सुविधा उपलब्ध है। यहाँ सीटी स्कैन, एचआरसीटी, कलर डॉपलर और नॉन-कंट्रास्ट सीटी जैसी अत्याधुनिक जांचें 24 घंटे रियायती दरों पर उपलब्ध हैं। सही जांच से चिकित्सकों को मरीज की स्थिति समझने और उचित उपचार शुरू करने में सहायता मिलती है।
            </p>
          </div>

          {/* Search Box as shown in user board */}
          <div className="services-search-wrapper">
            <div className="services-search-box">
              <FaMagnifyingGlass className="search-icon" size={16} />
              <input 
                type="text" 
                placeholder="जांच खोजें... (उदा. CT Scan, MRI, Blood)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                aria-label="जांच खोजें"
              />
              {searchTerm && (
                <button 
                  type="button" 
                  onClick={() => setSearchTerm('')} 
                  className="search-clear-btn"
                  title="क्लियर करें"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 8 Investigation Test Cards Grid (4x2 on Desktop) */}
        {filteredTests.length > 0 ? (
          <div className="investigations-grid">
            {filteredTests.map((test) => (
              <div 
                key={test.id} 
                className="investigation-card"
                onClick={() => handleBookTest(test)}
                title={`${test.nameEn} - जांच बुक करें`}
              >
                <div className="investigation-img-wrap">
                  <img 
                    src={test.image} 
                    alt={test.nameEn} 
                    className="investigation-img" 
                    loading="lazy" 
                  />
                  <span className="investigation-tag">{test.badge}</span>
                </div>

                <div className="investigation-info">
                  <h3 className="investigation-title-en">{test.nameEn}</h3>
                  <span className="investigation-title-hi">{test.nameHi}</span>
                  <p className="investigation-desc">{test.desc}</p>
                </div>

                <div className="investigation-card-action">
                  <button 
                    type="button" 
                    className="btn-book-investigation"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookTest(test);
                    }}
                  >
                    <span>जांच बुक करें →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-tests-found">
            <p>"{searchTerm}" से संबंधित कोई जांच नहीं मिली। कृपया अन्य नाम से खोजें।</p>
            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={() => setSearchTerm('')}
            >
              सभी 8 जांचें देखें
            </button>
          </div>
        )}

        {/* Home Collection Facility Card Block */}
        <div className="home-collection-container">
          <div className="home-collection-grid">
            
            {/* Left Graphic: Healthcare Scooter Delivery */}
            <div className="home-collection-visual">
              <div className="scooter-img-card">
                <img 
                  src="/home_sample_scooter.jpg" 
                  alt="Home Sample Collection Facility - Hospital Scooter Delivery"
                  className="scooter-img"
                />
                <div className="collection-floating-tag">
                  <FaMotorcycle size={16} />
                  <span>घर बैठे सुरक्षित सैंपल पिकअप</span>
                </div>
              </div>
            </div>

            {/* Right Card: Plaque with text & button from PDF */}
            <div className="home-collection-card">
              <div className="collection-card-inner">
                <div className="collection-kicker">🏠 घर बैठे सैंपल कलेक्शन सुविधा</div>
                <h3 className="collection-heading">अब पैथोलॉजी जांच के लिए घर से अस्पताल आने की जरूरत नहीं!</h3>
                <p className="collection-desc-hi">
                  यदि आप बुजुर्ग हैं, चलने-फिरने में असमर्थ हैं अथवा किसी कारणवश अस्पताल नहीं आ सकते, तो आपके लिए घर से रक्त व मूत्र सैंपल संग्रह (Sample Collection) की विशेष सुविधा उपलब्ध है।
                </p>
                <p className="collection-desc-hi">
                  हमारा प्रशिक्षित लैब तकनीशियन आपके घर पहुंचकर पूरी सुरक्षा व स्वच्छता के साथ सैंपल कलेक्ट करता है। इससे आप बिना किसी परेशानी के घर बैठे अपनी आवश्यक जांच करवा सकते हैं।
                </p>

                <div className="collection-charge-banner">
                  <div className="charge-details">
                    <span className="charge-caption">होम कलेक्शन शुल्क</span>
                    <strong className="charge-amount">₹50 अतिरिक्त</strong>
                  </div>
                  <div className="charge-contact">
                    <span className="charge-caption">हेल्पलाइन संपर्क:</span>
                    <a href="tel:8890199768" className="charge-phone">8890199768</a>
                  </div>
                </div>

                <div className="collection-actions-row">
                  <button 
                    type="button" 
                    className="btn-add-collection"
                    onClick={handleBookHomeCollection}
                  >
                    <FaCalendarCheck size={16} />
                    <span>घर बैठे सैंपल बुक करें (₹50)</span>
                  </button>

                  <a 
                    href="tel:8890199768" 
                    className="btn-collection-call"
                    title="कॉल करके बुक करें"
                  >
                    <FaPhone size={14} />
                    <span>कॉल करें: 8890199768</span>
                  </a>
                </div>

                <div className="collection-disclaimer">
                  <strong>नोट:</strong> घर से सैंपल कलेक्शन की सुविधा केवल पैथोलॉजी जांचों के लिए उपलब्ध है। यह सुविधा अस्पताल परिसर से 4 किलोमीटर के दायरे में लागू है।
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Trust & Security Banner (Safe, Secure, Seamless in pure Hindi) */}
        <div className="services-trust-banner">
          <div className="trust-grid">
            
            {/* Feature 1: SAFE */}
            <div className="trust-card">
              <div className="trust-icon-box safe-icon">
                <FaMaskFace size={28} />
              </div>
              <div className="trust-text-wrap">
                <div className="trust-top-sub">सुरक्षित तकनीक</div>
                <h4 className="trust-title">सुरक्षित एवं स्टेराइल जांच</h4>
                <p className="trust-desc">
                  100% स्टेराइल डिस्पोजेबल उपकरण एवं उच्चतम मेडिकल सुरक्षा मानकों के साथ मरीजों की देखरेख।
                </p>
              </div>
            </div>

            {/* Feature 2: SECURE */}
            <div className="trust-card">
              <div className="trust-icon-box secure-icon">
                <FaShieldHalved size={28} />
              </div>
              <div className="trust-text-wrap">
                <div className="trust-top-sub">सटीक व विश्वसनीय</div>
                <h4 className="trust-title">सटीक एवं पूर्णतः गोपनीय</h4>
                <p className="trust-desc">
                  सटीक कंप्यूटराइज्ड लैब रिपोर्ट्स, त्वरित डिजिटल रिकॉर्ड्स एवं मरीज की जानकारी की पूर्ण गोपनीयता।
                </p>
              </div>
            </div>

            {/* Feature 3: SEAMLESS */}
            <div className="trust-card">
              <div className="trust-icon-box seamless-icon">
                <FaHeartPulse size={28} />
              </div>
              <div className="trust-text-wrap">
                <div className="trust-top-sub">सहज व सुलभ</div>
                <h4 className="trust-title">आसान व सुविधाजनक सेवा</h4>
                <p className="trust-desc">
                  आसान ऑनलाइन टोकन बुकिंग, त्वरित सैंपल कलेक्शन एवं उसी दिन टेस्ट रिपोर्ट पाने की सरल प्रक्रिया।
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
