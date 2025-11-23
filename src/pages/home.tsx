import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { HeroImage } from '../components/HeroImage';
import { Text } from '../components/Text';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HeroImage
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
        alt="Web Development Workspace"
        title="Jesse Kleinschmit"
        subtitle="Full Stack Web Developer"
        height="500px"
        overlayOpacity={0.6}
        color="#ffffff"
      />

      <div className="hero-extra">
        <Text 
          content="Building modern web applications with React, TypeScript, and creative problem-solving" 
          variant="body"
          size="large"
          align="center"
        />
        <div className="hero-buttons">
          <Button 
            label="View My Work"
            size="large" 
            onClick={() => window.location.href = '/work'}
            backgroundColor="#007bff"
            color="#ffffff"
          />
          <Button 
            label="Contact Me"
            size="large"
            backgroundColor="#6c757d"
            color="#ffffff"
            onClick={() => window.location.href = '#contact'}
          />
        </div>
      </div>

      <section className="about-section">
        <Text 
          content="About Me" 
          variant="heading" 
          size="large"
          align="center"
          color="#667eea"
        />
        
        <div className="cards-grid">
          <Card
            title="Full Stack Web Developer"
            description="I'm a Full Stack Web Development student at Red River College Polytech, with a strong foundation in web development, programming, and agile methodologies. Currently seeking co-op opportunities for Winter 2026 (January 5 - May 1, 2026)."
            backgroundColor="#ffffff"
            borderColor="#667eea"
            width="100%"
          />

          <Card
            title="Program Training"
            description="Trained in: Web Development (React, TypeScript, HTML/CSS), Programming & Software Development, Agile Business Analysis, Systems Analysis & Design, Business Systems Build & Testing, and Web Security."
            backgroundColor="#f8f9fa"
            borderColor="#667eea"
            width="100%"
          />
        </div>
      </section>

      <section className="skills-section">
        <Text 
          content="Key Skills" 
          variant="heading" 
          size="large"
          align="center"
          color="#667eea"
        />
        
        <div className="skills-grid">
          <Card
            title="Frontend Development"
            description="React, TypeScript, HTML, CSS, Responsive Design, Component Libraries"
            backgroundColor="#ffffff"
            borderColor="#007bff"
          />
          <Card
            title="Backend & Tools"
            description="Node.js, Docker, Git, GitHub Actions, CI/CD, nginx"
            backgroundColor="#ffffff"
            borderColor="#28a745"
          />
          <Card
            title="Best Practices"
            description="Agile, Unit Testing, Code Quality, ESLint, Prettier, Documentation"
            backgroundColor="#ffffff"
            borderColor="#ffc107"
          />
        </div>
      </section>

      <section id="contact" className="contact-section">
        <Card
          title="Get In Touch"
          description="Available for co-op opportunities starting January 2026. Let's build something great together!"
          backgroundColor="#667eea"
          color="#ffffff"
        />
        <div className="contact-buttons">
          <Button 
            label="Email Me"
            size="large"
            backgroundColor="#ffffff"
            color="#667eea"
            onClick={() => window.location.href = 'mailto:kleinschmitj@example.com'}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;