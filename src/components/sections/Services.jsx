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
      nameHi: 'Computed Tomography Scan',
      desc: 'CT Scan शरीर के अंदरूनी हिस्सों की विस्तृत तस्वीरें तैयार करने वाली एक आधुनिक Test है। Doctor की सलाह के अनुसार इसका उपयोग सिर, छाती, पेट और शरीर के अन्य हिस्सों की Test के लिए किया जा सकता है।',
      image: '/ct_scan_thumb.jpg',
      badge: '24/7 सेवा'
    },
    {
      id: 'hrct',
      nameEn: 'HRCT',
      nameHi: 'High-Resolution CT Scan',
      desc: 'HRCT एक विशेष प्रकार की CT Test है, जिसका उपयोग मुख्य रूप से Lungs और छाती से जुड़ी समस्याओं का अधिक विस्तार से मूल्यांकन करने के लिए किया जाता है। यह Test Doctor की सलाह के अनुसार की जाती है।',
      image: '/hrct_thumb.jpg',
      badge: 'एचडी इमेजिंग'
    },
    {
      id: 'doppler',
      nameEn: 'Doppler',
      nameHi: 'Color Doppler & Vascular Test',
      desc: 'Doppler Test की मदद से शरीर की Blood Vessels में Blood Flow का मूल्यांकन किया जा सकता है। Doctor आवश्यकता के अनुसार नसों और धमनियों से जुड़ी समस्याओं की Test के लिए इसकी सलाह दे सकते हैं।',
      image: '/doppler_thumb.jpg',
      badge: 'कलर मैपिंग'
    },
    {
      id: 'ncct',
      nameEn: 'NCCT',
      nameHi: 'Non-Contrast CT Scan',
      desc: 'NCCT एक ऐसी CT Test है जिसमें Contrast Dye का उपयोग नहीं किया जाता। Doctor की सलाह के अनुसार इसका उपयोग सिर, छाती, पेट या शरीर के अन्य हिस्सों की Test के लिए किया जा सकता है।',
      image: '/ncct_thumb.jpg',
      badge: 'त्वरित रिपोर्ट'
    },
    {
      id: 'mri',
      nameEn: 'MRI Scan',
      nameHi: 'Detailed Internal Body Scan',
      desc: 'MRI की मदद से शरीर के अंदर की तस्वीरें लेकर बीमारी का पता लगाने में मदद मिलती है। यह Test दिमाग, Spine, नसों और शरीर के अन्य हिस्सों की समस्याओं को समझने के लिए की जाती है।',
      image: '/mri_thumb.jpg',
      badge: 'एडवांस्ड एमआरआई'
    },
    {
      id: 'ultrasound',
      nameEn: 'Ultrasound',
      nameHi: 'Easy Internal Body Scan',
      desc: 'Ultrasound की मदद से पेट, Liver, Kidney और शरीर के दूसरे अंगों की Test की जाती है। Pregnancy के दौरान बच्चे के विकास और स्वास्थ्य की जानकारी लेने के लिए भी यह Test उपयोगी होती है।',
      image: '/ultrasound_thumb.jpg',
      badge: 'डिजिटल सोनोग्राफी'
    },
    {
      id: 'pathlab',
      nameEn: 'Pathology Lab Tests',
      nameHi: 'Blood Test & Pathology Lab Tests',
      desc: 'Blood Test और अन्य Lab Test से शरीर में होने वाली समस्याओं का पता लगाने में मदद मिलती है। यहाँ उपलब्ध Pathology Test के माध्यम से Doctor को बीमारी समझने और आगे के Treatment की योजना बनाने में सहायता मिलती है।',
      image: '/pathlab_thumb.jpg',
      badge: 'ऑटोमेटेड लैब'
    },
    {
      id: 'other-tests',
      nameEn: 'Other Tests',
      nameHi: 'X-Ray, ECG, TMT, EEG & More',
      desc: 'Hospital में विभिन्न प्रकार की Test की सुविधा उपलब्ध है। इसमें Digital X-Ray, ECG, TMT, EEG और अन्य विशेष Test शामिल हैं। अपनी जरूरत के अनुसार उपलब्ध Test और उनकी जानकारी के लिए Hospital से संपर्क करें।',
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
      onOpenAppointment('Home Collection Facility (घर से सैंपल पिकअप - ₹50 Extra)');
    }
  };

  return (
    <section id="services" className="services-investigation-section">
      <div className="container services-layout">
        
        {/* Section Header with Search Bar */}
        <div className="services-header-row">
          <div className="services-title-col">
            <span className="services-badge">
              DIAGNOSTIC & TEST FACILITIES
            </span>
            <h2 className="services-main-title">Lab Test Investigation Booking</h2>
            <p className="services-subtitle">
              Sant Sukhdev Shah Charitable Hospital, Alwar में मरीजों की Test संबंधी जरूरतों के लिए विभिन्न Diagnostic सुविधाओं की जानकारी और बुकिंग की सुविधा उपलब्ध कराने का उद्देश्य है। यहाँ CT Scan, HRCT, Doppler और NCCT जैसी Testों के बारे में जानकारी प्राप्त कर सकते हैं। सही Test से Doctors को मरीज की स्थिति समझने और आगे के Treatment के बारे में निर्णय लेने में सहायता मिलती है। अपनी जरूरत के अनुसार Test चुनें और बुकिंग या उपलब्धता की पुष्टि के लिए Hospital से संपर्क करें।
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
                title={`${test.nameEn} - Book Test`}
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
                    <span>Book Test →</span>
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
                <div className="collection-kicker">🏠 Home Sample Collection Facility</div>
                <h3 className="collection-heading">अब Pathology Test के लिए घर से Hospital आने की जरूरत नहीं।</h3>
                <p className="collection-desc-hi">
                  अगर आप बुजुर्ग हैं, घर से बाहर जाने में परेशानी होती है या किसी कारण Hospital नहीं आ सकते, तो आपके लिए घर से ब्लड Sample Collection की सुविधा उपलब्ध है।
                </p>
                <p className="collection-desc-hi">
                  हमारा प्रशिक्षित स्टाफ आपके घर आकर सुरक्षित तरीके से सैंपल कलेक्ट करने में मदद करता है। इससे आप घर बैठे आसानी से अपनी Pathology Test करवा सकते हैं।
                </p>

                <div className="collection-charge-banner">
                  <div className="charge-details">
                    <span className="charge-caption">Home Collection Charges</span>
                    <strong className="charge-amount">₹50 Extra</strong>
                  </div>
                  <div className="charge-contact">
                    <span className="charge-caption">Contact:</span>
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
                    <span>Book Home Collection (₹50)</span>
                  </button>

                  <a 
                    href="tel:8890199768" 
                    className="btn-collection-call"
                    title="कॉल करके बुक करें"
                  >
                    <FaPhone size={14} />
                    <span>कॉल: 8890199768</span>
                  </a>
                </div>

                <div className="collection-disclaimer">
                  <strong>Note:</strong> घर से Sample Collection की सुविधा केवल Pathology Test के लिए उपलब्ध है। यह सुविधा Hospital से 4 किलोमीटर के दायरे में लागू है।
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Trust & Security Banner (Safe, Secure, Seamless from PDF) */}
        <div className="services-trust-banner">
          <div className="trust-grid">
            
            {/* Feature 1: SAFE */}
            <div className="trust-card">
              <div className="trust-icon-box safe-icon">
                <FaMaskFace size={28} />
              </div>
              <div className="trust-text-wrap">
                <div className="trust-top-sub">SAFE</div>
                <h4 className="trust-title">Safe Tests</h4>
                <p className="trust-desc">
                  Safe Test उपकरणों और बेहतर मेडिकल सुरक्षा मानकों के साथ मरीजों की देखभाल का ध्यान।
                </p>
              </div>
            </div>

            {/* Feature 2: SECURE */}
            <div className="trust-card">
              <div className="trust-icon-box secure-icon">
                <FaShieldHalved size={28} />
              </div>
              <div className="trust-text-wrap">
                <div className="trust-top-sub">SECURE</div>
                <h4 className="trust-title">Secure & Confidential</h4>
                <p className="trust-desc">
                  Test की सटीक जानकारी, Digital Report और मरीजों की जानकारी की गोपनीयता का ध्यान।
                </p>
              </div>
            </div>

            {/* Feature 3: SEAMLESS */}
            <div className="trust-card">
              <div className="trust-icon-box seamless-icon">
                <FaHeartPulse size={28} />
              </div>
              <div className="trust-text-wrap">
                <div className="trust-top-sub">SEAMLESS</div>
                <h4 className="trust-title">Easy & Convenient Service</h4>
                <p className="trust-desc">
                  आसान Online Booking, घर से Sample Collection और Test रिपोर्ट पाने की सुविधाजनक प्रक्रिया।
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
