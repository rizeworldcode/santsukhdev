import React from 'react';
import PageBanner from '../components/common/PageBanner';
import Departments from '../components/sections/Departments';

export default function DepartmentsPage({ onOpenAppointment }) {
  return (
    <div className="departments-page-view">
      <PageBanner 
        tag="विशेषज्ञ चिकित्सा विभाग"
        title="हमारे प्रमुख चिकित्सा विभाग"
        subtitle="संत सुखदेव शाह धर्मार्थ चिकित्सालय में अनुभवी सुपर-स्पेशलिस्ट चिकित्सकों, आधुनिकतम उपकरणों और समर्पित नर्सिंग स्टाफ से सुसज्जित 13 विशेषज्ञ विभाग।"
        breadcrumb="विभाग"
      />
      <Departments onOpenAppointment={onOpenAppointment} />
    </div>
  );
}
