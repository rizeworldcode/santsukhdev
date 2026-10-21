import React, { useState, useEffect, useRef } from 'react';
import './DonatePage.css';
import PageBanner from '../components/common/PageBanner';
import { hospitalInfo } from '../data/hospitalData';
import { 
  FaPlay, 
  FaPause, 
  FaXmark, 
  FaRegCopy, 
  FaCheck, 
  FaBuildingColumns, 
  FaCreditCard, 
  FaQrcode, 
  FaWallet, 
  FaClockRotateLeft,
  FaShieldHalved,
  FaHeartPulse,
  FaHandHoldingHeart,
  FaPrint
} from 'react-icons/fa6';

export default function DonatePage() {
  // Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);
  const timerIntervalRef = useRef(null);

  // Modals state
  const [showQrModal, setShowQrModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Copy states
  const [copiedKey, setCopiedKey] = useState(null);

  // Checkout Form State
  const [amount, setAmount] = useState('1100');
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [paymentStep, setPaymentStep] = useState('form'); // 'form' | 'success'
  const [receiptNumber, setReceiptNumber] = useState('');

  const upiId = "santsukhdevtrust@sbi";

  // Peaceful audio tone generator on Play
  const toggleAudio = () => {
    if (isPlaying) {
      // Stop
      try {
        if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
          oscillatorRef.current = null;
        }
      } catch (e) {
        console.error(e);
      }
      clearInterval(timerIntervalRef.current);
      setIsPlaying(false);
    } else {
      // Start gentle harmonious sound (Web Audio API)
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;

          // Create peaceful harmonic ambient drone (432Hz healing sound)
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(216, ctx.currentTime); // A3 sub-harmonic
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(432, ctx.currentTime); // Healing A4

          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.5);

          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(ctx.destination);

          osc1.start();
          osc2.start();
          oscillatorRef.current = osc1;
          gainNodeRef.current = gain;
        }
      } catch (e) {
        console.warn("Audio context not available", e);
      }

      setIsPlaying(true);
      // Progress simulation from 0 to 517 seconds (8 mins 37 secs)
      timerIntervalRef.current = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 517) {
            clearInterval(timerIntervalRef.current);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  const formatAudioTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleCopy = (text, key) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const genReceipt = `SSSDC-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptNumber(genReceipt);
    setPaymentStep('success');
  };

  return (
    <div className="donate-page-view">
      {/* Top Breadcrumb Banner */}
      <PageBanner 
        tag="धर्मार्थ सेवा एवं परोपकार • CHARITABLE DONATION"
        title="धर्मार्थ दान एवं सहयोग (Donate)"
        subtitle="मानव सेवा ही ईश्वर की सच्ची पूजा है। आपके पावन सहयोग से निर्धन व जरूरतमंद मरीजों को निःशुल्क दवा, ओपीडी व एम्बुलेंस सेवा प्राप्त होती है।"
        breadcrumb="दान करें"
      />

      {/* Hero Floral Card Section matching user's image exactly */}
      <section className="donate-hero-section">
        <div className="donate-frame-container">

          {/* Audio Player Strip at top right */}
          <div className="donate-audio-strip">
            <div className="audio-player-widget">
              <button 
                type="button" 
                className="audio-play-btn" 
                onClick={toggleAudio}
                title={isPlaying ? "रोकें (Pause)" : "चलाएं (Play)"}
                aria-label="ऑडियो प्लेयर"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <input 
                type="range" 
                min="0" 
                max="517" 
                value={audioProgress}
                onChange={(e) => setAudioProgress(Number(e.target.value))}
                className="audio-track-slider" 
                aria-label="ट्रैक प्रोग्रेस"
              />
              <span className="audio-time">
                {formatAudioTime(audioProgress)} / 08:37
              </span>
            </div>
          </div>

          {/* Main Translucent Floral Charity Card */}
          <div className="donate-main-card">
            
            {/* Header Titles */}
            <div className="donate-card-header">
              <h1 className="donate-main-heading">Donate for Charity</h1>
              <p className="donate-hospital-sub">
                towards Sant Sukhdev Shah Dharmarth Chikitsalaya, Alwar
              </p>
              <p className="donate-geo-sub">
                (Charitable Hospital and Healthcare in Rajasthan, India)
              </p>
            </div>

            {/* Two Columns Grid with Center Divider */}
            <div className="donate-columns-grid">
              
              {/* Left Column: BHIM UPI Apps */}
              <div className="donate-column">
                <h2 className="donate-col-heading">To donate by any BHIM UPI app:</h2>
                
                <button 
                  type="button" 
                  className="btn-donate-action"
                  onClick={() => setShowQrModal(true)}
                >
                  <span>Show QR Code</span>
                  <span className="action-arrow">&gt;</span>
                </button>

                {/* Vector Grid of Authentic UPI App Brands */}
                <div className="upi-apps-box">
                  {/* Google Pay */}
                  <div className="app-logo-item">
                    <span className="brand-badge gpay-badge">
                      <span className="gpay-g">G</span>
                      <span className="gpay-text">Pay</span>
                    </span>
                  </div>

                  {/* Paytm */}
                  <div className="app-logo-item">
                    <span className="brand-badge paytm-badge">
                      <span className="paytm-dark">Pay</span>
                      <span className="paytm-cyan">tm</span>
                    </span>
                  </div>

                  {/* BHIM UPI */}
                  <div className="app-logo-item">
                    <span className="brand-badge bhim-badge">
                      <span>BHIM</span>
                      <span className="bhim-upi-arrow">▶ UPI</span>
                    </span>
                  </div>

                  {/* JioMoney */}
                  <div className="app-logo-item">
                    <div className="brand-badge jiomoney-badge">
                      <div className="jiomoney-icon">₹</div>
                      <span className="jiomoney-label">JioMoney</span>
                    </div>
                  </div>

                  {/* Buddy (SBI Buddy) */}
                  <div className="app-logo-item">
                    <div className="brand-badge buddy-badge">
                      <div className="buddy-icon">SBI</div>
                      <span>Buddy</span>
                    </div>
                  </div>

                  {/* Circular Wallet / WhatsApp Pay */}
                  <div className="app-logo-item">
                    <div className="wallet-circle-badge">
                      <span>M</span>
                    </div>
                  </div>

                  {/* Freecharge */}
                  <div className="app-logo-item">
                    <div className="brand-badge freecharge-badge">
                      <div className="fc-icon">⚡</div>
                      <span className="fc-label">freecharge</span>
                    </div>
                  </div>

                  {/* MobiKwik */}
                  <div className="app-logo-item">
                    <span className="brand-badge mobikwik-badge">
                      <span className="mobikwik-m">M</span>obiKwik
                    </span>
                  </div>

                  {/* PhonePe */}
                  <div className="app-logo-item">
                    <div className="brand-badge phonepe-badge">
                      <div className="phonepe-icon">पे</div>
                      <span className="phonepe-label">PhonePe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Divider Line */}
              <div className="donate-column-divider" aria-hidden="true"></div>

              {/* Right Column: Other Payment Methods */}
              <div className="donate-column">
                <h2 className="donate-col-heading">For other payment methods:</h2>

                <button 
                  type="button" 
                  className="btn-donate-action"
                  onClick={() => {
                    setPaymentStep('form');
                    setShowCheckoutModal(true);
                  }}
                >
                  <span>Click here to Donate</span>
                  <span className="action-arrow">&gt;</span>
                </button>

                {/* List of Payment Gateway Methods */}
                <div className="payment-methods-box">
                  {/* Card */}
                  <div className="payment-method-row">
                    <div className="pm-icon-wrap">
                      <FaCreditCard size={20} />
                    </div>
                    <div className="pm-texts">
                      <span className="pm-title">Card</span>
                      <span className="pm-desc">Visa, MasterCard, RuPay, and Maestro</span>
                    </div>
                  </div>

                  {/* UPI / QR */}
                  <div className="payment-method-row">
                    <div className="pm-icon-wrap">
                      <FaQrcode size={20} />
                    </div>
                    <div className="pm-texts">
                      <span className="pm-title">UPI / QR</span>
                      <span className="pm-desc">Instant payment using UPI App</span>
                    </div>
                  </div>

                  {/* Netbanking */}
                  <div className="payment-method-row">
                    <div className="pm-icon-wrap">
                      <FaBuildingColumns size={20} />
                    </div>
                    <div className="pm-texts">
                      <span className="pm-title">Netbanking</span>
                      <span className="pm-desc">All Indian banks</span>
                    </div>
                  </div>

                  {/* Wallet */}
                  <div className="payment-method-row">
                    <div className="pm-icon-wrap">
                      <FaWallet size={20} />
                    </div>
                    <div className="pm-texts">
                      <span className="pm-title">Wallet</span>
                      <span className="pm-desc">Mobikwik & More</span>
                    </div>
                  </div>

                  {/* Pay Later */}
                  <div className="payment-method-row">
                    <div className="pm-icon-wrap">
                      <FaClockRotateLeft size={20} />
                    </div>
                    <div className="pm-texts">
                      <span className="pm-title">Pay Later</span>
                      <span className="pm-desc">ICICI Bank PayLater</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Official Trust & Bank Account Details Section */}
      <section className="donate-trust-section">
        <div className="container">
          
          <div className="donate-trust-section-title-wrap">
            <span className="donate-trust-badge-pill">
              <FaShieldHalved /> 80G आयकर छूट प्राप्त (Tax Deductible)
            </span>
            <h2 className="donate-trust-main-heading">सीधे बैंक खाते में सहयोग करें</h2>
            <p className="donate-trust-subheading">
              आप RTGS, NEFT, IMPS अथवा सीधे चेक/ड्राफ्ट द्वारा भी अस्पताल के अधिकृत धर्मार्थ खाते में सहायता राशि प्रेषित कर सकते हैं।
            </p>
          </div>

          <div className="donate-trust-cards-grid">
            
            {/* Card 1: Bank Account Details */}
            <div className="donate-trust-card">
              <div className="donate-trust-card-header">
                <div className="donate-trust-icon-box">
                  <FaBuildingColumns />
                </div>
                <div>
                  <h3 className="donate-trust-card-title">बैंक खाता विवरण (Bank Details)</h3>
                  <small style={{ color: '#64748b' }}>State Bank of India</small>
                </div>
              </div>

              <div className="bank-detail-rows">
                <div className="bank-row">
                  <span className="b-label">खाता धारक:</span>
                  <span className="b-value">श्री संत सुखदेव शाह धर्मार्थ ट्रस्ट</span>
                </div>
                <div className="bank-row">
                  <span className="b-label">बैंक का नाम:</span>
                  <span className="b-value">भारतीय स्टेट बैंक (SBI), अलवर</span>
                </div>
                <div className="bank-row">
                  <span className="b-label">खाता संख्या (A/c No.):</span>
                  <span className="b-value mono">
                    38491029481
                    <button 
                      type="button" 
                      className={`copy-mini-btn ${copiedKey === 'acc' ? 'copied' : ''}`}
                      onClick={() => handleCopy("38491029481", "acc")}
                      title="कॉपी करें"
                    >
                      {copiedKey === 'acc' ? <FaCheck /> : <FaRegCopy />}
                    </button>
                  </span>
                </div>
                <div className="bank-row">
                  <span className="b-label">IFSC कोड:</span>
                  <span className="b-value mono">
                    SBIN0000603
                    <button 
                      type="button" 
                      className={`copy-mini-btn ${copiedKey === 'ifsc' ? 'copied' : ''}`}
                      onClick={() => handleCopy("SBIN0000603", "ifsc")}
                      title="कॉपी करें"
                    >
                      {copiedKey === 'ifsc' ? <FaCheck /> : <FaRegCopy />}
                    </button>
                  </span>
                </div>
                <div className="bank-row">
                  <span className="b-label">UPI ID:</span>
                  <span className="b-value mono">
                    {upiId}
                    <button 
                      type="button" 
                      className={`copy-mini-btn ${copiedKey === 'upi' ? 'copied' : ''}`}
                      onClick={() => handleCopy(upiId, "upi")}
                      title="कॉपी करें"
                    >
                      {copiedKey === 'upi' ? <FaCheck /> : <FaRegCopy />}
                    </button>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: 80G Tax Exemption & Trust Info */}
            <div className="donate-trust-card">
              <div className="donate-trust-card-header">
                <div className="donate-trust-icon-box">
                  <FaHandHoldingHeart />
                </div>
                <div>
                  <h3 className="donate-trust-card-title">आयकर छूट एवं रसीद (80G)</h3>
                  <small style={{ color: '#64748b' }}>100% सेवा एवं पारदर्शिता</small>
                </div>
              </div>

              <ul className="tax-benefit-list">
                <li>
                  <FaCheck className="tax-check-icon" />
                  <span>
                    सभी दान आयकर अधिनियम 1961 की धारा <strong>80G</strong> के तहत 50% कर-मुक्त हैं।
                  </span>
                </li>
                <li>
                  <FaCheck className="tax-check-icon" />
                  <span>
                    दान के पश्चात आधिकारिक 80G रसीद अस्पताल काउंटर से अथवा ईमेल पर प्राप्त की जा सकती है।
                  </span>
                </li>
                <li>
                  <FaCheck className="tax-check-icon" />
                  <span>
                    दान की संपूर्ण राशि गरीब मरीजों की ओपीडी, निःशुल्क दवाइयां, ऑक्सीजन व 24x7 एम्बुलेंस संचालन में व्यय की जाती है।
                  </span>
                </li>
              </ul>

              <div className="donate-trust-reg-badge">
                पंजीयन सं. : {hospitalInfo.regNo} • सुख सागर भवन, मनु मार्ग, अलवर
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QR Code Modal (Triggered by 'Show QR Code >') */}
      {showQrModal && (
        <div className="donate-modal-overlay" onClick={() => setShowQrModal(false)}>
          <div className="donate-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="donate-modal-header">
              <h3 className="donate-modal-title">UPI QR कोड स्कैन करें</h3>
              <button 
                type="button" 
                className="donate-modal-close"
                onClick={() => setShowQrModal(false)}
                aria-label="बंद करें"
              >
                <FaXmark size={18} />
              </button>
            </div>

            <div className="donate-modal-content qr-modal-body">
              <div className="qr-code-frame">
                <img 
                  src="/upi_qr.png" 
                  alt="संत सुखदेव शाह धर्मार्थ चिकित्सालय UPI QR कोड" 
                  className="qr-image" 
                />
              </div>

              <div className="qr-upi-info">
                <div>
                  <small style={{ color: '#64748b', display: 'block', textAlign: 'left' }}>UPI ID</small>
                  <span className="qr-upi-id">{upiId}</span>
                </div>
                <button 
                  type="button" 
                  className={`copy-mini-btn ${copiedKey === 'qr_upi' ? 'copied' : ''}`}
                  onClick={() => handleCopy(upiId, 'qr_upi')}
                >
                  {copiedKey === 'qr_upi' ? (
                    <><FaCheck /> कॉपी हो गया</>
                  ) : (
                    <><FaRegCopy /> कॉपी करें</>
                  )}
                </button>
              </div>

              <ol className="qr-steps-list">
                <li>अपने फोन में Google Pay, PhonePe, Paytm या कोई भी UPI ऐप खोलें।</li>
                <li><strong>'Scan QR'</strong> विकल्प चुनें और ऊपर दिए गए कोड को स्कैन करें।</li>
                <li>अपनी इच्छानुसार सहयोग राशि दर्ज करके भुगतान पूर्ण करें।</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* Online Donation Checkout Modal (Triggered by 'Click here to Donate >') */}
      {showCheckoutModal && (
        <div className="donate-modal-overlay" onClick={() => setShowCheckoutModal(false)}>
          <div className="donate-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="donate-modal-header">
              <h3 className="donate-modal-title">
                {paymentStep === 'form' ? 'धर्मार्थ ऑनलाइन सहयोग' : 'दान रसीद (Donation Receipt)'}
              </h3>
              <button 
                type="button" 
                className="donate-modal-close"
                onClick={() => setShowCheckoutModal(false)}
                aria-label="बंद करें"
              >
                <FaXmark size={18} />
              </button>
            </div>

            <div className="donate-modal-content">
              {paymentStep === 'form' ? (
                <form onSubmit={handleCheckoutSubmit}>
                  {/* Preset Amount buttons */}
                  <div className="form-group">
                    <label className="form-label">सहयोग राशि (रुपये में) चुनें:</label>
                    <div className="amount-presets">
                      {['500', '1100', '2100', '5100'].map((val) => (
                        <button
                          key={val}
                          type="button"
                          className={`amount-btn ${amount === val ? 'active' : ''}`}
                          onClick={() => setAmount(val)}
                        >
                          ₹{Number(val).toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                    <input 
                      type="number"
                      min="10"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="अन्य राशि दर्ज करें"
                      className="custom-amount-input"
                      required
                    />
                  </div>

                  {/* Donor Full Name */}
                  <div className="form-group">
                    <label className="form-label">दानदाता का नाम (Full Name) *</label>
                    <input 
                      type="text"
                      className="form-input"
                      placeholder="श्री / श्रीमती ..."
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label">मोबाइल नंबर *</label>
                    <input 
                      type="tel"
                      className="form-input"
                      placeholder="10 अंकों का मोबाइल नंबर"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      required
                    />
                  </div>

                  {/* PAN Card for 80G */}
                  <div className="form-group">
                    <label className="form-label">पैन कार्ड नंबर (PAN No. - धारा 80G रसीद हेतु)</label>
                    <input 
                      type="text"
                      className="form-input"
                      placeholder="उदा. ABCDE1234F (वैकल्पिक)"
                      value={donorPan}
                      onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                    />
                  </div>

                  <button type="submit" className="btn-proceed-pay">
                    ₹{Number(amount || 0).toLocaleString('en-IN')} दान करें • Proceed to Pay
                  </button>
                </form>
              ) : (
                <div className="donation-success-card">
                  <div className="success-check-icon">
                    <FaCheck />
                  </div>
                  <h3 style={{ margin: '0 0 0.5rem', color: '#0f172a' }}>आपका हार्दिक धन्यवाद!</h3>
                  <p style={{ margin: '0 0 1rem', color: '#64748b', fontSize: '0.9rem' }}>
                    संत सुखदेव शाह धर्मार्थ चिकित्सालय आपके इस पावन सहयोग के लिए कृतज्ञ है।
                  </p>

                  <div className="receipt-box">
                    <div className="receipt-row">
                      <span style={{ color: '#64748b' }}>रसीद संख्या:</span>
                      <strong>{receiptNumber}</strong>
                    </div>
                    <div className="receipt-row">
                      <span style={{ color: '#64748b' }}>दानदाता:</span>
                      <strong>{donorName || 'सज्जन दानदाता'}</strong>
                    </div>
                    <div className="receipt-row">
                      <span style={{ color: '#64748b' }}>सहयोग राशि:</span>
                      <strong style={{ color: '#16a34a', fontSize: '1.05rem' }}>
                        ₹{Number(amount).toLocaleString('en-IN')}
                      </strong>
                    </div>
                    {donorPan && (
                      <div className="receipt-row">
                        <span style={{ color: '#64748b' }}>PAN नंबर:</span>
                        <strong>{donorPan}</strong>
                      </div>
                    )}
                    <div className="receipt-row">
                      <span style={{ color: '#64748b' }}>छूट श्रेणी:</span>
                      <strong style={{ color: '#0369a1' }}>80G कर-मुक्त</strong>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn-proceed-pay"
                    onClick={() => window.print()}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <FaPrint /> रसीद प्रिंट करें / सहेजें
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
