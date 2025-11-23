import React from 'react';
import { Card } from '../components/Card';
import { Text } from '../components/Text';
import { Label } from '../components/Label';
import { Dropdown } from '../components/Dropdown';
import { RadioButton } from '../components/RadioButton';
import './devsetup.css';

const DevSetup: React.FC = () => {
  const [selectedEditor, setSelectedEditor] = React.useState('vscode');
  const [terminal, setTerminal] = React.useState('powershell');
  const [theme, setTheme] = React.useState('dark');

  const editorOptions = [
    { value: 'vscode', label: 'VS Code' },
    { value: 'webstorm', label: 'WebStorm' },
    { value: 'sublime', label: 'Sublime Text' },
    { value: 'atom', label: 'Atom' }
  ];

  return (
    <div className="devsetup-container">
      <Text 
        content="Developer Setup" 
        variant="heading" 
        size="large"
        align="center"
        color="#667eea"
      />
      <Text 
        content="My preferred development environment and tools"
        variant="body"
        align="center"
      />

      <section className="setup-section">
        <Card
          title="VS Code Setup"
          description="Visual Studio Code is my primary code editor. I use essential extensions like ESLint for code quality, Prettier for formatting, GitLens for Git integration, and various theme extensions for a comfortable coding experience."
          backgroundColor="#ffffff"
          borderColor="#007bff"
        />

        <div className="setup-details">
          <div className="setup-card">
            <Label text="Essential VS Code Extensions:" bold={true} size="medium" />
            <div className="extension-list">
              <Label text="• ESLint - Code quality and linting" />
              <Label text="• Prettier - Code formatting" />
              <Label text="• GitLens - Git integration" />
              <Label text="• Auto Rename Tag - HTML/JSX productivity" />
              <Label text="• Path Intellisense - File path autocomplete" />
              <Label text="• ES7+ React Snippets - React code snippets" />
            </div>
          </div>
        </div>
      </section>

      <section className="setup-section">
        <Card
          title="Terminal Preferences"
          description="I use PowerShell as my primary terminal with Git Bash for Git operations. My terminal is configured with custom prompts and aliases for improved productivity."
          backgroundColor="#ffffff"
          borderColor="#28a745"
        />

        <div className="interactive-setup">
          <Label text="Preferred Terminal:" bold={true} size="medium" />
          <div className="radio-group">
            <RadioButton 
              label="PowerShell"
              name="terminal"
              value="powershell"
              checked={terminal === 'powershell'}
              onChange={(value) => setTerminal(value)}
              accentColor="#007bff"
            />
            <RadioButton 
              label="Git Bash"
              name="terminal"
              value="gitbash"
              checked={terminal === 'gitbash'}
              onChange={(value) => setTerminal(value)}
              accentColor="#007bff"
            />
            <RadioButton 
              label="Command Prompt"
              name="terminal"
              value="cmd"
              checked={terminal === 'cmd'}
              onChange={(value) => setTerminal(value)}
              accentColor="#007bff"
            />
          </div>
        </div>
      </section>

      <section className="setup-section">
        <Card
          title="Editor Font & Theme"
          description="I prefer monospace fonts for coding with a comfortable font size. Dark themes reduce eye strain during long coding sessions."
          backgroundColor="#ffffff"
          borderColor="#ffc107"
        />

        <div className="interactive-setup">
          <div className="setup-item">
            <Dropdown 
              options={editorOptions}
              label="Preferred Code Editor:"
              selectedValue={selectedEditor}
              placeholder="Select your editor"
              onChange={(value) => setSelectedEditor(value)}
            />
          </div>

          <div className="setup-item">
            <Label text="Editor Font:" bold={true} size="medium" />
            <Label text="Fira Code (with ligatures enabled)" size="small" />
          </div>

          <div className="setup-item">
            <Label text="Font Size:" bold={true} size="medium" />
            <Label text="14px - 16px for optimal readability" size="small" />
          </div>

          <div className="setup-item">
            <Label text="Color Theme Preference:" bold={true} size="medium" />
            <div className="radio-group">
              <RadioButton 
                label="Dark Theme (One Dark Pro)"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={(value) => setTheme(value)}
                accentColor="#667eea"
              />
              <RadioButton 
                label="Light Theme (GitHub Light)"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={(value) => setTheme(value)}
                accentColor="#667eea"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="setup-section">
        <Card
          title="Development Workflow"
          description="My workflow includes using Git for version control with frequent commits, Docker for containerization, npm for package management, and ESLint/Prettier for code quality. I follow Agile methodologies and practice Test-Driven Development."
          backgroundColor="#ffffff"
          borderColor="#dc3545"
        />

        <div className="workflow-details">
          <Label text="Key Workflow Tools:" bold={true} size="medium" />
          <div className="workflow-list">
            <Label text="✓ Git & GitHub - Version control and collaboration" />
            <Label text="✓ Docker - Containerization and deployment" />
            <Label text="✓ npm - Package management" />
            <Label text="✓ Husky - Git hooks for code quality" />
            <Label text="✓ GitHub Actions - CI/CD automation" />
            <Label text="✓ Storybook - Component development and documentation" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevSetup;