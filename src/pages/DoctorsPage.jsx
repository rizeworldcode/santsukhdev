import React from 'react';
import PageBanner from '../components/common/PageBanner';
import Doctors from '../components/sections/Doctors';

export default function DoctorsPage({ onOpenAppointment }) {
  return (
    <div className="doctors-page-view">
      <PageBanner 
        tag="हमारे वरिष्ठ विशेषज्ञ चिकित्सक"
        title="हमारे विशेषज्ञ चिकित्सक दल"
        subtitle="संत सुखदेव चिकित्सालय में विभिन्न विशेषज्ञताओं के अनुभवी व समर्पित चिकित्सकों द्वारा प्रतिदिन ओपीडी में परामर्श एवं उपचार सेवा उपलब्ध है।"
        breadcrumb="चिकित्सक दल"
      />
      <Doctors onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
