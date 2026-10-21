import React, { useState } from 'react';
import './Departments.css';
import { 
  FaPills, 
  FaEye, 
  FaHeartPulse, 
  FaBaby, 
  FaTooth, 
  FaArrowRight, 
  FaUserDoctor,
  FaPlus
} from 'react-icons/fa6';
import { 
  GiKidneys, 
  GiScalpel, 
  GiPestleMortar, 
  GiJoint 
} from 'react-icons/gi';
import { 
  TbEar, 
  TbStretching 
} from 'react-icons/tb';
import { 
  MdPregnantWoman, 
  MdTouchApp 
} from 'react-icons/md';

export default function Departments({ onOpenAppointment }) {
  const [activeCardId, setActiveCardId] = useState(null);
  const departments = [
    {
      id: 'general-medicine',
      nameEn: 'General Medicine',
      nameHi: 'सामान्य चिकित्सा',
      desc: 'बुखार, संक्रमण, मधुमेह, उच्च रक्तचाप एवं सामान्य मौसमी बीमारियों का संपूर्ण उपचार।',
      icon: FaPills,
      image: '/gallery/s 4.jpg',
      angle: 'right'
    },
    {
      id: 'eye-care',
      nameEn: 'Eye Care',
      nameHi: 'नेत्र रोग विभाग',
      desc: 'आधुनिक दृष्टि जांच, मोतियाबिंद, ग्लूकोमा व आंखों की संपूर्ण देखभाल व परामर्श।',
      icon: FaEye,
      image: '/gallery/s 10.JPG',
      angle: 'left'
    },
    {
      id: 'urology',
      nameEn: 'Urology',
      nameHi: 'मूत्र एवं गुर्दा रोग',
      desc: 'किडनी स्टोन, प्रोस्टेट, मूत्र मार्ग संक्रमण व गुर्दे संबंधी समस्याओं का सटीक निदान।',
      icon: GiKidneys,
      image: '/ultrasound_thumb.jpg',
      angle: 'right'
    },
    {
      id: 'cardiology',
      nameEn: 'Cardiology',
      nameHi: 'हृदय रोग विभाग',
      desc: 'ईसीजी, ईकोकार्डियोग्राफी, बीपी नियंत्रण एवं हृदय रोगों का विशेषज्ञ परामर्श।',
      icon: FaHeartPulse,
      image: '/doppler_thumb.jpg',
      angle: 'left'
    },
    {
      id: 'ent',
      nameEn: 'Ears, Nose & Throat',
      nameHi: 'कान, नाक एवं गला (ENT)',
      desc: 'साइनस, टॉन्सिल, एलर्जी, सुनने की कमजोरी व गले के संक्रमण का प्रभावी उपचार।',
      icon: TbEar,
      image: '/other_tests_thumb.jpg',
      angle: 'right'
    },
    {
      id: 'gynaecology',
      nameEn: 'Gynaecology & Obstetrics',
      nameHi: 'प्रसूति एवं स्त्री रोग',
      desc: 'सुरक्षित मातृत्व, सामान्य व सिजेरियन प्रसव, इनफर्टिलिटी व महिला स्वास्थ्य क्लिनिक।',
      icon: MdPregnantWoman,
      image: '/D 1.jpeg',
      angle: 'left'
    },
    {
      id: 'pediatrics',
      nameEn: 'Pediatrics',
      nameHi: 'शिशु एवं बाल रोग',
      desc: 'नवजात शिशु देखभाल, नियमित टीकाकरण, पोषण व बाल विकास विशेष परामर्श।',
      icon: FaBaby,
      image: '/doctor_5.jpg',
      angle: 'right'
    },
    {
      id: 'orthopaedics',
      nameEn: 'Orthopaedics & Joints',
      nameHi: 'हड्डी एवं जोड़ रोग',
      desc: 'जोड़ प्रत्यारोपण (नी/हिप), आर्थराइटिस, जटिल फ्रैक्चर, रीढ़ व कमर दर्द का इलाज।',
      icon: GiJoint,
      image: '/doctor_4.jpg',
      angle: 'left'
    },
    {
      id: 'surgery',
      nameEn: 'Surgery',
      nameHi: 'शल्य चिकित्सा / सर्जरी',
      desc: 'हर्निया, अपेंडिक्स, पित्ताशय की पथरी व दूरबीन (Laparoscopy) द्वारा सफल सर्जरी।',
      icon: GiScalpel,
      image: '/D 2.jpeg',
      angle: 'right'
    },
    {
      id: 'dental',
      nameEn: 'Dental Care',
      nameHi: 'दंत चिकित्सा विभाग',
      desc: 'रूट कैनाल (RCT), दांत निकालना, स्केलिंग, सफाई व ओरल हाइजीन उपचार।',
      icon: FaTooth,
      image: '/doctor_6.jpg',
      angle: 'left'
    },
    {
      id: 'homeopathy',
      nameEn: 'Homeopathy',
      nameHi: 'होम्योपैथी चिकित्सा',
      desc: 'पुरानी बीमारियों, चर्म रोग, माइग्रेन व एलर्जी का जड़ से सुरक्षित प्राकृतिक निदान।',
      icon: GiPestleMortar,
      image: '/doctor_7.jpg',
      angle: 'right'
    },
    {
      id: 'physiotherapy',
      nameEn: 'Physiotherapy',
      nameHi: 'फिजियोथेरेपी एवं पुनर्वास',
      desc: 'लकवा (Paralysis), स्पोर्ट्स इंजरी, नसों के दर्द व सर्जरी बाद रिहैबिलिटेशन।',
      icon: TbStretching,
      image: '/gallery/s 3.jpg',
      angle: 'left'
    },
    {
      id: 'acupressure',
      nameEn: 'Acupressure',
      nameHi: 'एक्यूप्रेशर चिकित्सा',
      desc: 'पारंपरिक दबाव बिंदुओं द्वारा साइटिका, सर्वाइकल, तनाव व नसों का प्राकृतिक उपचार।',
      icon: MdTouchApp,
      image: '/gallery/s 5.jpg',
      angle: 'right'
    }
  ];

  return (
    <section id="departments" className="departments-section">
      <div className="container departments-layout">
        
        {/* Section Header with "Team of Doctors >" button */}
        <div className="dept-section-header">
          <div className="dept-header-left">
            <span className="dept-badge">उपलब्ध विभाग • AVAILABLE DEPARTMENTS</span>
            <h2 className="dept-title">हमारे प्रमुख चिकित्सा विभाग</h2>
            <p className="dept-subtitle">
              संत सुखदेव चिकित्सालय में अनुभवी सुपर-स्पेशलिस्ट चिकित्सकों और आधुनिक उपकरणों से सुसज्जित 13 विशेषज्ञ विभाग।
            </p>
          </div>

          <a href="#doctors" className="btn-team-doctors">
            <FaUserDoctor size={17} className="btn-doc-icon" />
            <span>चिकित्सक दल देखें (Team of Doctors)</span>
            <FaArrowRight size={14} className="team-arrow" />
          </a>
        </div>

        {/* 13 Departments - Postal Reveal / Glimpse Cards Grid */}
        <div className="departments-grid">
          {departments.map((dept, idx) => {
            const IconComponent = dept.icon;
            const angleClass = dept.angle || (idx % 2 === 0 ? 'right' : 'left');
            const isRevealed = activeCardId === dept.id;

            return (
              <div 
                key={dept.id} 
                className={`postal-card-wrapper angle-${angleClass} ${isRevealed ? 'is-revealed' : ''}`}
                onMouseEnter={() => setActiveCardId(dept.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={() => {
                  // Toggle reveal animation on click/tap without opening the appointment modal
                  setActiveCardId(prev => prev === dept.id ? null : dept.id);
                }}
                title={dept.nameEn}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCardId(prev => prev === dept.id ? null : dept.id);
                  }
                }}
              >
                {/* 1. Base Glassmorphic Card Surface (Default Visible State) */}
                <div className="postal-card-front">
                  {/* Top Bar: Department Icon & Framer-style Plus Badge */}
                  <div className="postal-top-bar">
                    <div className="dept-icon-wrapper">
                      <IconComponent size={24} className="dept-icon" />
                    </div>
                    <div className="framer-plus-badge" aria-hidden="true">
                      <FaPlus size={11} className="plus-icon" />
                    </div>
                  </div>

                  {/* Body: English Name, Hindi Name, and Description */}
                  <div className="postal-card-body">
                    <h3 className="dept-name-en">{dept.nameEn}</h3>
                    <span className="dept-name-hi">{dept.nameHi}</span>
                    <p className="dept-card-desc">{dept.desc}</p>
                  </div>

                  {/* Bottom Action */}
                  <div 
                    className="postal-card-action"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCardId(prev => prev === dept.id ? null : dept.id);
                    }}
                  >
                    <span className="action-label">विभाग जानकारी</span>
                    <div className="action-circle">
                      <FaArrowRight size={13} />
                    </div>
                  </div>
                </div>

                {/* 2. Postal Reveal Photo Layer (Brought IN FRONT on hover/tap: z-index: 10) */}
                <div className="postal-reveal-photo" aria-hidden="true">
                  <img 
                    src={dept.image} 
                    alt={dept.nameEn} 
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/logo.png';
                    }}
                  />
                  {/* Dark Gradient Overlay for text readability on top of photo */}
                  <div className="postal-photo-overlay" />

                  {/* Top Header on Photo: Glass Icon + Stamp Tag */}
                  <div className="postal-photo-top">
                    <div className="postal-photo-icon-box">
                      <IconComponent size={20} />
                    </div>
                    <div className="postal-photo-stamp">
                      <span>{dept.nameEn}</span>
                    </div>
                  </div>

                  {/* Bottom Info on Photo: Titles, Description & Action */}
                  <div className="postal-photo-bottom">
                    <div className="postal-photo-titles">
                      <h3 className="postal-photo-title-en">{dept.nameEn}</h3>
                      <span className="postal-photo-title-hi">{dept.nameHi}</span>
                    </div>
                    <p className="postal-photo-desc">{dept.desc}</p>
                    <div 
                      className="postal-photo-action"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCardId(prev => prev === dept.id ? null : dept.id);
                      }}
                    >
                      <span>सुविधाएं एवं विवरण</span>
                      <div className="postal-photo-arrow">
                        <FaArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
