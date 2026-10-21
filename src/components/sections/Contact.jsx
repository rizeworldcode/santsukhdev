import React, { useState } from 'react';
import './Contact.css';
import { hospitalInfo } from '../../data/hospitalData';
import { 
  FaLocationDot, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane, 
  FaTriangleExclamation,
  FaCircleCheck
} from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="text-center center-block">
          <span className="section-tag">सम्पर्क करें</span>
          <h2 className="section-title">स्थान एवं सम्पर्क विवरण</h2>
          <p className="section-desc center-block">
            किसी भी प्रकार की चिकित्सा जानकारी, ओपीडी समय या परामर्श हेतु सीधे अस्पताल रिसेप्शन पर सम्पर्क करें।
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">अस्पताल संपर्क जानकारी</h3>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <FaLocationDot size={20} />
                </div>
                <div>
                  <strong>अस्पताल का पता</strong>
                  <p>{hospitalInfo.address}</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <FaPhone size={19} />
                </div>
                <div>
                  <strong>हेल्पलाइन व संपर्क नंबर</strong>
                  <p>मोबाइल: {hospitalInfo.emergencyPhone}</p>
                  <p>लैंडलाइन: {hospitalInfo.landlinePhone}</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <FaEnvelope size={19} />
                </div>
                <div>
                  <strong>ईमेल आईडी</strong>
                  <p>{hospitalInfo.email}</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <FaClock size={19} />
                </div>
                <div>
                  <strong>कार्य समय</strong>
                  <p>इमरजेंसी, आईसीयू व फार्मेसी: 24 घंटे खुली</p>
                  <p>ओपीडी: सोमवार - शनिवार (प्रातः 8:00 से सायं 8:00 बजे तक)</p>
                </div>
              </div>

              <div className="emergency-alert-card">
                <FaTriangleExclamation size={24} className="emg-alert-icon" />
                <div>
                  <h4>तत्काल आपातकालीन सहायता?</h4>
                  <p>एंबुलेंस या आकस्मिक चिकित्सा के लिए तुरंत कॉल करें:</p>
                  <a href={`tel:${hospitalInfo.emergencyPhone}`} className="emg-call-link">
                    कॉल करें: {hospitalInfo.emergencyPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="contact-form-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">पूछताछ संदेश भेजें</h3>

              {sent ? (
                <div className="contact-sent-view">
                  <FaCircleCheck size={48} className="sent-success-icon" />
                  <h4>संदेश सफलतापूर्वक प्राप्त हुआ!</h4>
                  <p>हमारा रिसेप्शन विभाग शीघ्र ही आपसे संपर्क करेगा।</p>
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => setSent(false)}
                  >
                    दूसरा संदेश भेजें
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-group">
                    <label>आपका पूरा नाम</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="उदा. राहुल शर्मा"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="contact-form-row">
                    <div className="form-group">
                      <label>मोबाइल नंबर</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="10 अंकों का मोबाइल नंबर"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>ईमेल (वैकल्पिक)</label>
                      <input 
                        type="email" 
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>विषय / विभाग</label>
                    <input 
                      type="text" 
                      placeholder="उदा. परामर्श जानकारी, जांच रिपोर्ट"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>संदेश</label>
                    <textarea 
                      rows="4" 
                      required 
                      placeholder="अपनी समस्या या सवाल यहां लिखें..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary contact-submit-btn">
                    <FaPaperPlane size={16} />
                    <span>संदेश भेजें</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Map Card */}
        <div className="contact-map-card glass-card">
          <div className="contact-map-header">
            <div className="map-title-wrap">
              <span className="map-badge">
                <FaLocationDot size={14} /> गूगल मैप लोकेशन
              </span>
              <h3 className="contact-map-title">अस्पताल मानचित्र एवं सटीक लोकेशन (Google Map)</h3>
              <p className="contact-map-desc">
                सुख सागर भवन, 6, मनु मार्ग, अलवर (राजस्थान) — अस्पताल तक पहुंचने हेतु गूगल मैप नेविगेशन का उपयोग करें।
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/place/%E2%80%8BSant+Sukhdev+Shah+Charitable+Hospital/@27.5610129,76.6032031,17z" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-map"
            >
              <FaLocationDot size={14} /> गूगल मैप पर दिशा देखें (Get Directions)
            </a>
          </div>

          <div className="map-iframe-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.0482534764556!2d76.6032030752483!3d27.561012876266805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729a2e48095555%3A0xfb0884678101a788!2s%E2%80%8BSant%20Sukhdev%20Shah%20Charitable%20Hospital!5e0!3m2!1sen!2sin!4v1792404426074!5m2!1sen!2sin" 
              width="100%" 
              height="430" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर - गूगल मैप"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
