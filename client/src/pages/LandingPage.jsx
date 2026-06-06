import React from 'react';
import { Navigation } from '../components/ui/Navigation.jsx';
import { Hero } from '../components/ui/Hero.jsx';
import { Manifesto } from '../components/ui/Manifesto.jsx';
import { Facilities } from '../components/ui/Facilities.jsx';
import { ObservationFeed } from '../components/ui/ObservationFeed.jsx';
import { Archives } from '../components/ui/Archives.jsx';
import { Footer } from '../components/ui/Footer.jsx';

export default function LandingPage() {
  return (
    <div className="bg-black text-white font-mono">
      <Navigation />
      <Hero />
      <Manifesto />
      <Facilities />
      <ObservationFeed />
      <Archives />
      <Footer />
    </div>
  );
}
