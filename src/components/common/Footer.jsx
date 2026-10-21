import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';
import { hospitalInfo } from '../../data/hospitalData';
import { 
  FaClock, 
  FaSun, 
  FaSnowflake, 
  FaLocationDot, 
  FaPhone, 
  FaEnvelope, 
  FaCertificate, 
  FaShieldHalved, 
  FaXmark,
  FaArrowUp,
  FaHeartPulse,
  FaCalendarCheck
} from 'react-icons/fa6';
export default function Footer({ onOpenAppointment }) {
  const location = useLocation();
  const currentTab = new URLSearchParams(location.search).get('tab');
  const isPolicyActive = (tabKey) => location.pathname === '/policies' && currentTab === tabKey;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <footer className="site-footer" id="contact">

      {/* Main Official Content Container */}
      <div className="container">
        <div className="official-footer-board">
          
          {/* Column 1: OPD Timings */}
          <div className="footer-column opd-column">
            <div className="col-header-wrap">
              <h3 className="footer-gold-heading">
                <FaClock className="header-gold-icon" /> ओपीडी समय (OPD Timings)
              </h3>
            </div>

            <div className="opd-timings-content">
              {/* Summer Season */}
              <div className="season-card summer-card">
                <div className="season-title">
                  <FaSun className="season-icon sun-icon" />
                  <span>ग्रीष्मकालीन सत्र (अप्रैल से अक्टूबर)</span>
                </div>
                <div className="timing-slots">
                  <div className="timing-row">
                    <span className="timing-shift">प्रातःकाल:</span>
                    <span className="timing-hours">09:00 AM से 01:00 PM</span>
                  </div>
                  <div className="timing-row">
                    <span className="timing-shift">सायंकाल:</span>
                    <span className="timing-hours">05:00 PM से 07:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Winter Season */}
              <div className="season-card winter-card">
                <div className="season-title">
                  <FaSnowflake className="season-icon snow-icon" />
                  <span>शीतकालीन सत्र (नवम्बर से मार्च)</span>
                </div>
                <div className="timing-slots">
                  <div className="timing-row">
                    <span className="timing-shift">प्रातःकाल:</span>
                    <span className="timing-hours">09:00 AM से 01:00 PM</span>
                  </div>
                  <div className="timing-row">
                    <span className="timing-shift">सायंकाल:</span>
                    <span className="timing-hours">04:00 PM से 06:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Center - Hospital Identity & Contact */}
          <div className="footer-column identity-column">
            <div className="identity-header">
              <div className="hospital-logo-badge">
                <img 
                  src="/logo.png" 
                  alt="संत सुखदेव शाह धर्मार्थ चिकित्सालय लोगो" 
                  className="hospital-footer-logo"
                />
              </div>
              <h2 className="footer-gold-main-title">
                संत सुखदेव शाह धर्मार्थ चिकित्सालय
              </h2>
              <p className="hospital-sub-name-hindi">मानव सेवा ही माधव सेवा • अलवर (राजस्थान)</p>
            </div>

            <div className="identity-details">
              <div className="address-lines">
                <p className="addr-p">
                  <FaLocationDot className="inline-meta-icon" />
                  <span>पता: सुख सागर भवन,</span>
                </p>
                <p className="addr-p addr-sub">
                  6, मनु मार्ग, अलवर (राजस्थान)
                </p>
              </div>

              <div className="phone-email-block">
                <p className="contact-p">
                  <FaPhone className="inline-meta-icon" />
                  <span className="c-label">फोन :</span>
                  <a href="tel:01444023077" className="c-link">0144–4023077</a>
                </p>
                <p className="contact-p">
                  <FaEnvelope className="inline-meta-icon" />
                  <span className="c-label">ईमेल :</span>
                  <a href="mailto:connect.sssdc@gmail.com" className="c-link">connect.sssdc@gmail.com</a>
                </p>
              </div>

              {/* Registration Number Plaque */}
              <div className="registration-pill">
                <FaCertificate className="regn-gold-icon" />
                <span className="regn-text">पंजीयन सं. : 06/अलवर/2000-2001</span>
              </div>
            </div>
          </div>

          {/* Column 3: Right - Policies */}
          <div className="footer-column policies-column">
            <div className="col-header-wrap">
              <h3 className="footer-gold-heading">
                <FaShieldHalved className="header-gold-icon" /> संस्थान नीतियां:
              </h3>
            </div>

            <div className="policies-list-wrap">
              <ul className="policies-nav-list">
                <li>
                  <Link 
                    to="/policies?tab=privacy" 
                    className={`policy-link-btn ${isPolicyActive('privacy') ? 'active' : ''}`}
                    onClick={scrollToTop}
                  >
                    <span className="policy-btn-arrow">▸</span>
                    <span className="policy-btn-text">गोपनीयता नीति (Privacy Policy)</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/policies?tab=terms" 
                    className={`policy-link-btn ${isPolicyActive('terms') ? 'active' : ''}`}
                    onClick={scrollToTop}
                  >
                    <span className="policy-btn-arrow">▸</span>
                    <span className="policy-btn-text">उपयोग नियम (Terms of Use)</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/policies?tab=dmca" 
                    className={`policy-link-btn ${isPolicyActive('dmca') ? 'active' : ''}`}
                    onClick={scrollToTop}
                  >
                    <span className="policy-btn-arrow">▸</span>
                    <span className="policy-btn-text">कॉपीराइट नीति (DMCA)</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/policies?tab=refund" 
                    className={`policy-link-btn ${isPolicyActive('refund') ? 'active' : ''}`}
                    onClick={scrollToTop}
                  >
                    <span className="policy-btn-arrow">▸</span>
                    <span className="policy-btn-text">रिफंड व टोकन नीति (Refund Policy)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Nav & Action Strip */}
        <div className="footer-quick-nav-strip">
          <div className="quick-nav-links">
            <Link to="/" onClick={scrollToTop}>मुख्य पृष्ठ</Link>
            <span className="nav-sep">•</span>
            <Link to="/about" onClick={scrollToTop}>संस्थान परिचय</Link>
            <span className="nav-sep">•</span>
            <Link to="/services" onClick={scrollToTop}>जांच एवं सेवाएं</Link>
            <span className="nav-sep">•</span>
            <Link to="/departments" onClick={scrollToTop}>चिकित्सा विभाग</Link>
            <span className="nav-sep">•</span>
            <Link to="/doctors" onClick={scrollToTop}>विशेषज्ञ डॉक्टर</Link>
            <span className="nav-sep">•</span>
            <Link to="/gallery" onClick={scrollToTop}>गैलरी</Link>
            <span className="nav-sep">•</span>
            <Link to="/contact" onClick={scrollToTop}>सम्पर्क करें</Link>
            <span className="nav-sep">•</span>
            <Link to="/donate" onClick={scrollToTop}>दान करें (Donate)</Link>
            <span className="nav-sep">•</span>
            <Link to="/download-report" onClick={scrollToTop}>रिपोर्ट डाउनलोड</Link>
            <span className="nav-sep">•</span>
            <button 
              type="button" 
              className="quick-nav-btn" 
              onClick={onOpenAppointment}
            >
              <FaCalendarCheck size={12} /> ऑनलाइन टोकन बुक करें
            </button>
          </div>

          <button 
            type="button" 
            className="scroll-top-btn"
            onClick={scrollToTop}
            title="ऊपर जाएं"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="footer-bottom-strip">
          <div className="bottom-left">
            <p className="copyright-p">
              © {new Date().getFullYear()} <strong>संत सुखदेव शाह धर्मार्थ चिकित्सालय</strong>। सर्वाधिकार सुरक्षित।
            </p>
            <p className="dedication-p">
              समर्पण, सेवा एवं परोपकार — सुख सागर भवन, मनु मार्ग, अलवर (राज.)
            </p>
          </div>
          <div className="bottom-right-emergency">
            <a href={`tel:${hospitalInfo.emergencyPhone}`} className="footer-emergency-pill">
              <FaHeartPulse className="pulse-heart" />
              <span>24x7 आपातकालीन सेवा: <strong>{hospitalInfo.emergencyPhone}</strong></span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
