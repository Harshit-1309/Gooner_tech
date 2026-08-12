import { useEffect, useRef, useState } from 'react';

// Brand logos from assets
import aaveLogo from '../assets/aave.png';
import amdarisLogo from '../assets/amdaris.png';
import aneEnergyLogo from '../assets/aneenrgery.png';
import artiosLogo from '../assets/artios.png';
import ascregenityLogo from '../assets/ascregenity.png';
import compassionLogo from '../assets/compassion.png';
import cutoverLogo from '../assets/cutover.png';
import ellaLogo from '../assets/ella.jpg';
import egressLogo from '../assets/gegress.png';
import essensysLogo from '../assets/essensys.png';
import fentimansLogo from '../assets/fent-.png';
import frogLogo from '../assets/frog.jpg';
import gpsLogo from '../assets/gps.jpg';
import gravitasLogo from '../assets/gravitas.png';
import habitasLogo from '../assets/HABITS.png';
import masternautLogo from '../assets/masternaut.png';
import myzoneLogo from '../assets/myzone.png';
import nacroLogo from '../assets/nacro.jpg';
import pibgroupLogo from '../assets/pibgroup.png';
import qtLogo from '../assets/qt.png';
import quellLogo from '../assets/quell.png';
import shawAcademyLogo from '../assets/showacademy.png';
import showpadLogo from '../assets/showpad.png';
import socitmLogo from '../assets/socitm.png';
import steerLogo from '../assets/steer.png';
import thirdbridgeLogo from '../assets/thirdbridge.png';
import treatwellLogo from '../assets/treatwell.png';
import troyLogo from '../assets/troy.png';
import whitestoresLogo from '../assets/whitestorepng.png';
import ylvaLogo from '../assets/ylva.png';
import zincLogo from '../assets/zinc.png';

const ROW_1_LOGOS = [
  { name: 'Aave', category: 'Decentralized Finance', image: aaveLogo, imgClass: 'logo-img--contain' },
  { name: 'Amdaris', category: 'Digital Transformation', image: amdarisLogo, imgClass: 'logo-img--contain' },
  { name: 'ane.energy', category: 'Renewable Energy', image: aneEnergyLogo, imgClass: 'logo-img--contain' },
  { name: 'Artios Pharma', category: 'Biotechnology', image: artiosLogo, imgClass: 'logo-img--contain' },
  { name: 'ASC Regenity', category: 'Regenerative Solutions', image: ascregenityLogo, imgClass: 'logo-img--badge' },
  { name: 'Compassion in World Farming', category: 'Global NGO', image: compassionLogo, imgClass: 'logo-img--contain' },
  { name: 'Cutover', category: 'Work Orchestration', image: cutoverLogo, imgClass: 'logo-img--contain' },
  { name: 'Deliciously Ella', category: 'Food & Wellness', image: ellaLogo, imgClass: 'logo-img--badge' },
  { name: 'Egress', category: 'Cybersecurity', image: egressLogo, imgClass: 'logo-img--contain' },
  { name: 'essensys', category: 'PropTech Software', image: essensysLogo, imgClass: 'logo-img--contain' },
  { name: 'Fentimans', category: 'Beverages & Retail', image: fentimansLogo, imgClass: 'logo-img--contain' },
  { name: 'Frog Bikes', category: 'Manufacturing & Retail', image: frogLogo, imgClass: 'logo-img--badge' },
  { name: 'GPS', category: 'Payment Infrastructure', image: gpsLogo, imgClass: 'logo-img--badge' },
  { name: 'Gravitas Recruitment', category: 'Talent & Enterprise', image: gravitasLogo, imgClass: 'logo-img--badge' },
  { name: 'Habitas', category: 'Hospitality', image: habitasLogo, imgClass: 'logo-img--contain' },
  { name: 'Masternaut', category: 'Telematics & Fleet', image: masternautLogo, imgClass: 'logo-img--contain' },
];

const ROW_2_LOGOS = [
  { name: 'Myzone', category: 'Fitness Tech', image: myzoneLogo, imgClass: 'logo-img--contain' },
  { name: 'Nacro', category: 'Social Justice', image: nacroLogo, imgClass: 'logo-img--badge' },
  { name: 'PIB Group', category: 'Insurance Services', image: pibgroupLogo, imgClass: 'logo-img--badge' },
  { name: 'The Qt Company', category: 'Software Development', image: qtLogo, imgClass: 'logo-img--contain' },
  { name: 'Quell Therapeutics', category: 'Cell Therapy', image: quellLogo, imgClass: 'logo-img--contain' },
  { name: 'Shaw Academy', category: 'Online Education', image: shawAcademyLogo, imgClass: 'logo-img--badge' },
  { name: 'Showpad', category: 'Sales Enablement', image: showpadLogo, imgClass: 'logo-img--contain' },
  { name: 'Socitm', category: 'Public Sector Tech', image: socitmLogo, imgClass: 'logo-img--badge' },
  { name: 'Steer', category: 'Transport Infrastructure', image: steerLogo, imgClass: 'logo-img--contain' },
  { name: 'Third Bridge', category: 'Investment Research', image: thirdbridgeLogo, imgClass: 'logo-img--badge' },
  { name: 'Treatwell', category: 'Beauty & Wellness', image: treatwellLogo, imgClass: 'logo-img--badge' },
  { name: 'Troy Group', category: 'Industrial Distribution', image: troyLogo, imgClass: 'logo-img--badge' },
  { name: 'White Stores', category: 'Outdoor Retail', image: whitestoresLogo, imgClass: 'logo-img--badge' },
  { name: 'Ylva', category: 'Real Estate & Growth', image: ylvaLogo, imgClass: 'logo-img--contain' },
  { name: 'Zinc Media Group', category: 'Media & TV Production', image: zincLogo, imgClass: 'logo-img--contain' },
];

function LogoCard({ client }) {
  return (
    <div className="logo-card" title={`${client.name} • ${client.category}`}>
      <div className="logo-card__glow" aria-hidden="true" />
      <div className="logo-card__content">
        <img
          src={client.image}
          alt={`${client.name} Logo`}
          className={`logo-card__img ${client.imgClass || ''}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="trusted-by"
      ref={sectionRef}
      className="trusted-by-section"
      aria-label="Trusted by Leading Organizations"
    >
      {/* Soft Ambient Radial Background Light */}
      <div className="trusted-by__ambient-glow" aria-hidden="true" />

      <div className="trusted-by__container">
        {/* Header Block */}
        <div className={`trusted-by__header ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="trusted-by__title">Trusted by Leading Organizations</h2>
          <p className="trusted-by__subtitle">
            We&apos;ve partnered with organizations across manufacturing, healthcare, retail, SaaS, logistics, and
            financial services to deliver enterprise finance transformation.
          </p>
        </div>

        {/* Marquee Wrapper with Left/Right Gradient Fade Masks */}
        <div className={`marquee-container ${isVisible ? 'is-visible' : ''}`}>
          {/* Row 1: Right to Left */}
          <div className="marquee-row marquee-row--forward">
            <div className="marquee-track marquee-track--forward">
              {/* Primary list */}
              {ROW_1_LOGOS.map((client, idx) => (
                <LogoCard key={`r1-a-${client.name}-${idx}`} client={client} />
              ))}
              {/* Duplicated list for seamless infinite loop */}
              {ROW_1_LOGOS.map((client, idx) => (
                <LogoCard key={`r1-b-${client.name}-${idx}`} client={client} aria-hidden="true" />
              ))}
            </div>
          </div>

          {/* Separator between rows */}
          <div className="marquee-separator" aria-hidden="true" />

          {/* Row 2: Left to Right */}
          <div className="marquee-row marquee-row--reverse">
            <div className="marquee-track marquee-track--reverse">
              {/* Primary list */}
              {ROW_2_LOGOS.map((client, idx) => (
                <LogoCard key={`r2-a-${client.name}-${idx}`} client={client} />
              ))}
              {/* Duplicated list for seamless infinite loop */}
              {ROW_2_LOGOS.map((client, idx) => (
                <LogoCard key={`r2-b-${client.name}-${idx}`} client={client} aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
