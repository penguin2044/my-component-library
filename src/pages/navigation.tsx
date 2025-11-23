import React from 'react';
import { Button } from '../components/Button';
import './navigation.css';

const Navigation: React.FC = () => {
  const navigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Jesse Kleinschmit</h2>
        </div>
        <div className="nav-links">
          <Button 
            label="Home"
            onClick={() => navigate('/')}
            backgroundColor="transparent"
            color="#333333"
            size="medium"
          />
          <Button 
            label="Work"
            onClick={() => navigate('/work')}
            backgroundColor="transparent"
            color="#333333"
            size="medium"
          />
          <Button 
            label="Skills"
            onClick={() => navigate('/skills')}
            backgroundColor="transparent"
            color="#333333"
            size="medium"
          />
          <Button 
            label="Resources"
            onClick={() => navigate('/resources')}
            backgroundColor="transparent"
            color="#333333"
            size="medium"
          />
          <Button 
            label="Dev Setup"
            onClick={() => navigate('/devsetup')}
            backgroundColor="transparent"
            color="#333333"
            size="medium"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;