import React from 'react';
import './DonateModal.css';
import { FaXmark, FaHeart, FaShieldHalved, FaRegCopy, FaCheck } from 'react-icons/fa6';
import { hospitalInfo } from '../../data/hospitalData';

export default function DonateModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const upiId = "santsukhdevtrust@sbi";

  const handleCopy = () => {
    navigator.clipboard?.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box donate-modal-box" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="बंद करें"
        >
          <FaXmark size={18} />
        </button>

        <div className="donate-header">
          <div className="donate-icon-badge">
            <FaHeart size={24} className="heart-icon" />
          </div>
          <h3 className="donate-title">धर्मार्थ सेवा एवं सहयोग (Donate)</h3>
          <p className="donate-subtitle">
            संत सुखदेव शाह धर्मार्थ चिकित्सालय, मनु मार्ग, अलवर
          </p>
        </div>

        <div className="donate-body">
          <div className="donate-quote-card">
            <p>
              "मानव सेवा ही ईश्वर की सच्ची पूजा है। आपका छोटा सा अंशदान किसी निर्धन मरीज के लिए जीवनदान बन सकता है।"
            </p>
          </div>

          <div className="donate-details-card">
            <h4 className="card-section-title">बैंक खाता विवरण (Trust Account Details)</h4>
            <div className="detail-item">
              <span className="detail-label">खाता धारक (Account Name):</span>
              <span className="detail-value">श्री संत सुखदेव शाह धर्मार्थ ट्रस्ट</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">बैंक का नाम (Bank):</span>
              <span className="detail-value">भारतीय स्टेट बैंक (SBI), अलवर</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">खाता संख्या (A/c No.):</span>
              <span className="detail-value mono">38491029481</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">IFSC कोड:</span>
              <span className="detail-value mono">SBIN0000603</span>
            </div>
          </div>

          <div className="upi-box">
            <div className="upi-info">
              <span className="upi-label">UPI ID द्वारा सहयोग:</span>
              <span className="upi-id">{upiId}</span>
            </div>
            <button 
              type="button" 
              className="copy-upi-btn"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <FaCheck size={14} /> <span>कॉपी हो गया</span>
                </>
              ) : (
                <>
                  <FaRegCopy size={14} /> <span>कॉपी करें</span>
                </>
              )}
            </button>
          </div>

          <div className="tax-exemption-note">
            <FaShieldHalved size={16} className="shield-icon" />
            <span>
              सभी दान आयकर अधिनियम की धारा 80G के अंतर्गत कर-मुक्त (Tax Deductible) हैं। रसीद हेतु अस्पताल कार्यालय से सम्पर्क करें।
            </span>
          </div>

          <div className="donate-contact-row">
            <span>सम्पर्क नंबर: <strong>{hospitalInfo.emergencyPhone}</strong></span>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary w-full" onClick={onClose}>
            बंद करें
          </button>
        </div>
      </div>
    </div>
  );
}
