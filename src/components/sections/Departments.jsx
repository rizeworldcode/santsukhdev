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
      nameEn: 'सामान्य चिकित्सा',
      nameHi: 'General Medicine / General Physician',
      desc: 'बुखार, खांसी, संक्रमण, मधुमेह (शुगर), रक्तचाप (बीपी) एवं अन्य सामान्य मौसमी बीमारियों की संपूर्ण जांच व उपचार हेतु विशेषज्ञ परामर्श लें।',
      icon: FaPills,
      image: '/gallery/s 4.jpg',
      angle: 'right'
    },
    {
      id: 'eye-care',
      nameEn: 'नेत्र रोग विभाग',
      nameHi: 'Eye Care / Ophthalmology',
      desc: 'आँखों में परेशानी, धुंधला दिखाई देना, मोतियाबिंद (Cataract) एवं आँखों से जुड़ी अन्य सभी समस्याओं के लिए आधुनिक जांच व नेत्र विशेषज्ञ से सलाह उपलब्ध है।',
      icon: FaEye,
      image: '/gallery/s 10.JPG',
      angle: 'left'
    },
    {
      id: 'urology',
      nameEn: 'मूत्र एवं गुर्दा रोग',
      nameHi: 'Urology & Kidney Care',
      desc: 'गुर्दे की पथरी (Kidney Stone), पेशाब में रुकावट या जलन, प्रोस्टेट एवं मूत्र मार्ग से जुड़ी सभी समस्याओं के लिए अनुभवी विशेषज्ञ से परामर्श लें।',
      icon: GiKidneys,
      image: '/ultrasound_thumb.jpg',
      angle: 'right'
    },
    {
      id: 'cardiology',
      nameEn: 'हृदय रोग विभाग',
      nameHi: 'Cardiology / Heart Care',
      desc: 'हृदय रोग, सीने में दर्द, घबराहट, बीपी नियंत्रण एवं दिल के संपूर्ण स्वास्थ्य के लिए वरिष्ठ हृदय रोग विशेषज्ञ परामर्श की सुविधा उपलब्ध है।',
      icon: FaHeartPulse,
      image: '/doppler_thumb.jpg',
      angle: 'left'
    },
    {
      id: 'ent',
      nameEn: 'कान, नाक एवं गला रोग',
      nameHi: 'Ears, Nose & Throat (ENT)',
      desc: 'कान में दर्द, कम सुनाई देना, नाक बंद होना, साइनस, टॉन्सिल एवं गले के संक्रमण की आधुनिक जांच व प्रभावी उपचार हेतु परामर्श लें।',
      icon: TbEar,
      image: '/other_tests_thumb.jpg',
      angle: 'right'
    },
    {
      id: 'gynaecology',
      nameEn: 'प्रसूति एवं स्त्री रोग',
      nameHi: 'Gynaecology & Obstetrics',
      desc: 'महिलाओं की स्वास्थ्य समस्याएं, माहवारी विकार, सुरक्षित मातृत्व, सामान्य व सिजेरियन प्रसव एवं महिला स्वास्थ्य क्लिनिक की संपूर्ण देखभाल।',
      icon: MdPregnantWoman,
      image: '/D 1.jpeg',
      angle: 'left'
    },
    {
      id: 'pediatrics',
      nameEn: 'शिशु एवं बाल रोग',
      nameHi: 'Pediatrics / Child Care',
      desc: 'नवजात शिशुओं एवं बच्चों की सेहत, नियमित टीकाकरण, पोषण व बाल विकास संबंधी सामान्य एवं मौसमी बीमारियों के लिए विशेषज्ञ परामर्श लें।',
      icon: FaBaby,
      image: '/doctor_5.jpg',
      angle: 'right'
    },
    {
      id: 'orthopaedics',
      nameEn: 'हड्डी एवं जोड़ रोग',
      nameHi: 'Orthopaedics & Joint Care',
      desc: 'हड्डियों में दर्द, जटिल फ्रैक्चर, घुटनों की तकलीफ, जोड़ों के दर्द, गठिया (Arthritis) एवं रीढ़ की समस्याओं की सटीक जांच व संपूर्ण उपचार उपलब्ध है।',
      icon: GiJoint,
      image: '/doctor_4.jpg',
      angle: 'left'
    },
    {
      id: 'surgery',
      nameEn: 'शल्य चिकित्सा विभाग',
      nameHi: 'General & Laparoscopic Surgery',
      desc: 'हर्निया, अपेंडिक्स, पित्ताशय की पथरी एवं दूरबीन (Laparoscopy) द्वारा आधुनिक व सुरक्षित सफल ऑपरेशन की उत्तम व्यवस्था उपलब्ध है।',
      icon: GiScalpel,
      image: '/D 2.jpeg',
      angle: 'right'
    },
    {
      id: 'dental',
      nameEn: 'दंत चिकित्सा विभाग',
      nameHi: 'Dental Care / Dentist',
      desc: 'दांतों में दर्द, मसूड़ों की परेशानी, रूट कैनाल (RCT), दांत निकलवाने, नए दांत लगाने एवं दाँतों की सफाई संबंधी सभी सेवाओं के लिए संपर्क करें।',
      icon: FaTooth,
      image: '/doctor_6.jpg',
      angle: 'left'
    },
    {
      id: 'homeopathy',
      nameEn: 'होम्योपैथी चिकित्सा',
      nameHi: 'Homeopathy Department',
      desc: 'पुरानी व जटिल बीमारियों, एलर्जी, चर्म रोग एवं माइग्रेन के सुरक्षित, प्राकृतिक व जड़ से उपचार हेतु योग्य चिकित्सक से परामर्श लें।',
      icon: GiPestleMortar,
      image: '/doctor_7.jpg',
      angle: 'right'
    },
    {
      id: 'physiotherapy',
      nameEn: 'फिजियोथेरेपी एवं पुनर्वास',
      nameHi: 'Physiotherapy & Rehabilitation',
      desc: 'मांसपेशियों में दर्द, जोड़ों की जकड़न, लकवा (Paralysis), चोट या ऑपरेशन के बाद रिकवरी और चलने-फिरने में सुधार हेतु आधुनिक फिजियोथेरेपी सुविधा।',
      icon: TbStretching,
      image: '/gallery/s 3.jpg',
      angle: 'left'
    },
    {
      id: 'acupressure',
      nameEn: 'एक्यूप्रेशर चिकित्सा',
      nameHi: 'Acupressure Department',
      desc: 'प्राकृतिक दबाव बिंदुओं द्वारा साइटिका, सर्वाइकल, नसों का दर्द, तनाव व अनिद्रा जैसी समस्याओं के सुरक्षित प्राकृतिक उपचार की सुविधा उपलब्ध है।',
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
            <span className="dept-badge">उपलब्ध चिकित्सा विभाग • MEDICAL DEPARTMENTS</span>
            <h2 className="dept-title">हमारे प्रमुख चिकित्सा विभाग</h2>
            <p className="dept-subtitle">
              संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर में स्वास्थ्य से जुड़ी विभिन्न समस्याओं के लिए 13 विशेषज्ञ चिकित्सा विभाग संचालित हैं। यहाँ मरीज अपनी आवश्यकतानुसार संबंधित विशेषज्ञ डॉक्टर से परामर्श प्राप्त कर सकते हैं तथा रियायती दरों पर जांच व उपचार की सुविधा का लाभ उठा सकते हैं।
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
