import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { FaArrowUpRightFromSquare, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';
import { hospitalInfo } from '../../data/hospitalData';

export default function Hero({ onOpenAppointment }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Rotating images & captions for Card 2
  const santSlides = [
    {
      src: '/sant_2.avif',
      alt: 'संत वासुदेव शाह सिंह जी महाराज',
      text: 'संत वासुदेव शाह सिंह जी महाराज'
    },
    {
      src: '/sant_3.avif',
      alt: 'संतरेण बाबा रघुबीर शाह सिंह जी महाराज',
      text: 'संतरेण बाबा रघुबीर शाह सिंह जी महाराज ने समाज को स्वास्थ्य और शिक्षा सुविधाएं प्रदान करने हेतु वर्ष 2000 में इस पावन संस्थान की नींव रखी।'
    },
    {
      src: '/sant_4.avif',
      alt: 'संतरेण डॉ. श्री हरभजन शाह सिंह जी महाराज',
      text: 'संतरेण डॉ. श्री हरभजन शाह सिंह जी महाराज की पावन अनुकंपा से 20 वर्षों से आधुनिक चिकित्सा सुविधाओं द्वारा निष्काम सेवा।'
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % santSlides.length);
    }, 3800); // Changes every 3.8s to give comfortable reading time
    return () => clearInterval(interval);
  }, [santSlides.length]);

  // Sync muted state to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Smart video playback: automatically pause when off-screen to keep the website 60fps smooth
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver to stop decoding when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    const banner = video.closest('.hero-banner-card') || video;
    observer.observe(banner);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="meditalk-hero">
      <div className="container hero-layout">
        
        {/* Top Row: Headline + Separate Standalone Cards */}
        <div className="hero-top-row">
          {/* Main Headline in Hindi */}
          <div className="hero-title-area">
            <h1 className="hero-main-title">
              उन्नत स्वास्थ्य समाधान –<br />
              आपके संपूर्ण स्वास्थ्य की नई शुरुआत
            </h1>
          </div>

          {/* Center Logo in the Middle Space */}
          <div className="hero-center-logo-wrap">
            <img 
              src="/logo.png" 
              alt="संत सुखदेव शाह धर्मार्थ चिकित्सालय लोगो" 
              className="hero-center-logo-img" 
            />
          </div>

          {/* Right Dual Cards - With Respective Names & Descriptions */}
          <div className="hero-dual-cards">
            
            {/* Card 1: Param Hans Sant Sukhdev Shah Ji Maharaj */}
            <div className="standalone-card card-photo-fill">
              <img 
                src="/snat_1.avif" 
                alt="परमहंस संत सुखदेव शाह जी महाराज" 
                className="card-full-cover-img active"
              />
              <div className="card-caption-overlay">
                <div className="card-caption-kicker">परमहंस</div>
                <div className="card-caption-name">संत सुखदेव शाह जी महाराज</div>
              </div>
            </div>

            {/* Card 2: Auto-Rotating Images with Captions */}
            <div className="standalone-card card-photo-fill card-slideshow-full">
              {santSlides.map((slide, index) => (
                <div 
                  key={index}
                  className={`card-slide-item ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={slide.src} 
                    alt={slide.alt} 
                    className="card-full-cover-img"
                  />
                  <div className="card-caption-overlay">
                    <div className="card-caption-text">{slide.text}</div>
                  </div>
                </div>
              ))}
              
              {/* Subtle indicator dots */}
              <div className="slideshow-dots">
                {santSlides.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`dot ${idx === currentSlide ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner Card with Hospital Video */}
        <div className="hero-banner-card">
          {/* Background capsule shapes */}
          <div className="banner-bg-pattern">
            <div className="pattern-pill p1"></div>
            <div className="pattern-pill p2"></div>
            <div className="pattern-pill p3"></div>
            <div className="pattern-pill p4"></div>
            <div className="pattern-pill p5"></div>
            <div className="pattern-pill p6"></div>
          </div>

          {/* Center / Background Hospital Video */}
          <div className="banner-video-container">
            <video
              ref={videoRef}
              className="hero-video-player"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              onEnded={(e) => {
                e.target.currentTime = 0;
                e.target.play();
              }}
            >
              <source src="/hospital_video_optimized.mp4" type="video/mp4" />
            </video>
            {/* Subtle gradient overlay */}
            <div className="video-gradient-overlay"></div>

            {/* Audio Toggle Button */}
            <button
              type="button"
              className="video-sound-toggle"
              onClick={toggleSound}
              aria-label={isMuted ? "ध्वनि चालू करें" : "ध्वनि बंद करें"}
              title={isMuted ? "ध्वनि चालू करें" : "ध्वनि बंद करें"}
            >
              {isMuted ? <FaVolumeXmark size={18} /> : <FaVolumeHigh size={18} />}
            </button>
          </div>

          {/* Right Circular Stamp Badge with Hindi text */}
          <div className="banner-right-stamp">
            <div className="stamp-wrapper">
              <svg className="stamp-svg" viewBox="0 0 160 160">
                <defs>
                  <path
                    id="circlePath"
                    d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  />
                </defs>
                <text className="stamp-text">
                  <textPath href="#circlePath" startOffset="0%">
                    • आधुनिक चिकित्सा • समर्पित सेवा • त्वरित उपचार
                  </textPath>
                </text>
              </svg>
              <div className="stamp-center-circle">
                <FaArrowUpRightFromSquare size={20} className="stamp-arrow-icon" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
