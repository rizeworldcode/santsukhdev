import React from 'react';
import Hero from '../components/sections/Hero';
import Departments from '../components/sections/Departments';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Doctors from '../components/sections/Doctors';
import Ambulance from '../components/sections/Ambulance';
import Gallery from '../components/sections/Gallery';

export default function HomePage({ onOpenAppointment }) {
  return (
    <div className="home-page-view">
      <Hero onOpenAppointment={onOpenAppointment} />
      <Departments onOpenAppointment={onOpenAppointment} />
      <About />
      <Services onOpenAppointment={onOpenAppointment} />
      <Doctors onOpenAppointment={onOpenAppointment} />
      <Ambulance onOpenAppointment={onOpenAppointment} />
      <Gallery />
    </div>
  );
}
