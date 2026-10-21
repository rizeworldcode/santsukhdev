import React from 'react';
import './PageBanner.css';
import { Link } from 'react-router-dom';
import { FaHouse, FaChevronRight } from 'react-icons/fa6';

export default function PageBanner({ tag, title, subtitle, breadcrumb }) {
  return (
    <div className="page-banner">
      <div className="container page-banner-container">
        <div className="banner-breadcrumb-wrapper">
          <div className="banner-breadcrumb">
            <Link to="/" className="breadcrumb-home" title="होम पेज पर जाएं">
              <FaHouse size={13} />
              <span>होम</span>
            </Link>
            <FaChevronRight size={11} className="breadcrumb-sep" />
            <span className="breadcrumb-current">{breadcrumb || title}</span>
          </div>
        </div>

        {tag && (
          <div className="banner-tag-wrapper">
            <span className="banner-tag">{tag}</span>
          </div>
        )}
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
