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
    { label: 'Charitable Hospital', hi: 'धर्मार्थ चिकित्सालय' },
    { label: 'Healthcare', hi: 'स्वास्थ्य सेवा' },
    { label: 'Alwar', hi: 'अलवर' },
    { label: 'Rajasthan', hi: 'राजस्थान' }
  ];

  const milestones = [
    { year: '1999', text: 'फरवरी 1999 में 6, मनु मार्ग पर 1 कमरे से ऐतिहासिक शुरुआत' },
    { year: '₹5 टोकन', text: 'मात्र 5 रुपये में 7 दिन की दवाइयों से निःस्वार्थ सेवा आरंभ' },
    { year: '2000', text: 'न्यूनतम शुल्क पर एक्स-रे, पैथलैब, फिजियो व फेको आई सर्जरी' },
    { year: 'आज', text: 'अत्याधुनिक सीटी स्कैन, एमआरआई व 13+ विशेषज्ञ विभाग' }
  ];

  return (
    <section id="about" className="about-history-section">
      <div className="container about-layout">
        
        {/* Top Header Badge */}
        <div className="about-header-badge-row">
          <span className="about-kicker-badge">
            संस्थान का इतिहास एवं पावन प्रेरणा • OUR SACRED HISTORY & HERITAGE
          </span>
        </div>

        {/* Main 2-Column Grid */}
        <div className="about-history-grid">
          
          {/* Left Column: Full History Text */}
          <div className="about-text-column">
            <h2 className="about-main-heading">
              संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर
            </h2>

            <div className="about-story-body">
              <p className="story-lead">
                ईश्वरीय एवं सामाजिक राह पर हमेशा अग्रसर रहने वाले गुरदेव पिता <strong>संतरेन बाबा रघबीर शाह सिंघ जी महाराज</strong> कुछ ऐसा सामाजिक एवं धार्मिक कार्य करने की सोच रहे थे जिससे प्राणियों का उद्धार हो सके। अंततः उन्होंने चिकित्सा सेवा को सर्वाधिक महत्व देते हुए अत्यधिक साधारण शुल्क पर एक चिकित्सालय खोलने का निर्णय किया।
              </p>

              <p className="story-paragraph">
                उनके दादाजी <strong>‘परमहंस संत श्री सुखदेव शाह जी महाराज’</strong> स्वयं गरीबों के लिए आँखों की दवा बनाकर निःशुल्क वितरित किया करते थे। अतः उनकी स्मृति को चिरंजीव करने के लिए संत सुखदेव शाह धर्मार्थ चिकित्सालय की शुरूआत फरवरी 1999 में 6, सुखसागर भवन, मनु मार्ग, अलवर में एक कमरे से की गई। मात्र 5 रूपये के शुल्क के साथ सात दिन की दवाईयां निःशुल्क देने से आरंभ हुई सेवा परमपिता परमात्मा एवं गुरू कृपा के द्वारा समयानुसार दिन दुगनी रात चौगुनी को चरित्रार्थ करते हुए आगे बढ़ती गई। सन् 2000 में न्यूनतम लागत शुल्क पर आम लोगों को एक्स-रे, पैथ लैब एवं फिजि़योथैरेपी सेवाएं उपलब्ध करा दी गईं। शीघ्र ही फेको मशीन से आँखों के ऑपरेशन व लैपरोस्कोपिक सर्जरी की सुविधा भी उपलब्ध करवा दी गई। ईश्वरीय कृपा, श्री सुखमनी साहिब के पाठ एवं गुरबाणी कीर्तन से एकत्रित भेंटा द्वारा मंगायी गई दवाईयों से रोगी जल्दी ठीक होने लगे।
              </p>

              <div className="story-highlight-box">
                <FaHandsPraying className="highlight-quote-icon" size={24} />
                <p>
                  समयानुसार, इसमें <strong>स्त्री-रोग विशेषज्ञ, बाल चिकित्सक, जनरल फिज़ीशियन, न्यूरो फिज़ीशियन, कान, नाक, गला रोग विशेषज्ञ, नेत्र रोग विशेषज्ञ, सर्जिकल विभाग, दन्त विभाग, आर्थोपेडिक विभाग</strong> इत्यादि जुड़ते चले गये।
                </p>
              </div>

              <p className="story-paragraph">
                गुरू महाराज जी की असीम कृपा, रोगियों की दुआएं, संगत की आशीषें एवं अस्पताल प्रबंधकों का कुशल प्रबंधन अपना रंग लाया और आज इस अस्पताल की अनेकों उपलब्धियां गिनाएं नहीं गिनी जा सकतीं। आज यह अस्पताल एकदम अत्याधुनिक मशीनों से सुसज्जित है।
              </p>
            </div>

            {/* Historical Milestones Mini-Cards */}
            <div className="milestones-row">
              {milestones.map((m, idx) => (
                <div key={idx} className="milestone-badge-box">
                  <span className="milestone-year">{m.year}</span>
                  <span className="milestone-desc">{m.text}</span>
                </div>
              ))}
            </div>

            {/* Tags Strip as shown in image */}
            <div className="about-tags-area">
              <div className="tags-label">
                <FaTag size={14} className="tag-icon" />
                <span>Tags:</span>
              </div>
              <div className="tags-list">
                {tags.map((tag, idx) => (
                  <span key={idx} className="about-tag-pill">
                    <strong>{tag.label}</strong>
                    <span className="tag-hi">({tag.hi})</span>
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
