import React, { useState } from 'react';
import './Doctors.css';
import { 
  FaAward, 
  FaCalendarCheck, 
  FaClock, 
  FaDoorOpen, 
  FaPhoneVolume, 
  FaStethoscope,
  FaShieldHeart,
  FaHospitalUser,
  FaCheck
} from 'react-icons/fa6';

export default function Doctors({ onOpenAppointment }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'सभी विशेषज्ञ (7)' },
    { id: 'gynae', label: 'स्त्री एवं प्रसूति रोग' },
    { id: 'medicine', label: 'जनरल मेडिसिन' },
    { id: 'surgery', label: 'सर्जरी विभाग' },
    { id: 'ortho', label: 'हड्डी एवं जोड़ रोग' },
    { id: 'pediatrics', label: 'शिशु एवं बाल रोग' }
  ];

  const doctors = [
    {
      id: 1,
      name: "डॉ. अंकिता शर्मा",
      category: "gynae",
      specialty: "स्त्री एवं प्रसूति रोग विशेषज्ञ",
      degree: "MBBS, MS (Obstetrics & Gynaecology)",
      exp: "12+ वर्ष अनुभव",
      room: "ओपीडी कक्ष सं. 103",
      timings: "सोमवार - शनिवार (प्रातः 9:00 - दोपहर 2:00)",
      image: "/doctor_1.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 2,
      name: "डॉ. विकास चौधरी",
      category: "surgery",
      specialty: "जनरल एवं लेप्रोस्कोपिक सर्जन",
      degree: "MBBS, MS (General Surgery)",
      exp: "14+ वर्ष अनुभव",
      room: "ओपीडी कक्ष सं. 105",
      timings: "सोमवार - शनिवार (प्रातः 10:00 - दोपहर 3:00)",
      image: "/doctor_2.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 3,
      name: "डॉ. राहुल वर्मा",
      category: "medicine",
      specialty: "कंसल्टेंट फिजिशियन एवं हृदय रोग विशेषज्ञ",
      degree: "MBBS, MD (General Medicine)",
      exp: "16+ वर्ष अनुभव",
      room: "ओपीडी कक्ष सं. 102",
      timings: "प्रतिदिन (प्रातः 9:00 - 1:00 एवं सायं 5:00 - 7:00)",
      image: "/doctor_3.jpg",
      objectPosition: "center 15%"
    },
    {
      id: 4,
      name: "डॉ. (श्रीमती) कांता गुप्ता",
      category: "gynae",
      specialty: "वरिष्ठ प्रसूति एवं महिला रोग विशेषज्ञ",
      degree: "MBBS, DGO, FICOG (सीनियर कंसल्टेंट)",
      exp: "28+ वर्ष अनुभव",
      room: "ओपीडी कक्ष सं. 104",
      timings: "सोमवार - शनिवार (प्रातः 10:00 - दोपहर 1:00)",
      image: "/doctor_4.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 5,
      name: "डॉ. आर. के. गुप्ता",
      category: "medicine",
      specialty: "वरिष्ठ फिजिशियन एवं चेस्ट स्पेशलिस्ट",
      degree: "MBBS, MD (Medicine)",
      exp: "32+ वर्ष अनुभव",
      room: "ओपीडी कक्ष सं. 101",
      timings: "सोमवार - शनिवार (प्रातः 9:00 - दोपहर 2:00)",
      image: "/doctor_5.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 6,
      name: "डॉ. ओ. पी. यादव",
      category: "ortho",
      specialty: "वरिष्ठ हड्डी एवं जोड़ रोग विशेषज्ञ",
      degree: "MBBS, MS (Orthopaedics)",
      exp: "30+ वर्ष अनुभव",
      room: "ओपीडी कक्ष सं. 106",
      timings: "सोमवार - शनिवार (प्रातः 10:00 - दोपहर 2:00)",
      image: "/doctor_6.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 7,
      name: "डॉ. एस. एन. शर्मा",
      category: "pediatrics",
      specialty: "वरिष्ठ शिशु एवं बाल रोग विशेषज्ञ",
      degree: "MBBS, MD (Pediatrics), DCH",
      exp: "35+ वर्ष अनुभव",
      room: "ओपीडी कक्ष सं. 107",
      timings: "प्रतिदिन (प्रातः 9:00 - दोपहर 1:00 एवं सायं 4:00 - 6:00)",
      image: "/doctor_7.jpg",
      objectPosition: "center 20%"
    }
  ];

  const filteredDoctors = activeCategory === 'all' 
    ? doctors 
    : doctors.filter(doc => doc.category === activeCategory);

  return (
    <section id="doctors" className="doctors-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center center-block">
          <span className="section-tag">
            <FaStethoscope size={13} style={{ marginRight: '6px' }} />
            चिकित्सा विशेषज्ञ मंडल
          </span>
          <h2 className="section-title">हमारे वरिष्ठ विशेषज्ञ चिकित्सक</h2>
          <p className="section-desc center-block">
            संत सुखदेव शाह धर्मार्थ चिकित्सालय में विभिन्न सुपर-स्पेशलिटी क्षेत्रों के अनुभवी, समर्पित व वरिष्ठ चिकित्सकों द्वारा नियमित ओपीडी परामर्श उपलब्ध है।
          </p>
        </div>

        {/* Filter Pills */}
        <div className="doc-filter-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`doc-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="doctor-card">
              {/* Doctor Image Container */}
              <div className="doc-img-wrap">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  loading="lazy" 
                  decoding="async"
                  style={{ objectPosition: doc.objectPosition }}
                />
                
                {/* Status Badge */}
                <div className="doc-badge-status">
                  <span className="status-dot"></span>
                  <span>ओपीडी परामर्श उपलब्ध</span>
                </div>

                {/* Experience Badge */}
                <div className="doc-badge-exp">
                  <FaAward size={13} />
                  <span>{doc.exp}</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="doc-info">
                <div className="doc-header-info">
                  <h3 className="doc-name">{doc.name}</h3>
                  <span className="doc-specialty">{doc.specialty}</span>
                  <span className="doc-degree">{doc.degree}</span>
                </div>

                <div className="doc-meta-row">
                  <span className="doc-room-tag">
                    <FaDoorOpen size={12} />
                    <span>{doc.room}</span>
                  </span>
                </div>

                <div className="doc-timing-box">
                  <div className="timing-label">
                    <FaClock size={11} />
                    <span>ओपीडी समय:</span>
                  </div>
                  <div className="timing-value">{doc.timings}</div>
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary doc-book-btn"
                  onClick={() => onOpenAppointment && onOpenAppointment(`${doc.name} - ${doc.specialty}`)}
                >
                  <FaCalendarCheck size={14} />
                  <span>परामर्श बुक करें</span>
                </button>
              </div>
            </div>
          ))}

          {/* Helpdesk & Emergency Card (Shown when viewing all) */}
          {activeCategory === 'all' && (
            <div className="doctor-card helpdesk-card">
              <div className="helpdesk-icon-bubble">
                <FaHospitalUser size={38} />
              </div>
              
              <div className="helpdesk-content">
                <span className="helpdesk-tag">
                  <FaShieldHeart size={12} /> 24x7 सेवा उपलब्ध
                </span>
                <h3 className="helpdesk-title">ओपीडी एवं डॉक्टर परामर्श सहायता</h3>
                <p className="helpdesk-desc">
                  क्या आप किसी अन्य विशेषज्ञ चिकित्सक या विशिष्ट परामर्श समय के बारे में जानकारी चाहते हैं?
                </p>

                <div className="helpdesk-features">
                  <div className="helpdesk-feat-item">
                    <FaCheck size={12} className="feat-check" />
                    <span>न्यूनतम ₹5 टोकन पर्ची परामर्श</span>
                  </div>
                  <div className="helpdesk-feat-item">
                    <FaCheck size={12} className="feat-check" />
                    <span>ऑन-कॉल आपातकालीन विशेषज्ञ सुविधा</span>
                  </div>
                </div>

                <div className="helpdesk-phone-box">
                  <span className="phone-caption">हेल्पलाइन व ओपीडी रजिस्ट्रेशन:</span>
                  <a href="tel:8890199768" className="phone-number">
                    <FaPhoneVolume size={14} /> 8890199768
                  </a>
                </div>

                <button 
                  type="button" 
                  className="btn btn-outline helpdesk-btn"
                  onClick={() => onOpenAppointment && onOpenAppointment('सामान्य ओपीडी परामर्श')}
                >
                  <FaCalendarCheck size={14} />
                  <span>ऑनलाइन टोकन प्राप्त करें</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Hospital Trust Note */}
        <div className="doctors-bottom-note">
          <div className="note-pill">
            <FaShieldHeart size={15} />
            <span>
              संत सुखदेव शाह धर्मार्थ चिकित्सालय में सभी चिकित्सक सेवा-भाव एवं समर्पण के साथ समर्पित स्वास्थ्य परामर्श प्रदान करते हैं।
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
