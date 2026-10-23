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
    { id: 'all', label: 'All Specialists' },
    { id: 'gynaecology', label: 'Gynaecology & Obstetrics' },
    { id: 'medicine', label: 'General Medicine' },
    { id: 'surgery', label: 'Surgery Department' },
    { id: 'ortho', label: 'Orthopaedics & Joints' },
    { id: 'pediatrics', label: 'Pediatrics' }
  ];

  const doctors = [
    {
      id: 1,
      initial: 'A',
      name: "Dr. Ankita Sharma",
      category: "gynaecology",
      specialty: "Gynaecologist & Obstetrician",
      qualification: "MBBS, MS (Obstetrics & Gynaecology)",
      room: "103",
      timings: "Monday–Saturday, 9:00 AM to 2:00 PM",
      image: "/doctor_1.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 2,
      initial: 'V',
      name: "Dr. Vikas Choudhary",
      category: "surgery",
      specialty: "General & Laparoscopic Surgeon",
      qualification: "MBBS, MS (General Surgery)",
      room: "105",
      timings: "Monday–Saturday, 10:00 AM to 3:00 PM",
      image: "/doctor_2.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 3,
      initial: 'R',
      name: "Dr. Rahul Sharma",
      category: "medicine",
      specialty: "General Medicine & Chest Specialist",
      qualification: "MBBS, MD (General Medicine)",
      room: "102",
      timings: "Daily, 9:00 AM–1:00 PM and 5:00–7:00 PM",
      image: "/doctor_3.jpg",
      objectPosition: "center 15%"
    },
    {
      id: 4,
      initial: 'K',
      name: "Dr. (Mrs.) Kanta Gupta",
      category: "gynaecology",
      specialty: "Senior Obstetrician & Gynaecologist",
      qualification: "MBBS, DGO, FICOG",
      room: "104",
      timings: "Monday–Saturday, 10:00 AM to 1:00 PM",
      image: "/doctor_4.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 5,
      initial: 'R',
      name: "Dr. R. K. Gupta",
      category: "medicine",
      specialty: "Physician & General Medicine Doctor in Alwar",
      desc: "सामान्य बीमारियों, Fever, Cough और अन्य स्वास्थ्य समस्याओं के लिए Doctor से Consultation लें।",
      qualification: "MBBS, MD (Medicine)",
      room: "101",
      timings: "Monday to Saturday, 9 AM to 2 PM",
      image: "/doctor_5.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 6,
      initial: 'O',
      name: "Dr. O. P. Yadav",
      category: "ortho",
      specialty: "Orthopaedic Doctor in Alwar",
      desc: "हड्डियों, जोड़ों और घुटनों के दर्द तथा चलने-फिरने में परेशानी के लिए Consultation लें।",
      qualification: "MBBS, MS (Orthopaedics)",
      room: "106",
      timings: "Monday to Saturday, 10 AM to 2 PM",
      image: "/doctor_6.jpg",
      objectPosition: "center 20%"
    },
    {
      id: 7,
      initial: 'S',
      name: "Dr. S. N. Sharma",
      category: "pediatrics",
      specialty: "Pediatrician (Child Specialist) in Alwar",
      desc: "बच्चों के स्वास्थ्य, सामान्य बीमारियों और Pediatrics संबंधी समस्याओं के लिए Doctor से सलाह लें।",
      qualification: "MBBS, MD (Pediatrics), DCH",
      room: "107",
      timings: "Daily, 9 AM to 1 PM and 4 PM to 6 PM",
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
            OUR SPECIALIST DOCTORS
          </span>
          <h2 className="section-title">Our Senior Specialist Doctors</h2>
          <p className="section-desc center-block">
            Sant Sukhdev Shah Charitable Hospital में अनुभवी Specialist Doctors से Consultation प्राप्त करें। मरीजों की जरूरत के अनुसार विभिन्न Departmentों में OPD Consultation की सुविधा उपलब्ध है।
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
                  <span>OPD Consultation</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="doc-info">
                <div className="doc-header-info">
                  <h3 className="doc-name">{doc.name}</h3>
                  <span className="doc-specialty">{doc.specialty}</span>
                  {doc.desc && <p className="doc-desc-blurb">{doc.desc}</p>}
                  <div className="doc-qualification-line">
                    <strong>Qualification:</strong> {doc.qualification}
                  </div>
                </div>

                <div className="doc-meta-row">
                  <span className="doc-room-tag">
                    <FaDoorOpen size={12} />
                    <span>OPD Room: {doc.room}</span>
                  </span>
                </div>

                <div className="doc-timing-box">
                  <div className="timing-label">
                    <FaClock size={11} />
                    <span>OPD Timing:</span>
                  </div>
                  <div className="timing-value">{doc.timings}</div>
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary doc-book-btn"
                  onClick={() => onOpenAppointment && onOpenAppointment(`${doc.name} - ${doc.specialty}`)}
                >
                  <FaCalendarCheck size={14} />
                  <span>Book Appointment</span>
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

        {/* Consult the Best Doctor in Alwar (Bottom Box from Page 5) */}
        <div className="consult-best-box">
          <h3 className="consult-best-title">Consult the Best Doctor in Alwar</h3>
          <p className="consult-best-desc">
            Sant Sukhdev Shah Charitable Hospital, Alwar में अनुभवी Doctors से स्वास्थ्य संबंधी सलाह लें। यहाँ Physician, Orthopaedics Specialist और बच्चों के Doctor उपलब्ध हैं। अपनी परेशानी के अनुसार Doctor चुनें, OPD का समय देखें और आसानी से ऑनलाइन Book Appointment।
          </p>
        </div>

        {/* Book Doctor Appointment Online (From Page 6 top) */}
        <div className="book-appointment-online-banner">
          <div className="book-online-content">
            <h3 className="book-online-title">Book Doctor Appointment Online</h3>
            <p className="book-online-p1">
              क्या आप Alwar में Doctor से Consultation लेना चाहते हैं? अपनी जरूरत के अनुसार Specialist Doctor चुनें और ऑनलाइन Book Appointment। सहायता के लिए <strong>8890199768</strong> पर संपर्क करें।
            </p>
            <p className="book-online-p2">
              Sant Sukhdev Shah Charitable Hospital, Alwar में मरीजों को उनकी स्वास्थ्य संबंधी जरूरतों के अनुसार Doctor से Consultation लेने में सहायता दी जाती है।
            </p>
          </div>
          <div className="book-online-actions">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenAppointment && onOpenAppointment('Doctor Consultation')}
            >
              <FaCalendarCheck size={15} />
              <span>Book Appointment Online</span>
            </button>
            <a href="tel:8890199768" className="btn btn-outline">
              <FaPhoneVolume size={14} />
              <span>कॉल 8890199768</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
