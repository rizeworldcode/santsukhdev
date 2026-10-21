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
      nameEn: 'CT Scan',
      nameHi: 'कंप्यूटेड टोमोग्राफी स्कैन',
      desc: 'मस्तिष्क, छाती, पेट एवं जोड़ों का आधुनिक मल्टी-स्लाइस 3D सीटी स्कैन।',
      image: '/ct_scan_thumb.jpg',
      badge: '24/7 सेवा'
    },
    {
      id: 'hrct',
      nameEn: 'HRCT',
      nameHi: 'हाई-रेजोल्यूशन चेस्ट सीटी',
      desc: 'फेफड़ों के संक्रमण, निमोनिया व सांस संबंधी बीमारियों की अति-सटीक जांच।',
      image: '/hrct_thumb.jpg',
      badge: 'एचडी इमेजिंग'
    },
    {
      id: 'doppler',
      nameEn: 'Doppler',
      nameHi: 'कलर डॉपलर व वैस्कुलर जांच',
      desc: 'धमनियों व नसों में रक्त प्रवाह एवं कार्डियो-वैस्कुलर स्थिति का परीक्षण।',
      image: '/doppler_thumb.jpg',
      badge: 'कलर मैपिंग'
    },
    {
      id: 'ncct',
      nameEn: 'NCCT',
      nameHi: 'नॉन-कंट्रास्ट सीटी स्कैन',
      desc: 'सिर में चोट, स्ट्रोक, आंतरिक रक्तस्राव एवं किडनी स्टोन का त्वरित निदान।',
      image: '/ncct_thumb.jpg',
      badge: 'त्वरित रिपोर्ट'
    },
    {
      id: 'mri',
      nameEn: 'MRI',
      nameHi: 'मैग्नेटिक रेजोनेंस इमेजिंग',
      desc: 'मस्तिष्क, रीढ़ (Spine), जोड़ों व लिगामेंट्स का हाई-डेफिनिशन एमआरआई।',
      image: '/mri_thumb.jpg',
      badge: 'एडवांस्ड एमआरआई'
    },
    {
      id: 'ultrasound',
      nameEn: 'UltraSound',
      nameHi: 'सोनोग्राफी / 4D अल्ट्रासाउंड',
      desc: 'संपूर्ण पेट, पेल्विस, गर्भावस्था भ्रूण विकास व थायरॉइड की डिजिटल सोनोग्राफी।',
      image: '/ultrasound_thumb.jpg',
      badge: 'डिजिटल 4D'
    },
    {
      id: 'pathlab',
      nameEn: 'PathLab Tests',
      nameHi: 'पैथोलॉजी एवं रक्त जांच',
      desc: 'सीबीसी, एलएफटी, केएफटी, लिपिड, थायरॉइड, शुगर व सभी हार्मोनल प्रोफाइल।',
      image: '/pathlab_thumb.jpg',
      badge: 'ऑटोमेटेड लैब'
    },
    {
      id: 'other-tests',
      nameEn: 'Other Tests',
      nameHi: 'अन्य विशेष डायग्नोस्टिक्स',
      desc: 'डिजिटल एक्स-रे, ईसीजी, टीएमटी, ईईजी व अन्य विशेष नैदानिक परीक्षण।',
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
      onOpenAppointment('Home Collection Facility (घर से सैंपल पिकअप - ₹50)');
    }
  };

  return (
    <section id="services" className="services-investigation-section">
      <div className="container services-layout">
        
        {/* Section Header with Search Bar */}
        <div className="services-header-row">
          <div className="services-title-col">
            <span className="services-badge">
              जांच एवं डायग्नोस्टिक सुविधाएं • LAB TEST INVESTIGATION BOOKING
            </span>
            <h2 className="services-main-title">Lab Test Investigation Booking</h2>
            <p className="services-subtitle">
              संत सुखदेव धर्मार्थ चिकित्सालय में आधुनिक डिजिटल सीटी स्कैन, एमआरआई, अल्ट्रासाउंड व अत्याधुनिक पैथोलॉजी जांच की 24 घंटे रियायती सेवा।
            </p>
          </div>

          {/* Search Box as shown in user board */}
          <div className="services-search-wrapper">
            <div className="services-search-box">
              <FaMagnifyingGlass className="search-icon" size={16} />
              <input 
                type="text" 
                placeholder="Search Test... (उदा. CT Scan, MRI, Blood)"
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
                    <span>जांच बुक करें</span>
                    <FaArrowRight size={13} className="action-arrow" />
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

            {/* Right Card: Plaque with text & button from image */}
            <div className="home-collection-card">
              <div className="collection-card-inner">
                <div className="collection-kicker">घर बैठे सैंपल कलेक्शन सुविधा</div>
                <h3 className="collection-heading">HOME COLLECTION FACILITY*</h3>
                <p className="collection-note">
                  Home collection facility available for <strong>PathLab tests only</strong>
                </p>
                <p className="collection-desc-hi">
                  बुजुर्ग, अस्वस्थ या व्यस्त मरीजों के लिए प्रशिक्षित लैब तकनीशियन द्वारा आपके घर से सुरक्षित रक्त एवं मूत्र सैंपल एकत्र करने की विशेष सुविधा।
                </p>

                <div className="collection-actions-row">
                  <button 
                    type="button" 
                    className="btn-add-collection"
                    onClick={handleBookHomeCollection}
                  >
                    <FaCalendarCheck size={16} />
                    <span>Add Home Collection (₹50)</span>
                  </button>

                  <a 
                    href={`tel:${hospitalInfo.emergencyPhone}`} 
                    className="btn-collection-call"
                    title="कॉल करके बुक करें"
                  >
                    <FaPhone size={14} />
                    <span>कॉल करें: {hospitalInfo.emergencyPhone}</span>
                  </a>
                </div>

                <div className="collection-disclaimer">
                  *applicable only within <strong>4 km</strong> from the Hospital (अस्पताल परिसर से 4 किमी के दायरे में मान्य)
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Trust & Security Banner (Safe, Secure, Seamless) */}
        <div className="services-trust-banner">
          <div className="trust-grid">
            
            {/* Feature 1: SAFE */}
            <div className="trust-card">
              <div className="trust-icon-box safe-icon">
                <FaMaskFace size={28} />
              </div>
              <div className="trust-text-wrap">
                <h4 className="trust-title">SAFE</h4>
                <p className="trust-desc">
                  100% स्टेराइल डिस्पोजेबल उपकरण एवं उच्चतम मेडिकल सुरक्षा मानक।
                </p>
              </div>
            </div>

            {/* Feature 2: SECURE */}
            <div className="trust-card">
              <div className="trust-icon-box secure-icon">
                <FaShieldHalved size={28} />
              </div>
              <div className="trust-text-wrap">
                <h4 className="trust-title">SECURE</h4>
                <p className="trust-desc">
                  सटीक कंप्यूटराइज्ड लैब रिपोर्ट एवं पूर्णतः गोपनीय डिजिटल रिकॉर्ड्स।
                </p>
              </div>
            </div>

            {/* Feature 3: SEAMLESS */}
            <div className="trust-card">
              <div className="trust-icon-box seamless-icon">
                <FaHeartPulse size={28} />
              </div>
              <div className="trust-text-wrap">
                <h4 className="trust-title">SEAMLESS</h4>
                <p className="trust-desc">
                  सरल ऑनलाइन बुकिंग, त्वरित सैंपल कलेक्शन एवं उसी दिन त्वरित रिपोर्ट।
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
