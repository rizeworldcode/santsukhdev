import React from 'react';
import PageBanner from '../components/common/PageBanner';
import Services from '../components/sections/Services';
import Ambulance from '../components/sections/Ambulance';

export default function ServicesPage({ onOpenAppointment }) {
  return (
    <div className="services-page-view">
      <PageBanner 
        tag="उपलब्ध सेवाएं • HOSPITAL SERVICES & DIAGNOSTICS"
        title="चिकित्सा एवं नैदानिक सेवाएं"
        subtitle="संत सुखदेव शाह धर्मार्थ चिकित्सालय में आधुनिकतम पैथोलॉजी, 24 घंटे आपातकालीन ट्रॉमा केयर, डिजिटल एक्स-रे, सीटी स्कैन, सोनोग्राफी, डायलिसिस एवं क्रिटिकल केयर सेवाएं न्यूनतम धर्मार्थ दरों पर उपलब्ध हैं।"
        breadcrumb="सेवाएं"
      />
      <Services onOpenAppointment={onOpenAppointment} />
      <Ambulance onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
