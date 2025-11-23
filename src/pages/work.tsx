import React from 'react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Label } from '../components/Label';
import './work.css';

const Work: React.FC = () => {
  const projects = [
    {
      title: 'UI Component Library',
      description: 'Built a comprehensive React/TypeScript component library with 9 reusable components including Button, Card, Table, HeroImage, and more. Includes Storybook for component documentation.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
      link: 'https://github.com/penguin2044/my-component-library',
      tech: ['React', 'TypeScript', 'Storybook', 'CSS']
    },
    {
      title: 'Code Quality Pipeline',
      description: 'Implemented automated code quality checks using Husky pre-commit hooks, ESLint, Prettier, and GitHub Actions CI/CD. Ensures consistent code standards.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAABUoTg0hRIRysVXsNZg21ojLCOSsljUElA&s',
      link: 'https://github.com/penguin2044/my-component-library',
      tech: ['Husky', 'ESLint', 'Prettier', 'GitHub Actions', 'Docker']
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built using my custom component library. Features responsive design, Docker deployment, and showcases my work as a Full Stack Web Developer.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
      link: '#',
      tech: ['React', 'TypeScript', 'Docker', 'nginx']
    }
  ];

  return (
    <div className="work-container">
      <Text 
        content="My Work" 
        variant="heading" 
        size="large"
        align="center"
        color="#667eea"
      />
      <Text 
        content="Projects I've built during my Full Stack Web Development program"
        variant="body"
        size="medium"
        align="center"
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <Card
              title={project.title}
              description={project.description}
              imageSrc={project.image}
              imageAlt={project.title}
              backgroundColor="#ffffff"
              borderColor="#667eea"
            />
            
            <div className="project-footer">
              <div className="tech-list">
                <Label text="Tech Stack:" size="small" bold={true} />
                {project.tech.map((tech, techIndex) => (
                  <Label 
                    key={techIndex}
                    text={tech} 
                    size="small"
                    backgroundColor="#f0f0f0"
                  />
                ))}
              </div>
              
              <Button 
                label="View Project"
                onClick={() => window.open(project.link, '_blank')}
                backgroundColor="#007bff"
                color="#ffffff"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;