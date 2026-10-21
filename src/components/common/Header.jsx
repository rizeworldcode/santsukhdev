import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaXmark, FaFileMedical } from 'react-icons/fa6';
import { hospitalInfo } from '../../data/hospitalData';

export default function Header({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'होम', path: '/' },
    { name: 'सेवाएं', path: '/services' },
    { name: 'विभाग', path: '/departments' },
    { name: 'हमारे बारे में', path: '/about' },
    { name: 'चिकित्सक', path: '/doctors' },
    { name: 'सम्पर्क करें', path: '/contact' },
    { name: 'दान करें', path: '/donate', isHighlight: true }
  ];

  return (
    <header className="meditalk-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="meditalk-brand">
          <div className="brand-logo-icon">
            <img 
              src="/logo.png" 
              alt="संत सुखदेव शाह धर्मार्थ चिकित्सालय लोगो" 
              className="brand-logo-img" 
            />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">संत सुखदेव चिकित्सालय</span>
            <span className="brand-sub">अलवर (राज.)</span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''} ${item.isHighlight ? 'nav-donate-pill' : ''}`}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {/* Report Download placed directly to the right of Donate button */}
            <li className="nav-item-report-li">
              <NavLink 
                to="/download-report" 
                className={({ isActive }) => `btn-nav-report ${isActive ? 'active' : ''}`}
                title="लैब एवं टेस्ट रिपोर्ट डाउनलोड करें"
              >
                <FaFileMedical className="nav-report-icon" />
                <span>रिपोर्ट डाउनलोड</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Header Actions (Mobile Toggle) */}
        <div className="header-actions">
          <button 
            type="button" 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="मेन्यू खोलें"
          >
            {mobileMenuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-menu-list">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `mobile-item-link ${isActive ? 'active' : ''} ${item.isHighlight ? 'mobile-donate-pill' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink 
                to="/download-report" 
                className={({ isActive }) => `mobile-item-link mobile-report-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaFileMedical style={{ marginRight: '6px' }} />
                <span>रिपोर्ट डाउनलोड</span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
