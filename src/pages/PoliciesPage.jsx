import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './PoliciesPage.css';
import PageBanner from '../components/common/PageBanner';
import { hospitalInfo } from '../data/hospitalData';
import { 
  FaShieldHalved, 
  FaScaleBalanced, 
  FaCopyright, 
  FaReceipt, 
  FaCheck, 
  FaPrint, 
  FaEnvelope, 
  FaPhone, 
  FaCalendarDays,
  FaCircleInfo,
  FaTriangleExclamation
} from 'react-icons/fa6';

export default function PoliciesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'privacy';
  const [activeTab, setActiveTab] = useState(currentTab);

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl && ['privacy', 'terms', 'dmca', 'refund'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [searchParams]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSearchParams({ tab: tabKey });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handlePrint = () => {
    window.print();
  };

  const tabsConfig = [
    { key: 'privacy', label: 'गोपनीयता नीति (Privacy Policy)', icon: <FaShieldHalved /> },
    { key: 'terms', label: 'उपयोग नियम (Terms of Use)', icon: <FaScaleBalanced /> },
    { key: 'dmca', label: 'कॉपीराइट नीति (DMCA)', icon: <FaCopyright /> },
    { key: 'refund', label: 'रिफंड व टोकन नीति (Refund Policy)', icon: <FaReceipt /> }
  ];

  return (
    <div className="policies-page-view">
      {/* Top Banner */}
      <PageBanner 
        tag="संस्थान नीतियां एवं कानूनी दिशा-निर्देश • OFFICIAL HOSPITAL POLICIES"
        title="संस्थान नीतियां (Our Policies)"
        subtitle="संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर की गोपनीयता नीति, उपयोग नियम, कॉपीराइट (DMCA) एवं रिफंड नीति का संपूर्ण आधिकारिक विवरण।"
        breadcrumb="संस्थान नीतियां"
      />

      {/* Sticky Tab Navigation Bar */}
      <nav className="policies-nav-section" aria-label="पॉलिसी टैब्स">
        <div className="container">
          <div className="policies-tabs-container">
            {tabsConfig.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`policy-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.key)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <section className="policy-content-section">
        <div className="container">
          <div className="policy-card-wrapper" id="printable-policy">
            
            {/* =========================================================================
                TAB 1: PRIVACY POLICY (गोपनीयता नीति)
                ========================================================================= */}
            {activeTab === 'privacy' && (
              <div className="policy-pane">
                <div className="policy-header-block">
                  <div className="policy-title-wrap">
                    <div className="policy-effective-pill">
                      <FaCalendarDays size={12} />
                      <span>01 जनवरी, 2021 से प्रभावी (Effective from Jan 01, 2021)</span>
                    </div>
                    <h1 className="policy-main-title">गोपनीयता नीति (Privacy Policy)</h1>
                    <p className="policy-domain-sub">
                      संत सुखदेव शाह धर्मार्थ चिकित्सालय पोर्टल (www.sssdc-hospital.com)
                    </p>
                  </div>

                  <div className="policy-action-btns">
                    <button type="button" className="btn-policy-print" onClick={handlePrint}>
                      <FaPrint /> <span>प्रिंट / PDF सेव करें</span>
                    </button>
                  </div>
                </div>

                <div className="policy-body-content">
                  
                  {/* Clause 1 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">01</span>
                      <h2 className="clause-title">कृपया ध्यानपूर्वक पढ़ें (Please Read Carefully)</h2>
                    </div>
                    <p className="clause-text">
                      <strong>SSSDC-Hospital.com (संत सुखदेव शाह धर्मार्थ चिकित्सालय)</strong> अपने आगंतुकों, मरीजों एवं उपयोगकर्ताओं की गोपनीयता का पूर्ण सम्मान करता है। यह गोपनीयता नीति यह स्पष्ट करती है कि हम आपकी व्यक्तिगत जानकारी को किस प्रकार एकत्र, उपयोग और साझा करते हैं, तथा उस जानकारी पर आपके क्या अधिकार हैं।
                    </p>
                    <p className="clause-text">
                      यह नीति हमारी वेबसाइट, मोबाइल सेवाओं, ऑनलाइन टोकन प्रणाली एवं संबंधित सेवाओं पर लागू होती है। हमारी सेवाओं का उपयोग करने से पूर्व कृपया इस नीति को ध्यानपूर्वक पढ़ें। यदि आप इन नीतियों से सहमत नहीं हैं, तो कृपया सेवाओं का उपयोग तुरंत बंद कर दें। किसी भी प्रश्न हेतु आप हमसे <a href="mailto:connect.sssdc@gmail.com">connect.sssdc@gmail.com</a> पर संपर्क कर सकते हैं।
                    </p>
                  </div>

                  {/* Clause 2 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">02</span>
                      <h2 className="clause-title">हम कौन सी व्यक्तिगत जानकारी एकत्र करते हैं (Information We Collect)</h2>
                    </div>
                    <p className="clause-text">
                      जब आप हमारी वेबसाइट पर कोई फॉर्म भरते हैं अथवा सेवाओं का लाभ लेते हैं, तो हम निम्नलिखित जानकारी प्राप्त और सुरक्षित करते हैं:
                    </p>
                    <ul className="policy-feature-list">
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>पहचान संबंधी जानकारी:</strong> मरीज का नाम, पता, ईमेल पता, मोबाइल नंबर, आयु एवं लिंग।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>तकनीकी एवं सत्र डेटा:</strong> आईपी पता, ब्राउज़र का प्रकार, पृष्ठ पर व्यतीत किया गया समय, तथा इंटरेक्शन डेटा।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>लेन-देन विवरण:</strong> टोकन बुकिंग, लैब टेस्ट या दान से संबंधित भुगतान रसीद विवरण।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>प्रतिक्रिया एवं सुझाव:</strong> आपके द्वारा दिए गए सुझाव, समीक्षाएं एवं संपर्क संदेश।</span>
                      </li>
                    </ul>
                  </div>

                  {/* Clause 3 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">03</span>
                      <h2 className="clause-title">हम जानकारी कैसे एकत्र करते हैं (How We Collect Information)</h2>
                    </div>
                    <p className="clause-text">
                      जब आप हमारी वेबसाइट पर कोई ओपीडी परामर्श टोकन बुक करते हैं, पैथोलॉजी टेस्ट या दान हेतु लेन-देन करते हैं, तो उस प्रक्रिया के तहत आपकी सहमति से नाम, पता और संपर्क विवरण एकत्र किया जाता है। आपकी जानकारी का उपयोग केवल संबंधित चिकित्सीय व प्रशासनिक उद्देश्यों के लिए ही किया जाएगा।
                    </p>
                  </div>

                  {/* Clause 4 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">04</span>
                      <h2 className="clause-title">हम व्यक्तिगत जानकारी क्यों एकत्र करते हैं (Purpose of Collection)</h2>
                    </div>
                    <ul className="policy-feature-list">
                      <li><FaCheck className="list-check-icon" /><span>सुगम चिकित्सा सेवाएं, ओपीडी परामर्श एवं जांच सुविधाएं संचालित करने हेतु।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>मरीजों को निरंतर ग्राहक सहायता एवं आपातकालीन तकनीकी सहायता प्रदान करने हेतु।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>सेवा संबंधी आवश्यक सूचनाएं, लैब रिपोर्ट अपडेट्स एवं अस्पताल समाचार प्रेषित करने हेतु।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>अस्पताल सेवाओं की गुणवत्ता सुधारने हेतु समग्र सांख्यिकीय डेटा तैयार करने हेतु।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>लागू राष्ट्रीय कानूनों, मेडिकल मानकों एवं नियमों का अनुपालन सुनिश्चित करने हेतु।</span></li>
                    </ul>
                  </div>

                  {/* Clause 5 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">05</span>
                      <h2 className="clause-title">डेटा भंडारण, उपयोग, साझाकरण एवं सुरक्षा (Data Storage & Security)</h2>
                    </div>
                    <p className="clause-text">
                      हमारा डिजिटल प्लेटफॉर्म सुरक्षित क्लाउड अवसंरचना एवं फायरवॉल के पीछे प्रबंधित है। सभी ऑनलाइन भुगतान गेटवे <strong>PCI-DSS (पेमेंट कार्ड इंडस्ट्री डेटा सिक्योरिटी स्टैंडर्ड्स)</strong> के कड़े सुरक्षा मानकों का पालन करते हैं, जो वीज़ा, मास्टरकार्ड, रुपे एवं अमेरिकन एक्सप्रेस जैसी संस्थाओं द्वारा समर्थित हैं। हम किसी भी मरीज या आगंतुक का व्यक्तिगत डेटा किसी व्यावसायिक तृतीय पक्ष को विक्रय या साझा नहीं करते हैं।
                    </p>
                  </div>

                  {/* Clause 6 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">06</span>
                      <h2 className="clause-title">आगंतुकों के साथ संवाद (Communication Policy)</h2>
                    </div>
                    <p className="clause-text">
                      हम आपके खाते, टेस्ट रिपोर्ट स्थिति, बकाया शुल्क समाधान, अथवा अस्पताल सेवाओं से संबंधित आवश्यक सूचनाओं हेतु ईमेल, फोन कॉल या एसएमएस/व्हाट्सएप संदेशों के माध्यम से आपसे संपर्क कर सकते हैं।
                    </p>
                  </div>

                  {/* Clause 7 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">07</span>
                      <h2 className="clause-title">कुकीज़ एवं तृतीय-पक्ष तकनीक (Cookies Policy)</h2>
                    </div>
                    <p className="clause-text">
                      अन्य व्यावसायिक वेबसाइटों की भांति हमारी वेबसाइट आपके अनुभव को बेहतर बनाने के लिए कुकीज़ (Cookies) का उपयोग करती है। कुकीज़ आपकी प्राथमिकताओं को याद रखने, सत्र को सुरक्षित रखने एवं सुगम नेविगेशन में सहायता करती हैं:
                    </p>
                    <ul className="policy-feature-list">
                      <li><strong>अकाउंट एवं लॉगिन कुकीज़:</strong> आपको प्रत्येक पेज पर बार-बार लॉगिन करने से बचाती हैं।</li>
                      <li><strong>ऑर्डर एवं फॉर्म कुकीज़:</strong> टोकन व जांच बुकिंग फॉर्म भरते समय डेटा सुरक्षित रखती हैं।</li>
                      <li><strong>एनालिटिक्स कुकीज़:</strong> Google Analytics द्वारा वेबसाइट उपयोग के आंकड़ों का विश्लेषण कर सेवाओं को अधिक उपयोगी बनाने में मदद मिलती है।</li>
                    </ul>
                    <div className="policy-info-box">
                      <FaCircleInfo style={{ marginRight: '6px' }} />
                      आप अपने वेब ब्राउज़र की सेटिंग्स में जाकर कुकीज़ को अक्षम (Disable) कर सकते हैं, यद्यपि ऐसा करने से वेबसाइट के कुछ फीचर्स प्रभावित हो सकते हैं।
                    </div>
                  </div>

                  {/* Clause 8 & 9 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">08</span>
                      <h2 className="clause-title">नीति में संशोधन एवं संपर्क विवरण (Updates & Contact)</h2>
                    </div>
                    <p className="clause-text">
                      अस्पताल प्रबंधन के पास किसी भी समय इस गोपनीयता नीति में संशोधन करने का पूर्ण अधिकार सुरक्षित है। किए गए संशोधन वेबसाइट पर प्रकाशित होते ही प्रभावी माने जाएंगे।
                    </p>
                    <p className="clause-text">
                      यदि आप अपने डेटा को देखना, संशोधित करना या हटाना चाहते हैं, तो कृपया अस्पताल कार्यालय अथवा <a href="mailto:connect.sssdc@gmail.com">connect.sssdc@gmail.com</a> पर संपर्क करें।
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 2: TERMS OF USE (उपयोग के नियम एवं शर्तें)
                ========================================================================= */}
            {activeTab === 'terms' && (
              <div className="policy-pane">
                <div className="policy-header-block">
                  <div className="policy-title-wrap">
                    <div className="policy-effective-pill">
                      <FaCalendarDays size={12} />
                      <span>आधिकारिक वेबसाइट नियम एवं शर्तें (Terms & Conditions)</span>
                    </div>
                    <h1 className="policy-main-title">उपयोग के नियम एवं शर्तें (Terms of Use)</h1>
                    <p className="policy-domain-sub">
                      संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर (www.sssdc-hospital.com)
                    </p>
                  </div>

                  <div className="policy-action-btns">
                    <button type="button" className="btn-policy-print" onClick={handlePrint}>
                      <FaPrint /> <span>प्रिंट / PDF सेव करें</span>
                    </button>
                  </div>
                </div>

                <div className="policy-body-content">
                  
                  {/* Clause 1 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">01</span>
                      <h2 className="clause-title">प्रस्तावना एवं स्वीकृति (Introduction)</h2>
                    </div>
                    <p className="clause-text">
                      यह वेबसाइट मानक नियम एवं शर्तें आपके द्वारा SSSDC-Hospital.com (संत सुखदेव शाह धर्मार्थ चिकित्सालय) के उपयोग को नियंत्रित करती हैं। इस वेबसाइट का उपयोग करके आप इन सभी नियमों व शर्तों को पूर्णतः स्वीकार करते हैं। यदि आप इन शर्तों से असहमत हैं, तो कृपया वेबसाइट का उपयोग न करें। 18 वर्ष से कम आयु के आगंतुकों को अभिभावक मार्गदर्शन में ही वेबसाइट उपयोग की अनुमति है।
                    </p>
                  </div>

                  {/* Clause 2 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">02</span>
                      <h2 className="clause-title">बौद्धिक संपदा अधिकार (Intellectual Property Rights)</h2>
                    </div>
                    <p className="clause-text">
                      वेबसाइट पर उपलब्ध सभी सामग्री, लोगो, पूज्य संतों के चित्र, पाठ्य सामग्री एवं प्रलेख संत सुखदेव शाह धर्मार्थ चिकित्सालय ट्रस्ट की बौद्धिक संपत्ति हैं। आपको केवल व्यक्तिगत उपयोग व सूचनात्मक दृष्टि से सामग्री देखने का सीमित अधिकार प्राप्त है।
                    </p>
                  </div>

                  {/* Clause 3 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">03</span>
                      <h2 className="clause-title">वेबसाइट उपयोग पर विशिष्ट प्रतिबंध (Restrictions)</h2>
                    </div>
                    <p className="clause-text">आप निम्नलिखित गतिविधियों के लिए स्पष्ट रूप से प्रतिबंधित हैं:</p>
                    <ul className="policy-feature-list">
                      <li><FaCheck className="list-check-icon" /><span>वेबसाइट की किसी भी सामग्री को अन्य किसी मीडिया में अनधिकृत रूप से प्रकाशित करना।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>वेबसाइट सामग्री का व्यावसायिक उपयोग, पुनर्विक्रय या लाइसेंसिंग करना।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>वेबसाइट को किसी भी प्रकार की क्षति पहुँचाना या सर्वर प्रदर्शन को बाधित करना।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>डेटा माइनिंग, डेटा एक्सट्रैक्टिंग, स्क्रैपिंग या हैकिंग से संबंधित कोई भी कार्य करना।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>लागू कानूनों के विरुद्ध अथवा अस्पताल की प्रतिष्ठा को ठेस पहुँचाने वाला आचरण करना।</span></li>
                    </ul>
                  </div>

                  {/* Clause 4 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">04</span>
                      <h2 className="clause-title">आपकी सामग्री एवं प्रतिक्रिया (Your Content)</h2>
                    </div>
                    <p className="clause-text">
                      वेबसाइट पर आपके द्वारा प्रेषित फीडबैक, समीक्षा या सामग्री पर अस्पताल को गैर-अनन्य, वैश्विक उपयोग का अधिकार प्राप्त होगा। आपकी सामग्री किसी तीसरे पक्ष के अधिकारों का उल्लंघन नहीं करनी चाहिए। अस्पताल को किसी भी अनुचित सामग्री को बिना पूर्व सूचना हटाने का अधिकार सुरक्षित है।
                    </p>
                  </div>

                  {/* Clause 5 & 6 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">05</span>
                      <h2 className="clause-title">वारंटी का अभाव एवं देयता की सीमा (No Warranties & Liability)</h2>
                    </div>
                    <div className="policy-alert-box">
                      <FaTriangleExclamation style={{ marginRight: '6px' }} />
                      यह वेबसाइट "जैसी है" (As-Is) आधार पर प्रदान की जाती है। वेबसाइट पर दी गई स्वास्थ्य जानकारी जन-जागरूकता हेतु है और यह प्रत्यक्ष चिकित्सकीय आपातकालीन परामर्श का विकल्प नहीं है।
                    </div>
                    <p className="clause-text">
                      किसी भी परिस्थिति में अस्पताल प्रबंधन, ट्रस्टी, डॉक्टर्स अथवा कर्मचारी वेबसाइट के उपयोग से उत्पन्न किसी अप्रत्यक्ष नुकसान के लिए उत्तरदायी नहीं होंगे।
                    </p>
                  </div>

                  {/* Clause 7 to 12 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">06</span>
                      <h2 className="clause-title">शासकीय कानून एवं न्यायक्षेत्र (Governing Law & Jurisdiction)</h2>
                    </div>
                    <p className="clause-text">
                      यह नियम व शर्तें <strong>राजस्थान राज्य (भारत)</strong> के कानूनों के अनुसार शासित एवं व्याख्यायित होंगी। किसी भी प्रकार के विवाद या कानूनी कार्रवाई का समाधान केवल <strong>अलवर (राजस्थान) स्थित न्यायालयों</strong> के विशेष क्षेत्राधिकार के अधीन होगा।
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 3: DMCA (कॉपीराइट नीति)
                ========================================================================= */}
            {activeTab === 'dmca' && (
              <div className="policy-pane">
                <div className="policy-header-block">
                  <div className="policy-title-wrap">
                    <div className="policy-effective-pill">
                      <FaCopyright size={12} />
                      <span>डिजिटल मिलेनियम कॉपीराइट एक्ट अनुपालन (DMCA Policy)</span>
                    </div>
                    <h1 className="policy-main-title">कॉपीराइट नीति (DMCA Notice)</h1>
                    <p className="policy-domain-sub">
                      संत सुखदेव शाह धर्मार्थ चिकित्सालय पोर्टल (www.sssdc-hospital.com)
                    </p>
                  </div>

                  <div className="policy-action-btns">
                    <button type="button" className="btn-policy-print" onClick={handlePrint}>
                      <FaPrint /> <span>प्रिंट / PDF सेव करें</span>
                    </button>
                  </div>
                </div>

                <div className="policy-body-content">
                  
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">01</span>
                      <h2 className="clause-title">कॉपीराइट नीति का परिचय (Copyright Commitment)</h2>
                    </div>
                    <p className="clause-text">
                      <strong>SSSDC-Hospital.com</strong> एक ऑनलाइन सूचना व सेवा प्रदाता है। हम कॉपीराइट कानूनों का पूर्ण सम्मान करते हैं और सभी बौद्धिक संपदा अधिकारों की रक्षा के प्रति पूर्णतः प्रतिबद्ध हैं। हम सेवा पर अपलोड या प्रदर्शित सामग्री के संबंध में कॉपीराइट उल्लंघन को अत्यंत गंभीरता से लेते हैं।
                    </p>
                    <p className="clause-text">
                      यदि आप किसी ऐसी सामग्री के वास्तविक कॉपीराइट स्वामी हैं जो हमारी वेबसाइट पर आपकी अनुमति के बिना प्रदर्शित प्रतीत होती है, तो आप तुरंत हमें लिखित रूप में सूचित कर सकते हैं ताकि हम आवश्यक जांच कर उसे तुरंत हटा सकें।
                    </p>
                  </div>

                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">02</span>
                      <h2 className="clause-title">उल्लंघन की लिखित सूचना में क्या शामिल होना चाहिए (Notice Requirements)</h2>
                    </div>
                    <p className="clause-text">
                      आपकी लिखित DMCA सूचना में निम्नलिखित तथ्यों का होना अनिवार्य है:
                    </p>
                    <ul className="policy-feature-list">
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span>कॉपीराइट स्वामी अथवा अधिकृत प्रतिनिधि के भौतिक या डिजिटल हस्ताक्षर (Physical/Electronic Signature)।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span>जिस कॉपीराइट कार्य का उल्लंघन होने का दावा किया गया है, उसका स्पष्ट एवं विशिष्ट विवरण।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span>उल्लंघनकारी सामग्री का सटीक वेब पता (URL या सटीक लोकेशन) ताकि हमारी टीम उसे खोज सके।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span>शिकायतकर्ता का संपूर्ण संपर्क विवरण: पूरा नाम, पता, फोन नंबर एवं ईमेल आईडी।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span>यह सद्भावनापूर्ण कथन (Good Faith Statement) कि सामग्री का उपयोग कॉपीराइट स्वामी या कानून द्वारा अधिकृत नहीं है।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span>यह शपथपत्र कि सूचना में दी गई सभी जानकारियां सत्य व सटीक हैं।</span>
                      </li>
                    </ul>
                  </div>

                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">03</span>
                      <h2 className="clause-title">सूचना भेजने का आधिकारिक पता (DMCA Agent Contact)</h2>
                    </div>
                    <p className="clause-text">
                      आप अपनी विधिवत हस्ताक्षरित सूचना अस्पताल प्रबंधन को निम्नलिखित माध्यमों से प्रेषित कर सकते हैं:
                    </p>
                    <div className="policy-info-box">
                      <strong>ईमेल द्वारा:</strong> connect.sssdc@gmail.com / sssdcalwar@gmail.com<br />
                      <strong>डाक द्वारा:</strong> संत सुखदेव शाह धर्मार्थ चिकित्सालय, सुख सागर भवन, 6, मनु मार्ग, अलवर (राजस्थान) - 301001
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 4: REFUND POLICY (रिफंड एवं शुल्क नीति)
                ========================================================================= */}
            {activeTab === 'refund' && (
              <div className="policy-pane">
                <div className="policy-header-block">
                  <div className="policy-title-wrap">
                    <div className="policy-effective-pill">
                      <FaReceipt size={12} />
                      <span>धर्मार्थ टोकन एवं शुल्क वापसी नियम (Refund & Cancellation)</span>
                    </div>
                    <h1 className="policy-main-title">रिफंड व टोकन नीति (Refund Policy)</h1>
                    <p className="policy-domain-sub">
                      संत सुखदेव शाह धर्मार्थ चिकित्सालय (www.sssdc-hospital.com)
                    </p>
                  </div>

                  <div className="policy-action-btns">
                    <button type="button" className="btn-policy-print" onClick={handlePrint}>
                      <FaPrint /> <span>प्रिंट / PDF सेव करें</span>
                    </button>
                  </div>
                </div>

                <div className="policy-body-content">
                  
                  {/* Clause 1 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">01</span>
                      <h2 className="clause-title">पूर्व-आवश्यक जानकारी (Pre-requisite Information)</h2>
                    </div>
                    <p className="clause-text">
                      हमारी वेबसाइट आपको उपलब्ध कुछ सेवाओं (जैसे पैथोलॉजी जांच, टोकन शुल्क आदि) के लिए सुरक्षित तृतीय-पक्ष भुगतान गेटवे (Third-Party Payment Gateway) के माध्यम से ऑनलाइन भुगतान की सुविधा प्रदान करती है।
                    </p>
                    <p className="clause-text">
                      यदि आप ऑनलाइन भुगतान चुनते हैं, तो आप भुगतान गेटवे की नीतियों के अधीन होंगे। अस्पताल निम्नलिखित परिस्थितियों के लिए उत्तरदायी नहीं होगा:
                    </p>
                    <ul className="policy-feature-list">
                      <li><span>(क) यदि कोई ऑनलाइन लेन-देन तकनीकी कारणों से विफल या अधूरा रह जाता है।</span></li>
                      <li><span>(ख) बैंक, क्रेडिट कार्ड कंपनी या पेमेंट गेटवे एजेंसी की ओर से कोई तकनीकी त्रुटि होने पर।</span></li>
                      <li><span>(ग) किसी भी लेन-देन के अस्वीकृत या रद्द होने से उत्पन्न अप्रत्यक्ष प्रभाव के संबंध में।</span></li>
                    </ul>
                  </div>

                  {/* Clause 2 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">02</span>
                      <h2 className="clause-title">भुगतान नीति (Payment Policy)</h2>
                    </div>
                    <p className="clause-text">
                      संत सुखदेव शाह धर्मार्थ चिकित्सालय एक गैर-लाभकारी व धर्मार्थ संस्थान (Regn. No. 06/Alwar/2000-2001) है। हमारे द्वारा प्रदान की जाने वाली सेवाएं निश्चित धर्मार्थ/रियायती दरों पर आधारित हैं:
                    </p>
                    <ul className="policy-feature-list">
                      <li><FaCheck className="list-check-icon" /><span>ओपीडी परामर्श टोकन मात्र <strong>₹5 के सांकेतिक धर्मार्थ शुल्क</strong> पर उपलब्ध है।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>पैथोलॉजी जांच एवं डायग्नोस्टिक्स सेवाएं अग्रिम भुगतान द्वारा संचालित होती हैं।</span></li>
                      <li><FaCheck className="list-check-icon" /><span>भुगतान की गई जानकारी का उपयोग किसी भी अनधिकृत तीसरे पक्ष के साथ नहीं किया जाता है।</span></li>
                    </ul>
                  </div>

                  {/* Clause 3 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">03</span>
                      <h2 className="clause-title">रिफंड एवं रद्दीकरण नियम (Refund and Cancellation Policy)</h2>
                    </div>
                    <ul className="policy-feature-list">
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>रिफंड का दावा:</strong> रिफंड प्राप्त करने हेतु मरीज/आवेदक के पास जांच का वैध रसीद/इनवॉइस तथा मान्य पहचान पत्र (ID Proof) होना अनिवार्य है।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>ब्याज देय नहीं:</strong> किसी भी प्रकार की अतिरिक्त जमा राशि पर अस्पताल द्वारा कोई ब्याज देय नहीं होगा।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>दुरुपयोग पर रोक:</strong> बार-बार जानबूझकर या अनुचित रिफंड का दावा करने वाले खातों पर अग्रिम सेवाओं की रोक लगाई जा सकती है।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>रिफंड का माध्यम:</strong> सफल व स्वीकृत रिफंड राशि उसी मूल माध्यम/पेमेंट गेटवे द्वारा नियमानुसार 5-7 कार्यदिवसों में प्रेषित की जाती है।</span>
                      </li>
                      <li>
                        <FaCheck className="list-check-icon" />
                        <span><strong>प्रबंधन का अंतिम निर्णय:</strong> किसी भी विवाद अथवा असाधारण परिस्थिति में अस्पताल प्रबंध न्यास (Trust Management) का निर्णय ही अंतिम व सर्वमान्य होगा।</span>
                      </li>
                    </ul>
                  </div>

                  {/* Clause 4 */}
                  <div className="policy-clause-item">
                    <div className="clause-header">
                      <span className="clause-number-badge">04</span>
                      <h2 className="clause-title">रिफंड सहायता एवं संपर्क (Refund Support)</h2>
                    </div>
                    <p className="clause-text">
                      यदि आपके पास रिफंड, रद्दीकरण या बिलिंग से संबंधित कोई प्रश्न है, तो कृपया सेवा बुकिंग से पूर्व अस्पताल के बिलिंग काउंटर अथवा ईमेल <a href="mailto:connect.sssdc@gmail.com">connect.sssdc@gmail.com</a> पर संपर्क करें।
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* Bottom Support Banner */}
            <div className="policy-support-banner">
              <div className="support-banner-texts">
                <h4>नीतियों से संबंधित कोई प्रश्न है?</h4>
                <p>
                  संत सुखदेव शाह धर्मार्थ चिकित्सालय सहायता टीम सदैव आपके मार्गदर्शन एवं सहयोग के लिए तत्पर है।
                </p>
              </div>

              <div className="support-contact-pills">
                <a href={`tel:${hospitalInfo.emergencyPhone}`} className="support-pill-link">
                  <FaPhone size={13} />
                  <span>{hospitalInfo.emergencyPhone}</span>
                </a>
                <a href="mailto:connect.sssdc@gmail.com" className="support-pill-link">
                  <FaEnvelope size={13} />
                  <span>connect.sssdc@gmail.com</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
