import React from 'react';
import PageBanner from '../components/common/PageBanner';
import Contact from '../components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="contact-page-view">
      <PageBanner 
        tag="सम्पर्क करें • REACH OUT & CONTACT US"
        title="सम्पर्क एवं स्थान विवरण"
        subtitle="संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर का विस्तृत पता, ओपीडी समय, फोन नम्बर, ईमेल एवं संदेश प्रेषण सुविधा।"
        breadcrumb="सम्पर्क करें"
      />
      <Contact />
    </div>
  );
}
