import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';
import { 
  FaImages, 
  FaXmark, 
  FaChevronLeft, 
  FaChevronRight,
  FaArrowUpRightFromSquare,
  FaHospital
} from 'react-icons/fa6';

// 11 Original Hospital Photos from public/gallery/ categorized according to PDF Page 6
const bentoGalleryItems = [
  {
    id: 1,
    title: "क्रिटिकल केयर एम्बुलेंस वाहन",
    category: "एम्बुलेंस सेवा",
    src: "/gallery/s 8.jpg",
    desc: "संत सुखदेव शाह धर्मार्थ चिकित्सालय की 24 घंटे आपातकालीन एम्बुलेंस सेवा",
    bentoClass: "bento-hero-large" // 2 cols x 2 rows
  },
  {
    id: 2,
    title: "आईसीयू एवं क्रिटिकल केयर वार्ड",
    category: "आईसीयू वार्ड",
    src: "/gallery/s 2.jpg",
    desc: "मल्टी-पैरा मॉनिटर, आधुनिक आईसीयू बेड्स एवं 24 घंटे जीवन रक्षक व्यवस्था",
    bentoClass: "bento-wide-top" // 2 cols x 1 row
  },
  {
    id: 3,
    title: "अत्याधुनिक आईसीयू बेड सेटअप",
    category: "आईसीयू वार्ड",
    src: "/gallery/s 3.jpg",
    desc: "सेंट्रल ऑक्सीजन सप्लाई एवं मॉनिटरिंग सिस्टम से सुसज्जित गहन चिकित्सा कक्ष",
    bentoClass: "bento-square-1" // 1 col x 1 row
  },
  {
    id: 4,
    title: "इनडोर जनरल वार्ड एवं डे केयर",
    category: "अस्पताल परिसर",
    src: "/gallery/s 4.jpg",
    desc: "विशाल, स्वच्छ एवं वातानुकूलित इनडोर रोगी उपचार हॉल",
    bentoClass: "bento-square-2" // 1 col x 1 row
  },
  {
    id: 5,
    title: "ऑटो केराटो-रिफ्रैक्टोमीटर नेत्र उपकरण",
    category: "चिकित्सा सुविधाएं",
    src: "/gallery/s 11.JPG",
    desc: "सटीक चश्मे के नंबर व कॉर्निया जांच हेतु Matronix QK30+ कम्प्यूटरीकृत मशीन",
    bentoClass: "bento-tall" // 1 col x 2 rows
  },
  {
    id: 6,
    title: "धर्मार्थ फार्मेसी एवं दवा वितरण",
    category: "अस्पताल परिसर",
    src: "/gallery/s 6.jpg",
    desc: "अस्पताल फार्मेसी काउंटर जहां न्यूनतम धर्मार्थ दरों पर गुणवत्तापूर्ण दवाइयां उपलब्ध हैं",
    bentoClass: "bento-wide-mid" // 2 cols x 1 row
  },
  {
    id: 7,
    title: "कम्प्यूटरीकृत फार्मेसी एवं बिलिंग काउंटर",
    category: "अस्पताल परिसर",
    src: "/gallery/s 7.jpg",
    desc: "समर्पित महिला स्टाफ द्वारा कम्प्यूटरीकृत दवा वितरण व बिलिंग सेवा",
    bentoClass: "bento-square-3" // 1 col x 1 row
  },
  {
    id: 8,
    title: "ओपीडी एवं पंजीकरण काउंटर",
    category: "ओपीडी एवं रजिस्ट्रेशन",
    src: "/gallery/s 1.avif",
    desc: "अस्पताल में प्रातःकालीन ओपीडी पर्ची व पंजीकरण हेतु मरीजों व परिजनों की कतार",
    bentoClass: "bento-wide-bottom" // 2 cols x 1 row
  },
  {
    id: 9,
    title: "एम्बुलेंस लाइफ सपोर्ट इंटीरियर",
    category: "एम्बुलेंस सेवा",
    src: "/gallery/s 9.jpg",
    desc: "वेंटिलेटर, ऑक्सीजन सिलेंडर, स्पाइन बोर्ड व आपातकालीन स्ट्रेचर युक्त इंटीरियर",
    bentoClass: "bento-square-4" // 1 col x 1 row
  },
  {
    id: 10,
    title: "नेत्र रोग जांच एवं स्लिट लैंप परामर्श",
    category: "चिकित्सा सुविधाएं",
    src: "/gallery/s 10.JPG",
    desc: "वरिष्ठ नेत्र रोग विशेषज्ञ द्वारा आधुनिक स्लिट लैंप माइक्रोस्कोप द्वारा आंखों की सूक्ष्म जांच",
    bentoClass: "bento-wide-eye-1" // 2 cols x 1 row
  },
  {
    id: 11,
    title: "रोगी उपचार एवं इनडोर सेवाएं",
    category: "चिकित्सा सुविधाएं",
    src: "/gallery/s 5.jpg",
    desc: "नर्सिंग स्टाफ की देखरेख में मरीजों को ड्रिप, इंजेक्शन एवं समर्पित देखभाल",
    bentoClass: "bento-wide-eye-2" // 2 cols x 1 row
  }
];

const galleryFilterCategories = [
  'सभी तस्वीरें',
  'अस्पताल परिसर',
  'ओपीडी एवं रजिस्ट्रेशन',
  'आईसीयू वार्ड',
  'एम्बुलेंस सेवा',
  'चिकित्सा सुविधाएं'
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('सभी तस्वीरें');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems = selectedCategory === 'सभी तस्वीरें'
    ? bentoGalleryItems
    : bentoGalleryItems.filter(item => item.category === selectedCategory);

  // Lightbox Navigation
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [selectedImageIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, showNext, showPrev, closeLightbox]);

  return (
    <section id="gallery" className="bento-gallery-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center bento-gallery-header">
          <span className="section-tag">
            <FaImages className="tag-inline-icon" /> चिकित्सालय फोटो गैलरी
          </span>
          <h2 className="section-title">अस्पताल परिसर एवं सुविधाओं की फोटो गैलरी</h2>
          <p className="section-desc center-block">
            संत सुखदेव शाह धर्मार्थ चिकित्सालय, अलवर की फोटो गैलरी में अस्पताल परिसर, ओपीडी, आईसीयू वार्ड, एम्बुलेंस और आधुनिक चिकित्सा सुविधाओं की वास्तविक तस्वीरें देखें।
          </p>
        </div>

        {/* Categories from PDF: Hospital Campus, OPD, ICU, Ambulance, Medical Facilities */}
        <div className="gallery-filter-bar">
          {galleryFilterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`gallery-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Asymmetric Bento Grid */}
        <div className="bento-grid">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id}
              className={`bento-card ${item.bentoClass}`}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`फोटो देखें: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
            >
              {/* Media Wrap */}
              <div className="bento-media-wrap">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="bento-img" 
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = '/logo.png';
                    e.target.classList.add('bento-fallback-img');
                  }}
                />
                <div className="bento-gradient-overlay"></div>
                <span className="bento-category-tag">{item.category}</span>
              </div>

              {/* Hover Zoom / Expand Badge */}
              <div className="bento-expand-badge" aria-hidden="true" title="फुलस्क्रीन में देखें">
                <FaArrowUpRightFromSquare size={13} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Caption from PDF Page 6 */}
        <div className="gallery-bottom-note">
          <p>चिकित्सालय की आधुनिक सुविधाओं और मरीजों को समर्पित स्वास्थ्य सेवाओं का संक्षिप्त विवरण।</p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && bentoGalleryItems[selectedImageIndex] && (
        <div 
          className="bento-lightbox-overlay" 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bento-lightbox-container" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="bento-lightbox-toolbar">
              <div className="bento-lightbox-meta">
                <span className="bento-counter-badge">
                  {selectedImageIndex + 1} / {bentoGalleryItems.length}
                </span>
                <span className="bento-cat-name">
                  {bentoGalleryItems[selectedImageIndex].category}
                </span>
              </div>
              <button 
                type="button" 
                className="bento-lightbox-close"
                onClick={closeLightbox}
                aria-label="गैलरी बंद करें"
              >
                <FaXmark size={22} />
              </button>
            </div>

            {/* Main Stage with Navigation */}
            <div className="bento-lightbox-stage">
              <button 
                type="button" 
                className="bento-nav-btn prev"
                onClick={showPrev}
                aria-label="पिछली तस्वीर"
              >
                <FaChevronLeft size={22} />
              </button>

              <div className="bento-img-stage-box">
                <img 
                  src={bentoGalleryItems[selectedImageIndex].src} 
                  alt={bentoGalleryItems[selectedImageIndex].title} 
                  className="bento-lightbox-img"
                />
              </div>

              <button 
                type="button" 
                className="bento-nav-btn next"
                onClick={showNext}
                aria-label="अगली तस्वीर"
              >
                <FaChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="bento-lightbox-caption">
              <h4>{bentoGalleryItems[selectedImageIndex].title}</h4>
              <p>{bentoGalleryItems[selectedImageIndex].desc}</p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
