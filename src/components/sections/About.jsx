import React from 'react';
import './About.css';
import { 
  FaHospital, 
  FaCalendarDays, 
  FaHeartPulse, 
  FaHandsPraying, 
  FaTag,
  FaCheck
} from 'react-icons/fa6';

export default function About() {
  const tags = [
    'Charitable Hospital',
    'Healthcare Services',
    'Alwar',
    'Rajasthan',
    'मानव सेवा'
  ];

  const milestones = [
    { 
      year: '1999', 
      title: 'Service Begins', 
      text: 'February 1999 में Manu Marg, Alwar में एक कमरे से Hospital की शुरुआत हुई।' 
    },
    { 
      year: '₹5', 
      title: 'Affordable Treatment Initiative', 
      text: 'शुरुआती दिनों में ₹5 के शुल्क पर सात दिनों की दवाइयाँ देने की व्यवस्था की गई।' 
    },
    { 
      year: '2000', 
      title: 'Expansion of Medical Services', 
      text: 'मरीजों को न्यूनतम शुल्क पर Treatment और आवश्यक चिकित्सा सुविधाएँ उपलब्ध कराने के प्रयास आगे बढ़े।' 
    },
    { 
      year: 'Today', 
      title: 'Dedicated to Service & Health', 
      text: 'Hospital मानव सेवा की भावना के साथ लोगों तक चिकित्सा सुविधाएँ पहुँचाने के उद्देश्य से कार्यरत है।' 
    }
  ];

  const majorDepts = [
    'General Medicine Department',
    'Pediatric Department',
    'General Physician',
    'Neuro Physician',
    'Ear, Nose & Throat (ENT) Department',
    'Eye (Ophthalmology) Department',
    'Gynaecology Department',
    'Dental Department',
    'Orthopaedic Department',
    'Other Specialist Medical Services'
  ];

  return (
    <section id="about" className="about-history-section">
      <div className="container about-layout">
        
        {/* Top Header Badge */}
        <div className="about-header-badge-row">
          <span className="about-kicker-badge">
            OUR SACRED HISTORY & HERITAGE
          </span>
        </div>

        {/* Main 2-Column Grid */}
        <div className="about-history-grid">
          
          {/* Left Column: Full History Text */}
          <div className="about-text-column">
            <h2 className="about-main-heading">
              History & Heritage of Our Hospital
            </h2>
            <div className="about-sub-hospital-name">
              Sant Sukhdev Shah Charitable Hospital, Alwar
            </div>

            <div className="about-story-body">
              <p className="story-lead">
                ईश्वर की कृपा और मानव सेवा की भावना से प्रेरित, <strong>Sant Sukhdev Shah Charitable Hospital</strong> की स्थापना जरूरतमंद लोगों को सुलभ और किफायती चिकित्सा सेवाएँ प्रदान करने के उद्देश्य से की गई। इस संस्थान की प्रेरणा <strong>Param Hans Sant Shri Sukhdev Shah Ji Maharaj</strong> की पावन स्मृति और उनके सेवा-भाव से जुड़ी है।
              </p>

              <p className="story-paragraph">
                <strong>Sant Shri Sukhdev Shah Ji Maharaj</strong> का जीवन सेवा, करुणा और मानव कल्याण की प्रेरणा देता है। इसी भावना को आगे बढ़ाते हुए February 1999 में Alwar के Subhashagar Bhawan, Manu Marg पर एक कमरे से Hospital की शुरुआत की गई। उस समय मात्र ₹5 के शुल्क पर सात दिनों की दवाइयाँ देने की व्यवस्था की गई, ताकि आर्थिक रूप से कमजोर लोगों को भी Treatment मिल सके।
              </p>

              <p className="story-paragraph">
                Year 2000 में Hospital का विस्तार किया गया। मरीजों को न्यूनतम शुल्क पर Treatment, Consultation और आवश्यक चिकित्सा सुविधाएँ उपलब्ध कराने की दिशा में निरंतर प्रयास किए गए। समय के साथ Hospital में विभिन्न चिकित्सा Departmentों और आधुनिक सुविधाओं को शामिल किया गया, जिससे अधिक से अधिक लोगों को लाभ मिल सके।
              </p>
            </div>

            {/* Our Journey Heading & Historical Milestones */}
            <div className="journey-section-wrap">
              <h3 className="section-sub-title">Our Journey</h3>
              <div className="milestones-row">
                {milestones.map((m, idx) => (
                  <div key={idx} className="milestone-badge-box">
                    <span className="milestone-year">{m.year}</span>
                    <strong className="milestone-label">{m.title}</strong>
                    <span className="milestone-desc">{m.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spirit of Service, Promise of Better Treatment */}
            <div className="spirit-service-box">
              <h3 className="section-sub-title">Spirit of Service, Promise of Better Treatment</h3>
              <p className="spirit-desc">
                हमारा उद्देश्य केवल Treatment उपलब्ध कराना ही नहीं, बल्कि हर मरीज के साथ सम्मान, संवेदनशीलता और सहयोग का व्यवहार करना भी है। Hospital जरूरतमंद लोगों तक चिकित्सा सेवाएँ पहुँचाने और समाज में स्वास्थ्य के प्रति जागरूकता बढ़ाने के लिए प्रतिबद्ध है।
              </p>
            </div>

            {/* Major Medical Departments list */}
            <div className="major-depts-wrap">
              <h4 className="major-depts-heading">Major Medical Departments</h4>
              <p className="major-depts-sub">Hospital में विभिन्न स्वास्थ्य आवश्यकताओं के लिए चिकित्सा सेवाएँ उपलब्ध कराने का प्रयास किया जाता है, जिनमें शामिल हैं:</p>
              <div className="major-depts-pills">
                {majorDepts.map((d, i) => (
                  <span key={i} className="major-dept-pill">{d}</span>
                ))}
              </div>
            </div>

            {/* Our Promise Box (Page 3 of PDF) */}
            <div className="our-promise-card">
              <h3 className="promise-title">Our Promise</h3>
              <p className="promise-text">
                Param Hans Sant Shri Sukhdev Shah Ji Maharaj की पावन प्रेरणा से हम सेवा, करुणा और मानव कल्याण के मूल्यों को आगे बढ़ाने का प्रयास करते हैं। हमारा विश्वास है कि बेहतर Healthcare Services हर व्यक्ति तक पहुँचनी चाहिए और आर्थिक स्थिति किसी के Treatment में बाधा नहीं बननी चाहिए।
              </p>
              <div className="promise-highlight">
                <strong>Sant Sukhdev Shah Charitable Hospital, Alwar</strong> — मानव सेवा ही Our Promise है।
              </div>
            </div>

            {/* Tags Strip as shown in PDF */}
            <div className="about-tags-area">
              <div className="tags-label">
                <FaTag size={14} className="tag-icon" />
                <span>Tags:</span>
              </div>
              <div className="tags-list">
                {tags.map((tag, idx) => (
                  <span key={idx} className="about-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Framed Portrait of Sant Sukhdev Shah Ji Maharaj */}
          <div className="about-portrait-column">
            <div className="portrait-frame-card">
              
              {/* Photo */}
              <div className="portrait-img-box">
                <img 
                  src="/snat_1.avif" 
                  alt="Param Hans Sant Sukhdev Shah Ji Maharaj" 
                  className="portrait-full-img"
                  loading="lazy"
                />
                <div className="portrait-gradient-overlay"></div>
              </div>

              {/* Golden/Orange Bottom Caption Plaque matching image */}
              <div className="portrait-caption-plaque">
                <span className="portrait-kicker">Param Hans</span>
                <h3 className="portrait-name">Sant Sukhdev Shah Ji Maharaj</h3>
                <span className="portrait-sub-blessing">परमहंस संत श्री सुखदेव शाह जी महाराज</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
