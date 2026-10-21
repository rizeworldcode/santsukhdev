import React from 'react';
import PageBanner from '../components/common/PageBanner';
import Gallery from '../components/sections/Gallery';

export default function GalleryPage() {
  return (
    <div className="gallery-page-view">
      <PageBanner 
        tag="फोटो दीर्घा • HOSPITAL PHOTO GALLERY"
        title="अस्पताल दीर्घा एवं गतिविधियां"
        subtitle="संत सुखदेव शाह धर्मार्थ चिकित्सालय परिसर, ओपीडी, आधुनिक आईसीयू वार्ड, धर्मार्थ फार्मेसी, नेत्र जांच मशीनें एवं जीवन रक्षक एम्बुलेंस की संपूर्ण बेंटो ग्रिड झलकियां।"
        breadcrumb="गैलरी"
      />
      <Gallery />
    </div>
  );
}
