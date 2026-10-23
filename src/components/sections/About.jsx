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
    'धर्मार्थ चिकित्सालय',
    'स्वास्थ्य सेवाएं',
    'अलवर',
    'राजस्थान',
    'मानव सेवा ही संकल्प'
  ];

  const milestones = [
    { 
      year: '1999', 
      title: 'सेवा का शुभारंभ', 
      text: 'फरवरी 1999 में 6, मनु मार्ग, अलवर में एक कमरे से चिकित्सा सेवा की ऐतिहासिक शुरुआत हुई।' 
    },
    { 
      year: '₹5', 
      title: 'रियायती उपचार पहल', 
      text: 'शुरुआती दिनों में मात्र ₹5 के सांकेतिक शुल्क पर सात दिनों की दवाइयां देने की निःस्वार्थ व्यवस्था की गई।' 
    },
    { 
      year: '2000', 
      title: 'चिकित्सा सेवाओं का विस्तार', 
      text: 'मरीजों को न्यूनतम शुल्क पर उपचार, विशेषज्ञ परामर्श और आवश्यक चिकित्सा सुविधाएं उपलब्ध कराने के प्रयास आगे बढ़े।' 
    },
    { 
      year: 'आज', 
      title: 'समर्पित जनसेवा एवं स्वास्थ्य', 
      text: 'अस्पताल पूर्ण सेवा-भाव के साथ आमजन तक आधुनिक एवं सुलभ चिकित्सा सुविधाएं पहुंचाने हेतु निरंतर समर्पित है।' 
    }
  ];

  const majorDepts = [
    'सामान्य चिकित्सा विभाग (General Medicine)',
    'शिशु एवं बाल रोग विभाग (Pediatrics)',
    'जनरल फिजिशियन (General Physician)',
    'न्यूरो फिजिशियन (Neuro Physician)',
    'कान, नाक एवं गला रोग विभाग (ENT)',
    'नेत्र रोग विभाग (Ophthalmology)',
    'प्रसूति एवं स्त्री रोग विभाग (Gynaecology)',
    'दंत चिकित्सा विभाग (Dental Care)',
    'हड्डी एवं जोड़ रोग विभाग (Orthopaedics)',
    'अन्य विशेषज्ञ सुपर-स्पेशलिटी सेवाएं'
  ];

  return (
    <section id="about" className="about-history-section">
      <div className="container about-layout">
        
        {/* Top Header Badge */}
        <div className="about-header-badge-row">
          <span className="about-kicker-badge">
            संस्थान का पावन इतिहास एवं विरासत • SACRED HISTORY & HERITAGE
          </span>
        </div>

        {/* Main 2-Column Grid */}
        <div className="about-history-grid">
          
          {/* Left Column: Full History Text */}
          <div className="about-text-column">
            <h2 className="about-main-heading">
              हमारे चिकित्सालय का इतिहास एवं पावन प्रेरणा
            </h2>
            <div className="about-sub-hospital-name">
              संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर (राजस्थान)
            </div>

            <div className="about-story-body">
              <p className="story-lead">
                ईश्वर की असीम कृपा और दीन-दुखियों की सेवा भावना से प्रेरित होकर, <strong>संत सुखदेव शाह धर्मार्थ चिकित्सालय</strong> की स्थापना जरूरतमंद लोगों को सुलभ एवं रियायती चिकित्सा सेवाएं प्रदान करने के पुनीत उद्देश्य से की गई। इस पावन संस्थान की प्रेरणा <strong>परमहंस संत श्री सुखदेव शाह जी महाराज</strong> की पावन स्मृति और उनके सेवा-भाव से जुड़ी है।
              </p>

              <p className="story-paragraph">
                <strong>परमहंस संत श्री सुखदेव शाह जी महाराज</strong> का संपूर्ण जीवन सेवा, करुणा और जनकल्याण की प्रेरणा देता है। इसी पावन भावना को आगे बढ़ाते हुए फरवरी 1999 में अलवर के सुखसागर भवन, 6 मनु मार्ग पर मात्र एक कमरे से अस्पताल की शुरुआत की गई। उस समय मात्र ₹5 के सांकेतिक शुल्क पर सात दिनों की दवाइयां उपलब्ध कराने की व्यवस्था की गई, ताकि आर्थिक रूप से कमजोर वर्ग को भी गुणवत्तापूर्ण उपचार मिल सके।
              </p>

              <p className="story-paragraph">
                वर्ष 2000 में अस्पताल का विस्तार किया गया। मरीजों को न्यूनतम शुल्क पर उपचार, विशेषज्ञ परामर्श और आवश्यक नैदानिक सुविधाएं उपलब्ध कराने की दिशा में निरंतर प्रयास किए गए। समय के साथ अस्पताल में विभिन्न विशेषज्ञ विभागों और आधुनिक जीवन रक्षक चिकित्सा तकनीकों को शामिल किया गया, जिससे अधिक से अधिक लोगों को नया जीवन और स्वास्थ्य लाभ मिल सके।
              </p>
            </div>

            {/* Our Journey Heading & Historical Milestones */}
            <div className="journey-section-wrap">
              <h3 className="section-sub-title">हमारी विकास यात्रा (Our Journey)</h3>
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
              <h3 className="section-sub-title">सेवा भावना, बेहतर उपचार का संकल्प</h3>
              <p className="spirit-desc">
                हमारा उद्देश्य केवल उपचार उपलब्ध कराना ही नहीं, बल्कि प्रत्येक मरीज के साथ आत्मीयता, सम्मान, संवेदनशीलता और पूर्ण सहयोग का व्यवहार करना भी है। यह धर्मार्थ अस्पताल अंतिम पंक्ति के जरूरतमंद व्यक्ति तक उत्तम चिकित्सा सेवाएं पहुंचाने और समाज में स्वास्थ्य के प्रति निरंतर जागरूकता बढ़ाने के लिए कृतसंकल्पित है।
              </p>
            </div>

            {/* Major Medical Departments list */}
            <div className="major-depts-wrap">
              <h4 className="major-depts-heading">प्रमुख विशेषज्ञ चिकित्सा विभाग</h4>
              <p className="major-depts-sub">अस्पताल में विभिन्न स्वास्थ्य आवश्यकताओं के लिए चिकित्सा सेवाएं उपलब्ध कराने का निरंतर प्रयास किया जाता है, जिनमें प्रमुख हैं:</p>
              <div className="major-depts-pills">
                {majorDepts.map((d, i) => (
                  <span key={i} className="major-dept-pill">{d}</span>
                ))}
              </div>
            </div>

            {/* Our Promise Box (Page 3 of PDF) */}
            <div className="our-promise-card">
              <h3 className="promise-title">हमारा पावन संकल्प (Our Promise)</h3>
              <p className="promise-text">
                परमहंस संत श्री सुखदेव शाह जी महाराज की पावन प्रेरणा से हम सेवा, करुणा और मानव कल्याण के सनातन मूल्यों को आगे बढ़ाने का निरंतर प्रयास करते हैं। हमारा अटूट विश्वास है कि श्रेष्ठ स्वास्थ्य सेवाएं समाज के हर व्यक्ति तक सहजता से पहुंचनी चाहिए और आर्थिक अभाव किसी के उपचार में कभी बाधा नहीं बनना चाहिए।
              </p>
              <div className="promise-highlight">
                <strong>संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर</strong> — निःस्वार्थ मानव सेवा ही हमारा संकल्प है।
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
