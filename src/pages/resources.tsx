import React from 'react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Img } from '../components/Img';
import './resources.css';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'React Documentation',
      summary: 'Official React documentation with guides, API reference, and tutorials',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      link: 'https://react.dev'
    },
    {
      title: 'TypeScript Handbook',
      summary: 'Complete guide to TypeScript from basics to advanced topics',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
      link: 'https://www.typescriptlang.org/docs/'
    },
    {
      title: 'MDN Web Docs',
      summary: 'Comprehensive resource for web technologies including HTML, CSS, and JavaScript',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
      link: 'https://developer.mozilla.org'
    },
    {
      title: 'Docker Documentation',
      summary: 'Learn containerization and deployment with Docker',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400',
      link: 'https://docs.docker.com'
    },
    {
      title: 'Git Documentation',
      summary: 'Version control fundamentals and advanced Git workflows',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400',
      link: 'https://git-scm.com/doc'
    },
    {
      title: 'Storybook Docs',
      summary: 'Build and document UI components in isolation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      link: 'https://storybook.js.org/docs'
    }
  ];

  return (
    <div className="resources-container">
      <Text 
        content="Helpful Resources" 
        variant="heading" 
        size="large"
        align="center"
        color="#667eea"
      />
      <Text 
        content="Essential documentation and learning resources I use"
        variant="body"
        align="center"
      />

      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-item">
            <Img 
              src={resource.image}
              alt={resource.title}
              width="100%"
              height="200px"
              objectFit="cover"
              borderRadius="8px 8px 0 0"
            />
            <Card
              title={resource.title}
              description={resource.summary}
              backgroundColor="#ffffff"
              borderColor="#667eea"
            />
            <div className="resource-button">
              <Button 
                label="Visit Resource"
                onClick={() => window.open(resource.link, '_blank')}
                backgroundColor="#667eea"
                color="#ffffff"
                size="medium"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;