import React from 'react';
import './hero.css';
import designSystem from '../../design-system.json';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaHref = '#menu' 
}) => {
  const palette = designSystem.colorPalettes.japanese;
  
  return (
    <section 
      className="hero" 
      role="banner"
      aria-label="Section principale"
    >
      <div className="hero__overlay" aria-hidden="true"></div>
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <a 
          href={ctaHref} 
          className="hero__button"
          aria-label={`${ctaText} - Lien vers le menu`}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};