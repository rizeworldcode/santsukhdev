import React from 'react';
import PageBanner from '../components/common/PageBanner';
import About from '../components/sections/About';

export default function AboutPage() {
  return (
    <div className="about-page-view">
      <PageBanner 
        tag="संस्थान परिचय • ABOUT US & OUR MISSION"
        title="संस्थान परिचय एवं धर्मार्थ मिशन"
        subtitle="मानव सेवा, समर्पण एवं परोपकार के मूल मंत्र पर संचालित संत सुखदेव शाह धर्मार्थ चिकित्सालय का संक्षिप्त इतिहास, मूल्य, आधुनिक चिकित्सा सुविधाएं एवं धर्मार्थ सेवाएं।"
        breadcrumb="हमारे बारे में"
      />
      <About />
    </div>
  );
}
