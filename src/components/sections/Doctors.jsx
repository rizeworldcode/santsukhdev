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
    { id: 'all', label: 'सभी विशेषज्ञ' },
    { id: 'gynaecology', label: 'प्रसूति एवं स्त्री रोग' },
    { id: 'medicine', label: 'सामान्य चिकित्सा (फिजिशियन)' },
    { id: 'surgery', label: 'शल्य चिकित्सा (सर्जरी)' },
    { id: 'ortho', label: 'हड्डी एवं जोड़ रोग' },
    { id: 'pediatrics', label: 'शिशु एवं बाल रोग' }
  ];

  const doctors = [
    {
      id: 1,
      initial: 'अं',
      name: "डॉ. अंकिता शर्मा",
      category: "gynaecology",
      specialty: "प्रसूति एवं स्त्री रोग विशेषज्ञ (Gynecologist & Obstetrician)",
      qualification: "एमबीबीएस, एमएस (प्रसूति एवं स्त्री रोग) [MBBS, MS]",
      room: "103",
      timings: "सोमवार–शनिवार: प्रातः 9:00 बजे से दोपहर 2:00 बजे तक",
      image: "/doctor_1.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 2,
      initial: 'वि',
      name: "डॉ. विकास चौधरी",
      category: "surgery",
      specialty: "जनरल एवं लेप्रोस्कोपिक सर्जन (General & Laparoscopic Surgeon)",
      qualification: "एमबीबीएस, एमएस (जनरल सर्जरी) [MBBS, MS]",
      room: "105",
      timings: "सोमवार–शनिवार: प्रातः 10:00 बजे से दोपहर 3:00 बजे तक",
      image: "/doctor_2.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 3,
      initial: 'रा',
      name: "डॉ. राहुल शर्मा",
      category: "medicine",
      specialty: "जनरल मेडिसिन एवं छाती रोग विशेषज्ञ (Chest Specialist)",
      qualification: "एमबीबीएस, एमडी (जनरल मेडिसिन) [MBBS, MD]",
      room: "102",
      timings: "प्रतिदिन: प्रातः 9:00–1:00 एवं सायं 5:00–7:00 बजे",
      image: "/doctor_3.jpg",
      objectPosition: "center 15%"
    },
    {
      id: 4,
      initial: 'कां',
      name: "डॉ. (श्रीमती) कांता गुप्ता",
      category: "gynaecology",
      specialty: "वरिष्ठ प्रसूति एवं स्त्री रोग विशेषज्ञ (Senior Gynaecologist)",
      qualification: "एमबीबीएस, डीजीओ, एफआईसीओजी [MBBS, DGO, FICOG]",
      room: "104",
      timings: "सोमवार–शनिवार: प्रातः 10:00 बजे से दोपहर 1:00 बजे तक",
      image: "/doctor_4.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 5,
      initial: 'आर',
      name: "डॉ. आर. के. गुप्ता",
      category: "medicine",
      specialty: "वरिष्ठ फिजिशियन एवं जनरल मेडिसिन विशेषज्ञ",
      desc: "सामान्य बीमारियों, बुखार, खांसी, बीपी, शुगर और अन्य स्वास्थ्य समस्याओं के लिए डॉक्टर से परामर्श लें।",
      qualification: "एमबीबीएस, एमडी (मेडिसिन) [MBBS, MD]",
      room: "101",
      timings: "सोमवार से शनिवार: प्रातः 9:00 बजे से दोपहर 2:00 बजे तक",
      image: "/doctor_5.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 6,
      initial: 'ओ',
      name: "डॉ. ओ. पी. यादव",
      category: "ortho",
      specialty: "हड्डी, जोड़ एवं घुटना रोग विशेषज्ञ (Orthopaedic Specialist)",
      desc: "हड्डियों, जोड़ों और घुटनों के दर्द, गठिया तथा चलने-फिरने में परेशानी के लिए परामर्श लें।",
      qualification: "एमबीबीएस, एमएस (ऑर्थोपेडिक्स) [MBBS, MS]",
      room: "106",
      timings: "सोमवार से शनिवार: प्रातः 10:00 बजे से दोपहर 2:00 बजे तक",
      image: "/doctor_6.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 7,
      initial: 'एस',
      name: "डॉ. एस. एन. शर्मा",
      category: "pediatrics",
      specialty: "शिशु एवं बाल रोग विशेषज्ञ (Pediatrician / Child Specialist)",
      desc: "नवजात शिशुओं और बच्चों के स्वास्थ्य, सामान्य बीमारियों एवं टीकाकरण के लिए डॉक्टर से सलाह लें।",
      qualification: "एमबीबीएस, एमडी (पीडियाट्रिक्स), डीसीएच [MBBS, MD, DCH]",
      room: "107",
      timings: "प्रतिदिन: प्रातः 9:00 से 1:00 एवं सायं 4:00 से 6:00 बजे",
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
            हमारे विशेषज्ञ चिकित्सक
          </span>
          <h2 className="section-title">हमारे वरिष्ठ एवं अनुभवी विशेषज्ञ चिकित्सक</h2>
          <p className="section-desc center-block">
            संत सुखदेव शाह धर्मार्थ चिकित्सालय में अनुभवी विशेषज्ञ चिकित्सकों से उत्तम परामर्श प्राप्त करें। मरीजों की सुविधा के लिए सभी प्रमुख चिकित्सा विभागों में नियमित ओपीडी परामर्श उपलब्ध है।
          </p>
        </div>

        {/* Category Filter */}
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
                
                {/* Initial Badge */}
                <div className="doc-initial-avatar">
                  {doc.initial}
                </div>

                {/* Status Badge */}
                <div className="doc-badge-status">
                  <span className="status-dot"></span>
                  <span>ओपीडी परामर्श</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="doc-info">
                <div className="doc-header-info">
                  <h3 className="doc-name">{doc.name}</h3>
                  <span className="doc-specialty">{doc.specialty}</span>
                  {doc.desc && <p className="doc-desc-blurb">{doc.desc}</p>}
                  <div className="doc-qualification-line">
                    <strong>योग्यता:</strong> {doc.qualification}
                  </div>
                </div>

                <div className="doc-meta-row">
                  <span className="doc-room-tag">
                    <FaDoorOpen size={12} />
                    <span>ओपीडी कक्ष: {doc.room}</span>
                  </span>
                </div>

                <div className="doc-timing-box">
                  <div className="timing-label">
                    <FaClock size={11} />
                    <span>परामर्श समय:</span>
                  </div>
                  <div className="timing-value">{doc.timings}</div>
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary doc-book-btn"
                  onClick={() => onOpenAppointment && onOpenAppointment(`${doc.name} - ${doc.specialty}`)}
                >
                  <FaCalendarCheck size={14} />
                  <span>परामर्श समय बुक करें</span>
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

        {/* Consult the Best Doctor in Alwar (Bottom Box) */}
        <div className="consult-best-box">
          <h3 className="consult-best-title">अलवर के सर्वश्रेष्ठ विशेषज्ञ चिकित्सकों से परामर्श लें</h3>
          <p className="consult-best-desc">
            संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर में अनुभवी चिकित्सकों से स्वास्थ्य संबंधी परामर्श लें। यहाँ वरिष्ठ फिजिशियन, हड्डी एवं जोड़ रोग विशेषज्ञ, स्त्री रोग विशेषज्ञ, जनरल सर्जन और बाल रोग विशेषज्ञ उपलब्ध हैं। अपनी परेशानी के अनुसार चिकित्सक चुनें, ओपीडी का समय देखें और आसानी से ऑनलाइन परामर्श बुक करें।
          </p>
        </div>

        {/* Book Doctor Appointment Online (From Page 6 top) */}
        <div className="book-appointment-online-banner">
          <div className="book-online-content">
            <h3 className="book-online-title">डॉक्टर परामर्श ऑनलाइन बुक करें</h3>
            <p className="book-online-p1">
              क्या आप अलवर में विशेषज्ञ चिकित्सक से परामर्श लेना चाहते हैं? अपनी आवश्यकतानुसार विशेषज्ञ डॉक्टर चुनें और ऑनलाइन अपॉइंटमेंट बुक करें। किसी भी सहायता के लिए <strong>8890199768</strong> पर संपर्क करें।
            </p>
            <p className="book-online-p2">
              संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर में मरीजों को उनकी स्वास्थ्य संबंधी जरूरतों के अनुसार त्वरित एवं उचित परामर्श उपलब्ध कराया जाता है।
            </p>
          </div>
          <div className="book-online-actions">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenAppointment && onOpenAppointment('डॉक्टर परामर्श (Doctor Consultation)')}
            >
              <FaCalendarCheck size={15} />
              <span>ऑनलाइन परामर्श बुक करें</span>
            </button>
            <a href="tel:8890199768" className="btn btn-outline">
              <FaPhoneVolume size={14} />
              <span>कॉल करें: 8890199768</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
