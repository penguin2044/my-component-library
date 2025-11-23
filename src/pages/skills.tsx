import React from 'react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Table } from '../components/Table';
import { TableHeader } from '../components/TableHeader';
import { TableRow } from '../components/TableRow';
import { TableCell } from '../components/TableCell';
import { TableFooter } from '../components/TableFooter';
import './skills.css';

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <Text 
        content="My Skills" 
        variant="heading" 
        size="large"
        align="center"
        color="#667eea"
      />
      <Text 
        content="Technical skills and tools I use"
        variant="body"
        align="center"
      />

      <section className="skills-overview">
        <Card
          title="Languages & Frameworks"
          description="Proficient in modern web development technologies including JavaScript, TypeScript, React, and Node.js. Strong foundation in HTML5, CSS3, and responsive design principles."
          backgroundColor="#ffffff"
          borderColor="#007bff"
        />
        
        <Card
          title="Tools & Technologies"
          description="Experienced with industry-standard development tools including Git version control, Docker containerization, VS Code, and component documentation with Storybook."
          backgroundColor="#ffffff"
          borderColor="#28a745"
        />
        
        <Card
          title="Methodologies"
          description="Trained in Agile development, Test-Driven Development (TDD), Continuous Integration/Continuous Deployment (CI/CD), and code quality best practices."
          backgroundColor="#ffffff"
          borderColor="#ffc107"
        />
      </section>

      <section className="skills-tables">
        <div className="skill-table-container">
          <Text 
            content="Languages & Frameworks" 
            variant="heading" 
            size="medium"
            color="#667eea"
          />
          
          <Table striped={true} hoverable={true} borderColor="#667eea">
            <TableHeader backgroundColor="#667eea" color="#ffffff">
              <TableRow>
                <TableCell isHeader={true} align="left">
                  <Text content="Technology" variant="body" color="#ffffff" bold={true} />
                </TableCell>
                <TableCell isHeader={true} align="center">
                  <Text content="Proficiency" variant="body" color="#ffffff" bold={true} />
                </TableCell>
              </TableRow>
            </TableHeader>
            
            <TableRow>
              <TableCell align="left">
                <Text content="JavaScript/TypeScript" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Advanced" variant="body" bold={true} color="#28a745" />
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell align="left">
                <Text content="HTML/CSS" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Advanced" variant="body" bold={true} color="#28a745" />
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell align="left">
                <Text content="React" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Advanced" variant="body" bold={true} color="#28a745" />
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell align="left">
                <Text content="Node.js" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Intermediate" variant="body" bold={true} color="#ffc107" />
              </TableCell>
            </TableRow>
            
            <TableFooter backgroundColor="#f8f9fa">
              <TableRow>
                <TableCell colSpan={2} align="center">
                  <Text content="4 Technologies Listed" variant="caption" />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <div className="skill-table-container">
          <Text 
            content="Tools & Technologies" 
            variant="heading" 
            size="medium"
            color="#667eea"
          />
          
          <Table striped={true} hoverable={true} borderColor="#667eea">
            <TableHeader backgroundColor="#667eea" color="#ffffff">
              <TableRow>
                <TableCell isHeader={true} align="left">
                  <Text content="Tool" variant="body" color="#ffffff" bold={true} />
                </TableCell>
                <TableCell isHeader={true} align="center">
                  <Text content="Proficiency" variant="body" color="#ffffff" bold={true} />
                </TableCell>
              </TableRow>
            </TableHeader>
            
            <TableRow>
              <TableCell align="left">
                <Text content="Git/GitHub" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Advanced" variant="body" bold={true} color="#28a745" />
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell align="left">
                <Text content="Docker" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Intermediate" variant="body" bold={true} color="#ffc107" />
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell align="left">
                <Text content="VS Code" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Advanced" variant="body" bold={true} color="#28a745" />
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell align="left">
                <Text content="Storybook" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Intermediate" variant="body" bold={true} color="#ffc107" />
              </TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell align="left">
                <Text content="ESLint/Prettier" variant="body" />
              </TableCell>
              <TableCell align="center">
                <Text content="Advanced" variant="body" bold={true} color="#28a745" />
              </TableCell>
            </TableRow>
            
            <TableFooter backgroundColor="#f8f9fa">
              <TableRow>
                <TableCell colSpan={2} align="center">
                  <Text content="5 Tools Listed" variant="caption" />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Skills;