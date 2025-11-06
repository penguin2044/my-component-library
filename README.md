# Assignment 13 - Component Library with Code Quality Checks

**Student:** Jesse Kleinschmit
**Date:** November 2, 2025
**Course:** Business System and Testing

## GitHub Repository
https://github.com/penguin2044/my-component-library

## Docker Instructions

### Build
```bash
docker build -t kleinschmit_jesse_coding_assignment13 .
```

### Run
```bash
docker run -d -p 8018:80 --name kleinschmit_jesse_coding_assignment13 kleinschmit_jesse_coding_assignment13
```

### Access
http://localhost:8018 or http://127.0.0.1:8018

## Features Implemented
- ✅ Husky pre-commit hooks
- ✅ Prettier code formatting
- ✅ ESLint code quality checks
- ✅ Automated tests
- ✅ GitHub Actions CI/CD
- ✅ Docker containerization on port 8018