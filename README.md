# Jesse Kleinschmit - Portfolio Website

Assignment 14: Building a Portfolio Website
Full Stack Web Development Program
Red River College Polytech

**GitHub Repository:** https://github.com/penguin2044/my-component-library

---

## Getting Started

### Clone Repository
```bash
git clone https://github.com/penguin2044/my-component-library.git
cd my-component-library
```

---

## Run with Docker

### Build
```bash
docker build -t kleinschmit_jesse_coding_assignment14 .
```

### Run
```bash
docker run -d -p 5575:80 --name kleinschmit_jesse_coding_assignment14 kleinschmit_jesse_coding_assignment14
```

### Access

Open browser: http://localhost:5575

---

## Stop Container
```bash
docker stop kleinschmit_jesse_coding_assignment14
docker rm kleinschmit_jesse_coding_assignment14
```

---

## Assignment Requirements

- Container name: kleinschmit_jesse_coding_assignment14
- Working directory: kleinschmit_jesse_final_site
- Port: 5575
- Includes all 5 required sections: Home, Work, Skills, Resources, Dev Setup