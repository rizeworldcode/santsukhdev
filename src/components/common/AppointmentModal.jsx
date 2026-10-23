import React, { useState } from 'react';
import './AppointmentModal.css';
import { 
  FaXmark, 
  FaCircleCheck, 
  FaCalendarDays, 
  FaClock, 
  FaUser, 
  FaPhone, 
  FaStethoscope 
} from 'react-icons/fa6';

export default function AppointmentModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'जनरल मेडिसिन (सामान्य रोग)',
    doctor: 'उपलब्ध वरिष्ठ चिकित्सक',
    date: '',
    timeSlot: 'सुबह (09:00 AM - 12:00 PM)',
    message: ''
  });

  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, department: initialService }));
    }
  }, [isOpen, initialService]);

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="बंद करें">
          <FaXmark size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="modal-header">
              <span className="badge badge-success">ऑनलाइन पंजीकरण</span>
              <h2>चिकित्सक परामर्श एवं जांच बुकिंग</h2>
              <p>ओपीडी टोकन, जांच या सैंपल कलेक्शन के लिए अपनी जानकारी दर्ज करें।</p>
            </div>

            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-row">
                <div className="form-group">
                  <label><FaUser size={13} /> मरीज़ का पूरा नाम</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="मरीज़ का नाम लिखें"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label><FaPhone size={13} /> मोबाइल नंबर</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="10 अंकों का मोबाइल नंबर"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label><FaStethoscope size={13} /> संबंधित विभाग / जांच</label>
                  <select name="department" value={formData.department} onChange={handleChange}>
                    <optgroup label="प्रमुख चिकित्सा विभाग">
                      <option value="जनरल मेडिसिन (सामान्य रोग)">जनरल मेडिसिन (सामान्य रोग)</option>
                      <option value="नेत्र रोग विभाग (Eye Care)">नेत्र रोग विभाग (Eye Care)</option>
                      <option value="मूत्र एवं गुर्दा रोग (Urology)">मूत्र एवं गुर्दा रोग (Urology)</option>
                      <option value="हृदय रोग विभाग (Cardiology)">हृदय रोग विभाग (Cardiology)</option>
                      <option value="कान, नाक एवं गला (ENT)">कान, नाक एवं गला (ENT)</option>
                      <option value="प्रसूति एवं स्त्री रोग (Gynecology)">प्रसूति एवं स्त्री रोग (Gynecology)</option>
                      <option value="शिशु एवं बाल रोग (Pediatrics)">शिशु एवं बाल रोग (Pediatrics)</option>
                      <option value="हड्डी एवं जोड़ रोग (Orthopaedics)">हड्डी एवं जोड़ रोग (Orthopaedics)</option>
                      <option value="शल्य चिकित्सा (Surgery)">शल्य चिकित्सा (Surgery)</option>
                      <option value="दंत चिकित्सा विभाग (Dental Care)">दंत चिकित्सा विभाग (Dental Care)</option>
                      <option value="होम्योपैथी चिकित्सा (Homeopathy)">होम्योपैथी चिकित्सा (Homeopathy)</option>
                      <option value="फिजियोथेरेपी (Physiotherapy)">फिजियोथेरेपी (Physiotherapy)</option>
                      <option value="एक्यूप्रेशर चिकित्सा (Acupressure)">एक्यूप्रेशर चिकित्सा (Acupressure)</option>
                    </optgroup>
                    <optgroup label="24x7 एम्बुलेंस सेवा">
                      <option value="Non-Critical Care Ambulance (₹5,500*)">नॉन-क्रिटिकल केयर एम्बुलेंस (₹5,500*)</option>
                      <option value="Critical Care Ambulance (₹10,000*)">क्रिटिकल केयर एम्बुलेंस / ICU ऑन व्हील्स (₹10,000*)</option>
                    </optgroup>
                    <optgroup label="लैब टेस्ट एवं जांच बुकिंग">
                      <option value="CT Scan (कंप्यूटेड टोमोग्राफी स्कैन)">सीटी स्कैन - CT Scan (कंप्यूटेड टोमोग्राफी)</option>
                      <option value="HRCT (हाई-रेजोल्यूशन चेस्ट सीटी)">एचआरसीटी - HRCT (हाई-रेजोल्यूशन चेस्ट सीटी)</option>
                      <option value="Doppler (कलर डॉपलर व वैस्कुलर जांच)">डॉपलर - Doppler (कलर डॉपलर व वैस्कुलर जांच)</option>
                      <option value="NCCT (नॉन-कंट्रास्ट सीटी स्कैन)">एनसीसीटी - NCCT (नॉन-कंट्रास्ट सीटी स्कैन)</option>
                      <option value="MRI (मैग्नेटिक रेजोनेंस इमेजिंग)">एमआरआई - MRI (मैग्नेटिक रेजोनेंस इमेजिंग)</option>
                      <option value="UltraSound (सोनोग्राफी / 4D अल्ट्रासाउंड)">अल्ट्रासाउंड - UltraSound (सोनोग्राफी / 4D)</option>
                      <option value="PathLab Tests (पैथोलॉजी एवं रक्त जांच)">पैथोलॉजी लैब जांच (Pathology Blood Tests)</option>
                      <option value="Home Collection Facility (घर से सैंपल पिकअप - ₹50)">घर से सैंपल कलेक्शन सुविधा (Home Collection - ₹50)</option>
                      <option value="Other Tests (अन्य विशेष डायग्नोस्टिक्स)">अन्य विशेष डायग्नोस्टिक्स एवं टेस्ट</option>
                    </optgroup>
                  </select>
                </div>

                <div className="form-group">
                  <label><FaCalendarDays size={13} /> परामर्श तिथि</label>
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label><FaClock size={13} /> पसंदीदा समय स्लॉट</label>
                <select name="timeSlot" value={formData.timeSlot} onChange={handleChange}>
                  <option value="सुबह (09:00 AM - 12:00 PM)">सुबह (09:00 AM - 12:00 PM)</option>
                  <option value="दोपहर (12:00 PM - 04:00 PM)">दोपहर (12:00 PM - 04:00 PM)</option>
                  <option value="सायं (04:00 PM - 08:00 PM)">सायं (04:00 PM - 08:00 PM)</option>
                </select>
              </div>

              <div className="form-group">
                <label>रोग या लक्षण विवरण (वैकल्पिक)</label>
                <textarea 
                  rows="2" 
                  name="message" 
                  placeholder="अपनी समस्या का संक्षिप्त विवरण लिखें..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                अपॉइंटमेंट की पुष्टि करें
              </button>
            </form>
          </div>
        ) : (
          <div className="success-view">
            <FaCircleCheck size={56} className="success-icon" />
            <h3>अपॉइंटमेंट अनुरोध सफल!</h3>
            <p>
              धन्यवाद, <strong>{formData.name}</strong>। आपका <strong>{formData.department}</strong> के लिए परामर्श अनुरोध दर्ज कर लिया गया है। अस्पताल रिसेप्शन द्वारा शीघ्र ही आपके मोबाइल <strong>{formData.phone}</strong> पर टोकन नंबर भेजा जाएगा।
            </p>
            <button type="button" className="btn btn-primary" onClick={handleReset}>
              संपन्न
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
